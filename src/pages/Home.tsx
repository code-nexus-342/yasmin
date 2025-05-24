import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/Home.scss';

const Home = () => {
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
      <ParticleBackground />
      
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