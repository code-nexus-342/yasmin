import { motion } from 'framer-motion';
import '../styles/Services.scss';

const Services = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "Strategic planning and execution of social media campaigns that drive engagement and growth.",
      icon: "📱",
      features: [
        "Content Strategy Development",
        "Platform Management",
        "Community Engagement",
        "Performance Analytics"
      ]
    },
    {
      title: "Brand Promotion & Development",
      description: "Creating compelling brand narratives and strategies that resonate with target audiences.",
      icon: "🎯",
      features: [
        "Brand Identity Development",
        "Visual Brand Guidelines",
        "Brand Voice & Messaging",
        "Market Positioning"
      ]
    },
    {
      title: "Peer Influencing & Outreach",
      description: "Building and managing relationships with key industry influencers to amplify brand reach.",
      icon: "🤝",
      features: [
        "Influencer Identification",
        "Partnership Development",
        "Campaign Coordination",
        "Relationship Management"
      ]
    },
    {
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing strategies that drive measurable results and ROI.",
      icon: "📈",
      features: [
        "Strategy Development",
        "Channel Optimization",
        "Performance Tracking",
        "ROI Analysis"
      ]
    },
    {
      title: "Business Consulting",
      description: "Expert guidance to help businesses navigate the digital landscape and achieve their goals.",
      icon: "💡",
      features: [
        "Business Analysis",
        "Growth Strategy",
        "Process Optimization",
        "Digital Transformation"
      ]
    },
    {
      title: "Content Creation & Curation",
      description: "Creating and curating engaging content that tells your brand's story and connects with your audience.",
      icon: "✍️",
      features: [
        "Content Strategy",
        "Creative Development",
        "Content Calendar",
        "Quality Assurance"
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

  const cardVariants = {
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

  return (
    <motion.div 
      className="services-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="services-header"
          variants={cardVariants}
        >
          <h1 className="text-gradient">My Services</h1>
          <p className="subtitle">Comprehensive Digital Solutions for Your Business</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="cta-section"
          variants={cardVariants}
        >
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's work together to achieve your business goals</p>
          <motion.button
            className="btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services; 