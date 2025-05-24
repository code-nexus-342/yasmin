import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
// import gsap from 'gsap';
import '../styles/Home.scss';

const Home = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    // Three.js Particle System
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      (containerRef.current as HTMLElement).appendChild(renderer.domElement);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0xff00ff,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    camera.position.z = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        (containerRef.current as HTMLElement).removeChild(renderer.domElement);
      }
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="home">
      <div ref={containerRef} className="particle-container" />
      
      <motion.div 
        className="hero-section"
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.h1 
            className="hero-title"
            variants={textVariants}
            custom={0}
          >
            Empowering Brands & Businesses
            <br />
            Through Strategic Digital Growth
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            variants={textVariants}
            custom={1}
          >
            Hi, I'm Yasmin, a business manager skilled in Social Media Management,
            Brand Promotion, Peer Influencing, and Digital Marketing.
            Let's elevate your online presence.
          </motion.p>

          <motion.div 
            className="cta-buttons"
            variants={textVariants}
            custom={2}
          >
            <Link to="/services" className="btn primary">
              My Services
            </Link>
            <Link to="/contact" className="btn secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 