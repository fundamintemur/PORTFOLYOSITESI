import { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xe8eeff, 0.015);
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const isMobile = window.innerWidth < 768;
    const pointsCount = isMobile ? 170 : 360;
    const positions = new Float32Array(pointsCount * 3);
    const velocities = new Float32Array(pointsCount * 3);
    const spread = isMobile ? 25 : 36;

    for (let i = 0; i < pointsCount; i += 1) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * spread;
      positions[idx + 1] = (Math.random() - 0.5) * spread;
      positions[idx + 2] = (Math.random() - 0.5) * spread * 0.35;

      velocities[idx] = (Math.random() - 0.5) * 0.0044;
      velocities[idx + 1] = (Math.random() - 0.5) * 0.0044;
      velocities[idx + 2] = (Math.random() - 0.5) * 0.0022;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x5b72ff,
      size: isMobile ? 0.1 : 0.12,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7b5cff,
      transparent: true,
      opacity: 0.28,
    });
    const maxConnections = isMobile ? 260 : 900;
    const linePositions = new Float32Array(maxConnections * 6);
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = isMobile ? 160 : 320;
    const starsPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i += 1) {
      const idx = i * 3;
      starsPositions[idx] = (Math.random() - 0.5) * spread * 2.3;
      starsPositions[idx + 1] = (Math.random() - 0.5) * spread * 2.1;
      starsPositions[idx + 2] = -8 - Math.random() * 20;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.035 : 0.045,
      transparent: true,
      opacity: 0.62,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const mouse = new THREE.Vector2(0, 0);
    const pointerMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", pointerMove);

    const bounds = spread * 0.5;
    let animationId;
    const animate = () => {
      const posAttr = particlesGeometry.getAttribute("position");
      const posArray = posAttr.array;

      for (let i = 0; i < pointsCount; i += 1) {
        const idx = i * 3;
        posArray[idx] += velocities[idx];
        posArray[idx + 1] += velocities[idx + 1];
        posArray[idx + 2] += velocities[idx + 2];

        if (Math.abs(posArray[idx]) > bounds) velocities[idx] *= -1;
        if (Math.abs(posArray[idx + 1]) > bounds) velocities[idx + 1] *= -1;
        if (Math.abs(posArray[idx + 2]) > bounds * 0.5) velocities[idx + 2] *= -1;
      }
      posAttr.needsUpdate = true;

      let connectionIndex = 0;
      for (let i = 0; i < pointsCount; i += 1) {
        const a = i * 3;
        for (let j = i + 1; j < pointsCount; j += 1) {
          const b = j * 3;
          const dx = posArray[a] - posArray[b];
          const dy = posArray[a + 1] - posArray[b + 1];
          const dz = posArray[a + 2] - posArray[b + 2];
          const dist = dx * dx + dy * dy + dz * dz;

          if (dist < 8.6 && connectionIndex < maxConnections) {
            const lineIdx = connectionIndex * 6;
            linePositions[lineIdx] = posArray[a];
            linePositions[lineIdx + 1] = posArray[a + 1];
            linePositions[lineIdx + 2] = posArray[a + 2];
            linePositions[lineIdx + 3] = posArray[b];
            linePositions[lineIdx + 4] = posArray[b + 1];
            linePositions[lineIdx + 5] = posArray[b + 2];
            connectionIndex += 1;
          }
        }
      }

      lines.geometry.setDrawRange(0, connectionIndex * 2);
      lines.geometry.attributes.position.needsUpdate = true;

      const t = performance.now() * 0.001;
      particles.rotation.y += 0.00075;
      particles.rotation.x += 0.00012;
      particlesMaterial.color.setHSL(0.66 + Math.sin(t * 0.2) * 0.04, 0.85, 0.66);
      lineMaterial.color.setHSL(0.74 + Math.sin(t * 0.18) * 0.05, 0.86, 0.62);
      particlesMaterial.opacity = 0.78 + Math.sin(t * 1.4) * 0.12;
      lineMaterial.opacity = 0.24 + Math.sin(t * 1.15) * 0.07;
      starsMaterial.opacity = 0.5 + Math.sin(t * 0.95) * 0.12;
      stars.rotation.y -= 0.00015;
      scene.rotation.y += mouse.x * 0.00045;
      scene.rotation.x += mouse.y * 0.0003;

      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointerMove);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="three-bg" ref={mountRef} aria-hidden="true" />;
}

export default ThreeBackground;
