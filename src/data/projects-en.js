// English translations for projects
// Keys match project slugs from projects.js

export const projectTranslations = {
  'checkinly-alloggify': {
    title: 'Checkinly (Alloggify)',
    tagline: 'OCR-Powered Document Extraction for Guest Registration',
    description: 'AI system that automates data extraction from documents for hospitality, reducing time from 15-20 minutes to 30 seconds.'
  },
  'il-sorpasso': {
    title: 'Il Sorpasso',
    tagline: 'Landing Page & Contact App for Car Rental',
    description: 'One-page responsive promotional landing page with integrated contact form and automatic email sending via Firebase Functions.'
  },
  'scorm-course-generator': {
    title: 'SCORM Course Generator',
    tagline: 'AI-Powered E-learning Content Generator',
    description: 'Application that generates complete SCORM courses from simple text prompts using Gemini AI, ready for LMS upload.'
  },
  'host-reservation-panel': {
    title: 'Host Reservation Panel',
    tagline: 'B&B Reservation Management Dashboard',
    description: 'Admin dashboard for managing B&B reservations with calendar, room availability, and client management.'
  },
  'roma-caput-mundi-apartment': {
    title: 'Roma Caput Mundi Apartment',
    tagline: 'Vacation Rental Website',
    description: 'Modern website for a vacation rental apartment in Rome with booking system and photo gallery.'
  },
  'custom-gpt-social-media': {
    title: 'Custom GPT Social Media',
    tagline: 'AI Social Media Content Generator',
    description: 'Custom GPT for generating engaging social media content optimized for different platforms.'
  },
  'agentic-workflow-architect': {
    title: 'Agentic Workflow Architect',
    tagline: 'Multi-Agent System Designer',
    description: 'Tool for designing and orchestrating multi-agent AI workflows for complex business processes.'
  },
  'generatore-prompt-craft': {
    title: 'Prompt Craft Generator',
    tagline: 'Advanced Prompt Engineering Tool',
    description: 'Application for crafting and optimizing prompts for various AI models with templates and best practices.'
  },
  'team-dev-agents': {
    title: 'Team Dev Agents',
    tagline: 'AI Development Team Simulation',
    description: 'Multi-agent system simulating a development team with specialized roles for collaborative coding.'
  },
  'projectflow': {
    title: 'ProjectFlow',
    tagline: 'Project Management Dashboard',
    description: 'Comprehensive project management tool with Kanban boards, timelines, and team collaboration features.'
  },
  'sellsnap': {
    title: 'SellSnap',
    tagline: 'E-commerce Product Photography',
    description: 'AI-powered tool for creating professional product photos with automatic background removal and enhancement.'
  },
  'remember-me': {
    title: 'Remember Me',
    tagline: 'Memory Training Application',
    description: 'Gamified memory training app with various exercises and progress tracking.'
  },
  'tassa-soggiorno-calculator': {
    title: 'Tourist Tax Calculator',
    tagline: 'Italian City Tax Calculator',
    description: 'Tool for calculating tourist tax for Italian cities with updated rates and exemptions.'
  },
  'ffmpeg-converter': {
    title: 'FFmpeg Converter',
    tagline: 'Media File Converter',
    description: 'Web-based media converter powered by FFmpeg for video and audio file conversion.'
  },
  'cyber-anomaly-shield': {
    title: 'Cyber Anomaly Shield',
    tagline: 'Network Security Monitor',
    description: 'Real-time network anomaly detection system using ML for cybersecurity threat identification.'
  },
  'logistics-tracking-dashboard': {
    title: 'Logistics Tracking Dashboard',
    tagline: 'Supply Chain Analytics',
    description: 'Interactive dashboard for tracking logistics operations with real-time KPIs and route optimization.'
  },
  'retail-sales-dashboard': {
    title: 'Retail Sales Dashboard',
    tagline: 'Retail Analytics Platform',
    description: 'Comprehensive retail analytics dashboard with sales trends, inventory management, and forecasting.'
  },
  'finance-analytics-dashboard': {
    title: 'Finance Analytics Dashboard',
    tagline: 'Financial Data Visualization',
    description: 'Advanced financial analytics platform with portfolio tracking, risk analysis, and reporting.'
  },
  'sales-data-api': {
    title: 'Sales Data API',
    tagline: 'Simulated Sales Data Generator',
    description: 'REST API for generating realistic sales data for testing and development purposes.'
  },
  'sales-analytics-dashboard': {
    title: 'Sales Analytics Dashboard',
    tagline: 'Sales Performance Tracker',
    description: 'Interactive sales dashboard with team performance metrics, forecasting, and trend analysis.'
  },
  'medical-data-api': {
    title: 'Medical Data API',
    tagline: 'Healthcare Data Generator',
    description: 'API for generating synthetic medical data for healthcare application testing and development.'
  },
  'fastify-i18n-plugin': {
    title: 'Fastify i18n Plugin',
    tagline: 'Internationalization for Fastify',
    description: 'Open-source Fastify plugin for adding multi-language support to Node.js applications.'
  },
  'gemini-seo-analyzer': {
    title: 'Gemini SEO Analyzer',
    tagline: 'AI-Powered SEO Analysis Tool',
    description: 'SEO analysis tool using Google Gemini AI for content optimization and keyword suggestions.'
  },
  'customrsi50-mt5': {
    title: 'CustomRSI50 MT5',
    tagline: 'MetaTrader 5 Custom Indicator',
    description: 'Professional RSI indicator for MetaTrader 5 with custom visualization and trading signals.'
  },
  'bradipo-system-signal-board': {
    title: 'Bradipo System Signal Board',
    tagline: 'Trading Signal Dashboard',
    description: 'Real-time trading signal board with ML predictions and multi-timeframe analysis.'
  },
  'airaverewind': {
    title: 'AI Rave Rewind',
    tagline: 'AI Music Generation',
    description: 'AI-powered music generation tool for creating electronic music tracks with customizable styles.'
  },
  'fastify-api-key': {
    title: 'Fastify API Key',
    tagline: 'API Key Authentication Plugin',
    description: 'Fastify plugin for implementing API key authentication with rate limiting and key management.'
  },
  'fastify-cache-control': {
    title: 'Fastify Cache Control',
    tagline: 'HTTP Caching Plugin',
    description: 'Fastify plugin for managing HTTP cache headers and response caching strategies.'
  },
  'fastify-rfc9457': {
    title: 'Fastify RFC9457',
    tagline: 'Problem Details for HTTP APIs',
    description: 'Fastify plugin implementing RFC 9457 standard for error responses in HTTP APIs.'
  },
  'fastify-webhook-verify': {
    title: 'Fastify Webhook Verify',
    tagline: 'Webhook Signature Verification',
    description: 'Fastify plugin for verifying webhook signatures from popular services like Stripe and GitHub.'
  },
  'env-doctor': {
    title: 'Env Doctor',
    tagline: 'Environment Variable Validator',
    description: 'CLI tool for validating and managing environment variables with type checking and documentation.'
  },
  'node-test-expect': {
    title: 'Node Test Expect',
    tagline: 'Test Assertion Library',
    description: 'Lightweight assertion library for Node.js test runner with expressive API and clear error messages.'
  }
}

// Helper function to get localized project data
export function getLocalizedProject(project, locale) {
  if (locale === 'en' && projectTranslations[project.slug]) {
    return {
      ...project,
      ...projectTranslations[project.slug]
    }
  }
  return project
}

// Helper function to get all localized projects
export function getLocalizedProjects(projects, locale) {
  return projects.map(p => getLocalizedProject(p, locale))
}
