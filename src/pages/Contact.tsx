import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '🔗',
      url: 'https://linkedin.com/in/your-profile'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/your-handle'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/your-handle'
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

  const itemVariants = {
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
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="contact-header"
          variants={itemVariants}
        >
          <h1 className="text-gradient">Get in Touch</h1>
          <p className="subtitle">Let's discuss how we can work together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <div className="info-section">
              <h2>Contact Information</h2>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📱</span>
                <div>
                  <h3>Phone</h3>
                  <p>+254 000 000 000</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h2>Connect With Me</h2>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="icon">{link.icon}</span>
                    <span className="name">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  className={`status-message ${status.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn primary"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 