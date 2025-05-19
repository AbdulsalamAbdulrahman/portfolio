# Abdulsalam Abdulrahman - Portfolio Website

A clean, modern portfolio website to showcase my projects and development skills.

## Features

- **Responsive Design**: Works on all device sizes (desktop, tablet, mobile)
- **Dark Mode Support**: Toggle between light and dark themes
- **Project Showcases**: Categorized by Web Apps, Mobile Apps, APIs, and CBT Deployments
- **Project Gallery**: Dedicated page with detailed project screenshots and lightbox view
- **Contact Information**: Easy way for visitors to get in touch
- **Modern UI**: Built with HTML, CSS, and JavaScript with a clean aesthetic

## Technologies Used

- HTML5
- CSS3 (with custom animations and transitions)
- JavaScript (for interactivity)
- TailwindCSS (for styling)
- AlpineJS (for minimal interactivity)

## My Tech Stack
- **Web**: Laravel, PHP, MySQL, JavaScript
- **Mobile**: Flutter
- **APIs**: RESTful API experience (Laravel)
- **Deployment**: On-premise CBT systems, Docker (learning), Shared Hosting

## Project Structure

```
Portfolio/
├── index.html           # Main HTML file
├── projects.html        # Project gallery page
├── css/
│   ├── styles.css       # Main stylesheet
│   └── project-gallery.css # Gallery-specific styles
├── js/
│   ├── main.js          # Main JavaScript
│   └── project-gallery.js # Gallery-specific JavaScript
├── images/
│   ├── projects/        # Project screenshots folder
│   └── ...              # Other images
└── .gitignore           # Git ignore file
```

## Setup and Installation

1. Clone this repository
2. Open `index.html` in your browser

## Development

To make changes to this portfolio:

1. Edit `index.html` to update content
2. Modify `css/styles.css` for styling changes
3. Update `js/main.js` for any JavaScript functionality

### Adding Project Screenshots

To replace the placeholder images with actual project screenshots:

1. Prepare your screenshots in the following dimensions:
   - Card thumbnails: 600x400px recommended
   - Mobile app screenshots: Use actual device screenshots
   - Keep file sizes under 500KB for optimal performance

2. Name your files according to this convention:
   - Web Apps: `project-name-#.jpg` (e.g., school-management-1.jpg)
   - Mobile Apps: `app-name-#.jpg` (e.g., quiz-app-1.jpg)
   - APIs & CBT: `project-type-name-#.jpg` (e.g., api-project-1.jpg)

3. Place all images in the `images/projects/` directory

4. The image paths in both `index.html` and `projects.html` are already set up to use these images

## Deployment

This site can be deployed to any static hosting service like:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service
