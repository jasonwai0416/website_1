import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 * The "mirage" — a slowly breathing organic form. Displacement is a
 * layered sine field (cheap, reliable, and reads as organic growth),
 * shaded with fresnel so the silhouette glows against the dark.
 * ------------------------------------------------------------------ */

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying float vDisp;
  varying vec3 vNormal;
  varying vec3 vView;

  float field(vec3 p, float t) {
    return sin(p.x * 2.0 + t) * 0.5
         + sin(p.y * 2.3 + t * 1.3) * 0.5
         + sin(p.z * 2.7 + t * 0.7) * 0.5;
  }

  void main() {
    float d = field(position, uTime * 0.6);
    vDisp = d;
    vec3 displaced = position + normal * d * uAmp;

    vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`

const FRAG = /* glsl */ `
  uniform vec3 uJade;
  uniform vec3 uEmerald;
  uniform vec3 uGold;
  uniform float uTime;
  varying float vDisp;
  varying vec3 vNormal;
  varying vec3 vView;

  void main() {
    float fres = pow(1.0 - clamp(dot(vNormal, vView), 0.0, 1.0), 2.4);

    // Colour is driven by the displacement field, so the surface shifts
    // between jade, emerald and gold as the form breathes.
    float m = vDisp * 0.5 + 0.5;
    vec3 base = mix(uJade, uEmerald, smoothstep(0.15, 0.9, m));
    base = mix(base, uGold, smoothstep(0.72, 1.0, m) * 0.65);

    vec3 col = base * 0.16;
    col += base * fres * 1.5;
    col += uEmerald * pow(fres, 5.0) * 0.9;

    gl_FragColor = vec4(col, 1.0);
  }
`

function MirageOrb({ reduced }) {
  const mesh = useRef(null)
  const mat = useRef(null)
  const shell = useRef(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.22 },
      uJade: { value: new THREE.Color('#1f6f5c') },
      uEmerald: { value: new THREE.Color('#2fbf94') },
      uGold: { value: new THREE.Color('#c8a45c') },
    }),
    []
  )

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (mat.current) mat.current.uniforms.uTime.value = t
    if (!reduced && mesh.current) {
      mesh.current.rotation.y += delta * 0.12
      mesh.current.rotation.x = Math.sin(t * 0.18) * 0.16
      // Ease toward the pointer for a weightless parallax.
      const g = mesh.current.parent
      if (g) {
        g.rotation.y += (state.pointer.x * 0.3 - g.rotation.y) * 0.04
        g.rotation.x += (-state.pointer.y * 0.22 - g.rotation.x) * 0.04
      }
    }
    if (shell.current && !reduced) {
      shell.current.rotation.y -= delta * 0.06
      shell.current.rotation.z += delta * 0.02
    }
  })

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 24]} />
        <shaderMaterial
          ref={mat}
          uniforms={uniforms}
          vertexShader={VERT}
          fragmentShader={FRAG}
        />
      </mesh>

      {/* Technical outer shell — the "architectural" counterpoint */}
      <mesh ref={shell} scale={1.42}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial wireframe color="#2fbf94" transparent opacity={0.09} />
      </mesh>
    </group>
  )
}

function Drift() {
  const points = useRef(null)
  const count = 260

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.cos(phi) * 0.7
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.014
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#8c8c86"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function MirageScene() {
  const wrap = useRef(null)
  const [visible, setVisible] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // Stop rendering entirely once the hero scrolls out of view.
  useEffect(() => {
    const el = wrap.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      rootMargin: '120px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
        camera={{ position: [0, 0, 6], fov: 42 }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[6, 4, 6]} intensity={40} color="#2fbf94" />
        <pointLight position={[-7, -3, 2]} intensity={26} color="#c8a45c" />
        <MirageOrb reduced={reduced} />
        <Drift />
      </Canvas>
    </div>
  )
}
