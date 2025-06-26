# 3D Print Bureau - Replit Development Guide

## Overview

This is a full-stack web application for a 3D printing services business built with React, Express, and TypeScript. The app showcases a modern design with a comprehensive portfolio, services catalog, and contact system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Style**: RESTful APIs with JSON responses
- **Storage**: Configurable storage layer (currently in-memory, prepared for database)
- **Session Management**: Express sessions with PostgreSQL store ready

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL support
- **Schema**: Well-defined tables for users, projects, services, testimonials, and contacts
- **Migration**: Drizzle migrations in `/migrations` directory

## Key Components

### Data Models
1. **Users**: Authentication system ready
2. **Projects**: Portfolio items with categories, images, and detailed specs
3. **Services**: Business services with features and pricing
4. **Testimonials**: Customer reviews with ratings
5. **Contacts**: Contact form submissions with comprehensive fields

### API Endpoints
- `GET /api/projects` - All projects
- `GET /api/projects/category/:category` - Projects by category
- `GET /api/projects/:id` - Single project details
- `GET /api/services` - All services
- `GET /api/testimonials` - All testimonials
- `POST /api/contact` - Submit contact form

### UI Features
- Responsive navigation with mobile menu
- Hero section with gradient background
- Interactive project modals
- Service cards with feature lists
- Testimonial displays with star ratings
- Contact form with validation
- Loading states and error handling

## Data Flow

1. **Client Requests**: React components use TanStack Query hooks
2. **API Layer**: Express routes handle HTTP requests
3. **Storage**: Storage interface abstracts data operations
4. **Response**: JSON data returned to client
5. **State Updates**: Query cache automatically updates UI

## External Dependencies

### Production Dependencies
- **UI Library**: Complete shadcn/ui component set
- **Database**: Neon serverless PostgreSQL driver
- **Validation**: Zod schema validation
- **Forms**: React Hook Form with resolvers
- **Date Handling**: date-fns utility library

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Tailwind**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Vite development server with HMR

### Production Build
- **Client**: Vite builds to `dist/public`
- **Server**: ESBuild bundles to `dist/index.js`
- **Start**: `npm start` runs production server

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Port Mapping**: Internal 5000 → External 80

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 26, 2025. Initial setup