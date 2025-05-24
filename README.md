# Yasmin's Digital Aura: Strategic Brand & Business Hub

A cutting-edge, visually stunning, and highly interactive professional website for Yasmin, a business manager specializing in Social Media Management, Brand Promotion, Peer Influencing, and Digital Marketing.

## Features

- Modern, responsive design with stunning animations
- Interactive particle background
- Smooth page transitions
- Contact form with email integration
- Portfolio showcase with project details
- Service cards with hover effects
- Social media integration
- Mobile-first approach

## Tech Stack

- React.js
- Framer Motion for animations
- Three.js for particle effects
- GSAP for advanced animations
- SASS for styling
- Express.js for backend
- EmailJS for contact form

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yasmin-digital-aura.git
cd yasmin-digital-aura
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Development

To run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Production

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

To run the production server:

```bash
npm run server
```

The site will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── styles/        # SASS styles
└── App.jsx        # Main app component
```

## Customization

1. Update the content in the respective page components
2. Modify the color scheme in `src/styles/global.scss`
3. Replace placeholder images with actual project images
4. Update social media links in the Contact component
5. Configure EmailJS with your own service and template

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Framer Motion for the amazing animation library
- Three.js for the particle system
- GSAP for advanced animations
- EmailJS for the contact form integration
