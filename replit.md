# GMR Solutions - Domain Registration & Email Services Website

## Overview

GMR Solutions is a full-stack web application for a New Zealand-based domain registration and email services company. The application features a modern, responsive single-page website with contact form functionality and comprehensive business information. Built with React and Express, it provides an elegant user interface for potential customers to learn about services and submit inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and API data fetching
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components (buttons, forms, dialogs, etc.)
- **Design System**: Custom color scheme with CSS variables supporting both light and dark themes

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Middleware**: JSON parsing, URL encoding, request logging, and error handling
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Data Storage
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined tables for users and contact inquiries with UUID primary keys
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon serverless driver for edge-compatible database connections

### Form Handling & Validation
- **Client-side**: React Hook Form with Zod resolvers for type-safe form validation
- **Server-side**: Zod schema validation for API requests with detailed error responses
- **Contact Form**: Comprehensive form with fields for name, email, phone, subject, and message
- **User Feedback**: Toast notifications for form submission success/error states

### Development & Build Process
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Development Server**: Express server with Vite middleware for SSR-like development experience
- **Production**: Separate build processes for client (Vite) and server (esbuild)

## External Dependencies

### Core Framework Dependencies
- **React**: UI framework with hooks and functional components
- **Express**: Node.js web server framework
- **TypeScript**: Type safety and enhanced developer experience

### Database & ORM
- **Neon Database**: Serverless PostgreSQL hosting service
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Drizzle Kit**: Database migrations and schema management

### UI Component Library
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide React**: Icon library for consistent iconography

### Form & Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for TypeScript
- **TanStack React Query**: Server state management and caching

### Development Tools
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing with Tailwind CSS plugin
- **ESBuild**: Fast bundler for production server builds

### Utility Libraries
- **clsx & tailwind-merge**: Conditional CSS class management
- **date-fns**: Date manipulation and formatting
- **Wouter**: Lightweight routing for single-page applications