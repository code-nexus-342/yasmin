import { motion } from 'framer-motion';
import '../styles/About.scss';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div className="about-header" variants={fadeInUp}>
          <h1 className="text-gradient">About Yasmin</h1>
          <p className="subtitle">Digital Strategist & Business Manager</p>
        </motion.div>

        <motion.div className="about-content" variants={staggerContainer}>
          <motion.div className="about-section" variants={fadeInUp}>
            <h2>My Journey</h2>
            <p>
              With a passion for digital innovation and strategic growth, I've dedicated my career
              to helping businesses thrive in the digital landscape. My journey began with a deep
              fascination for how digital platforms can transform businesses and create meaningful
              connections with audiences.
            </p>
          </motion.div>

          <motion.div className="about-section" variants={fadeInUp}>
            <h2>Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-item">
                <h3>Social Media Management</h3>
                <p>Strategic planning and execution of social media campaigns that drive engagement and growth.</p>
              </div>
              <div className="expertise-item">
                <h3>Brand Promotion</h3>
                <p>Creating compelling brand narratives and strategies that resonate with target audiences.</p>
              </div>
              <div className="expertise-item">
                <h3>Peer Influencing</h3>
                <p>Building and managing relationships with key industry influencers to amplify brand reach.</p>
              </div>
              <div className="expertise-item">
                <h3>Digital Marketing</h3>
                <p>Comprehensive digital marketing strategies that drive measurable results and ROI.</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-section" variants={fadeInUp}>
            <h2>My Approach</h2>
            <p>
              I believe in a data-driven, creative approach to digital strategy. Every project
              begins with a deep understanding of your business goals and target audience.
              Through careful analysis and creative thinking, I develop tailored strategies
              that deliver exceptional results.
            </p>
          </motion.div>

          <motion.div className="about-section values" variants={fadeInUp}>
            <h2>Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Staying ahead of digital trends and embracing new technologies.</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>Building trust through transparent communication and ethical practices.</p>
              </div>
              <div className="value-item">
                <h3>Excellence</h3>
                <p>Delivering exceptional results through attention to detail and dedication.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 