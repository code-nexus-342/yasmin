import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Portfolio.scss';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Brand Launch",
      category: "Brand Development",
      description: "Successfully launched a new e-commerce brand, achieving 200% growth in the first quarter.",
      image: "https://placehold.co/600x400/0A0A0A/FF00FF?text=E-commerce+Brand",
      results: [
        "200% Revenue Growth",
        "50K+ Social Media Followers",
        "85% Customer Satisfaction"
      ]
    },
    {
      id: 2,
      title: "Social Media Revitalization",
      category: "Social Media",
      description: "Transformed a struggling brand's social media presence, increasing engagement by 300%.",
      image: "https://placehold.co/600x400/0A0A0A/FF00FF?text=Social+Media",
      results: [
        "300% Engagement Increase",
        "100K+ New Followers",
        "40% Higher Conversion Rate"
      ]
    },
    {
      id: 3,
      title: "Influencer Campaign Success",
      category: "Influencer Marketing",
      description: "Managed a successful influencer campaign that generated $500K in sales.",
      image: "https://placehold.co/600x400/0A0A0A/FF00FF?text=Influencer+Campaign",
      results: [
        "$500K in Sales",
        "25+ Influencer Partnerships",
        "5x ROI"
      ]
    },
    {
      id: 4,
      title: "Local Business Digital Growth",
      category: "Digital Marketing",
      description: "Helped a local business expand their digital presence and increase online sales.",
      image: "https://placehold.co/600x400/0A0A0A/FF00FF?text=Local+Business",
      results: [
        "150% Online Sales Growth",
        "200% Local SEO Visibility",
        "90% Customer Retention"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div 
      className="portfolio-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="portfolio-header"
          variants={projectVariants}
        >
          <h1 className="text-gradient">My Portfolio</h1>
          <p className="subtitle">Showcasing Successful Digital Transformations</p>
        </motion.div>

        <motion.div 
          className="portfolio-grid"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div className="modal-content">
                <button 
                  className="close-button"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <span className="category">{selectedProject.category}</span>
                  <p>{selectedProject.description}</p>
                  <div className="results">
                    <h3>Key Results</h3>
                    <ul>
                      {selectedProject.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Portfolio; 