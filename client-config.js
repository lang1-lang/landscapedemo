/**
 * CLIENT CONFIG — Edit this file for each client demo
 * ===================================================
 *
 * All content is in one place. Change values below to customize the site.
 * To switch clients: edit the object below, save, and refresh the page.
 *
 * Optional: save copies as client-config-visionary.js, client-config-acme.js,
 * then change the script src in index.html to load the desired config.
 *
 * SECTION REFERENCE:
 * - page      → <title>, meta
 * - brand     → Nav logo, footer brand name
 * - contact   → Phone, email (used in nav, footer, CTA)
 * - navLinks  → Nav/mobile menu items: { label, href } (href="#services", etc.)
 * - hero      → Hero section: image, eyebrow, title (supports <br>), description, estimator
 * - stats     → 4 stat blocks: { number, label }
 * - services  → Eyebrow, heading (supports <br>), items: { title, desc }
 * - portfolio → Eyebrow, heading, viewAllLabel, projects: { name, category, imageUrl, imageAlt }
 * - testimonial → quote, author, location
 * - cta       → Heading (supports <br>), desc, placeholder, buttonText, phoneLabel
 * - footer    → brandName, desc, sitemap, services, contact, copyright, legal links
 */

const CLIENT = {
  page: {
    title: "ACRE LANDSCAPING - Expert Landscaping & Hardscaping",
    metaDescription: ""
  },

  brand: {
    name: "Acre Landscaping ",
    tagline: "Landscaping & Hardscaping"
  },

  contact: {
    phone: "6474572765",
    phoneFormatted: "647 457 2765",
    email: "acre.landscape@gmail.com",
    location: "Toronto, Ontario"
  },

  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Company", href: "#about" },
    { label: "Contact", href: "#contact", isButton: true }
  ],

  hero: {
    imageUrl: "images/hero.png",
    imageAlt: "Acre Landscaping - luxury outdoor spaces",
    eyebrow: "L U X U R Y   O U T D O O R   S P A C E S",
    title: "Leave A Lasting<br>Impression",
    description: "With 10+ years of experience, we take pride in transforming outdoor spaces into personalized works of art through expert landscaping and construction solutions. From creating lush gardens to crafting durable hardscapes, we've got you covered!",
    estimatorPlaceholder: "Enter your property address...",
    estimatorButton: "Get Your Estimate",
    estimatorLabel: "Complimentary consultation · No commitment required"
  },

  stats: [
    { number: "10+", label: "Years of Excellence" },
    { number: "?+", label: "Projects Delivered" },
    { number: "?+", label: "Design Awards" },
    { number: "?+", label: "Portfolio Value" }
  ],

  services: {
    eyebrow: "What We Create",
    heading: "Crafting Outdoor<br>Masterworks",
    items: [
      {
        title: "Landscape Design & Build",
        desc: "Full-service landscape architecture from initial concept through final planting. We integrate terrain, light, and living elements into cohesive outdoor narratives."
      },
      {
        title: "Hardscaping",
        desc: "Custom stonework, retaining walls, and premium natural pavers laid with precision. Every surface is engineered for permanence and grace."
      },
      {
        title: "Softscaping",
        desc: "Curated planting designs that evolve with the seasons, creating living architecture that breathes movement and color into your grounds."
      },
      {
        title: "Outdoor Kitchens & Living",
        desc: "Fully appointed outdoor kitchens, dining pavilions, and lounge areas designed for year-round entertaining at the highest standard."
      },
      {
        title: "Water Features & Pools",
        desc: "From infinity-edge pools to naturalized waterfalls, we create aquatic environments that anchor your landscape with serenity and spectacle."
      },
      {
        title: "Architectural Lighting",
        desc: "Sculptural lighting systems that transform your property after dark — revealing textures, defining pathways, and extending the hours of outdoor living."
      }
    ]
  },

  portfolio: {
    eyebrow: "Timeless Designs",
    heading: "Our Portfolio",
    viewAllLabel: "View All Projects",
    viewAllHref: "#",
    projects: [
      {
        name: "Kleinburg, Woodbridge",
        category: "Backyard Renovation",
        imageUrl: "images/proj1.png",
        imageAlt: "Kleinburg backyard renovation"
      },
      {
        name: "Project 2",
        category: "Landscape Design",
        imageUrl: "images/proj2.png",
        imageAlt: "Acre Landscaping project"
      },
      {
        name: "Project 3",
        category: "Landscape Design",
        imageUrl: "images/proj3.png",
        imageAlt: "Acre Landscaping project"
      },
      {
        name: "Project 4",
        category: "Landscape Design",
        imageUrl: "images/proj4.png",
        imageAlt: "Acre Landscaping project"
      }
    ]
  },

  testimonial: {
    quote: "They transformed our property into something we never imagined possible. Every stone, every plant, every light was placed with intention and artistry.",
    author: "Catherine & James H.",
    location: "Forest Hill, Toronto"
  },

  cta: {
    heading: "Begin Your<br>Transformation",
    desc: "Schedule a private design consultation with our team. We'll visit your property and craft a vision unique to your landscape.",
    placeholder: "Enter your property address...",
    buttonText: "Schedule Consultation",
    phoneLabel: "Or call us directly"
  },

  footer: {
    brandName: "Acre Landscaping",
    brandDesc: "Transforming outdoor spaces with expert landscaping and hardscaping across the Greater Toronto Area.",
    sitemap: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#contact" }
    ],
    services: [
      { label: "Design & Build", href: "#" },
      { label: "Hardscaping", href: "#" },
      { label: "Softscaping", href: "#" },
      { label: "Outdoor Kitchens", href: "#" },
      { label: "Water Features", href: "#" },
      { label: "Lighting", href: "#" }
    ],
    copyright: "© 2026 Acre Landscaping. All rights reserved.",
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" }
    ]
  }
};
