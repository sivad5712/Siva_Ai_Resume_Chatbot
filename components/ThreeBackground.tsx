"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Create particles
    // Detect mobile device to optimize performance
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 400;
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Random coordinates in a 3D box
      positions[i] = (Math.random() - 0.5) * 60; // X
      positions[i + 1] = (Math.random() - 0.5) * 60; // Y
      positions[i + 2] = (Math.random() - 0.5) * 40; // Z

      // Small velocities
      velocities[i] = (Math.random() - 0.5) * 0.03;
      velocities[i + 1] = (Math.random() - 0.5) * 0.03;
      velocities[i + 2] = (Math.random() - 0.5) * 0.03;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Get color based on dark/light mode
    const getParticleColor = () => {
      if (typeof document !== "undefined") {
        const isDark = document.documentElement.classList.contains("dark");
        return isDark ? 0x818cf8 : 0x4f46e5; // Indigo 400 vs Indigo 600
      }
      return 0x6366f1;
    };

    // Create materials using simple canvas dots or round textures
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.5,
      color: getParticleColor(),
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // 5. Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 4;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 4;
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // 6. Theme Change Observer
    // Detect theme change to update particle color dynamically
    let observer: MutationObserver | null = null;
    if (typeof document !== "undefined") {
      observer = new MutationObserver(() => {
        material.color.setHex(getParticleColor());
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse interpolation (LERP)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Subtle scene rotation based on mouse
      points.rotation.y = mouseX * 0.15;
      points.rotation.x = -mouseY * 0.15;

      // Animate particles individually
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Apply velocity
        posArray[i] += velocities[i];
        posArray[i + 1] += velocities[i + 1];
        posArray[i + 2] += velocities[i + 2];

        // Bounds check (wrap around when particles leave box bounds)
        if (Math.abs(posArray[i]) > 30) velocities[i] *= -1;
        if (Math.abs(posArray[i + 1]) > 30) velocities[i + 1] *= -1;
        if (Math.abs(posArray[i + 2]) > 20) velocities[i + 2] *= -1;
      }

      posAttr.needsUpdate = true;

      // Auto-rotation
      points.rotation.z += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 9. Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (observer) {
        observer.disconnect();
      }
      cancelAnimationFrame(animationFrameId);
      
      // Clean up Three.js objects to avoid memory leaks
      geometry.dispose();
      material.dispose();
      scene.remove(points);
      
      if (rendererRef.current && containerRef.current) {
        try {
          containerRef.current.removeChild(renderer.domElement);
        } catch (e) {
          // renderer element might already be removed
        }
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none opacity-80 dark:opacity-60"
    />
  );
}
