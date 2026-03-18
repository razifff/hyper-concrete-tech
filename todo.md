# Hyper Concrete Tech - Project TODO

## Completed Features

### Frontend
- [x] Homepage with hero section, services, quality standards, plant locations
- [x] Customer testimonials section with 5-star ratings
- [x] Interactive Google Maps showing plant locations
- [x] Get Quote form page with all required fields
- [x] Professional navy blue color scheme (#1e3a8a)
- [x] Responsive design for mobile and desktop
- [x] Company logo and professional images
- [x] Autoplay delivery fleet video
- [x] About us video section
- [x] Contact information display

### Backend Infrastructure
- [x] Database schema for quote submissions (quoteSubmissions table)
- [x] Database query helpers (createQuoteSubmission, getQuoteSubmissions, getQuoteSubmissionById)
- [x] tRPC procedures for quote submission (quote.submit, quote.list, quote.getById)
- [x] Input validation using Zod schema
- [x] Frontend integration with tRPC for form submission
- [x] Error handling and user feedback
- [x] Loading states during form submission
- [x] Vitest unit tests for quote submission validation

### Email Notifications
- [x] Owner notification system integration
- [x] Quote submission notification to admin@hyperconcretetech.com
- [x] Formatted notification content with all quote details

## In Progress / Planned Features

- [ ] Admin dashboard to view and manage quote requests
- [ ] Quote status tracking (pending → reviewed → quoted → completed)
- [ ] Customer portal for order tracking
- [ ] Email confirmation to customer after quote submission
- [ ] Blog/news section for SEO
- [ ] Advanced search and filtering for admin dashboard
- [ ] Quote PDF generation and download
- [ ] SMS notifications for urgent quotes
- [ ] Integration with accounting/invoicing system
- [ ] Multi-language support (English/Malay)

## Known Issues / Improvements

- [ ] Add rate limiting to quote submission endpoint
- [ ] Implement CAPTCHA for form spam protection
- [ ] Add file upload capability for project documents
- [ ] Implement quote expiration tracking
- [ ] Add customer feedback survey after quote response
- [ ] Optimize database queries with indexes
- [ ] Add comprehensive error logging and monitoring

## Testing

- [x] Unit tests for quote submission validation
- [x] Input validation tests (email, required fields, optional fields)
- [x] Plant/concrete type/project type selection tests
- [ ] Integration tests for full form submission flow
- [ ] E2E tests for user journey
- [ ] Load testing for concurrent submissions
- [ ] Email delivery verification tests

## Deployment

- [ ] Set up automated backups for database
- [ ] Configure SSL/TLS for secure transmission
- [ ] Set up monitoring and alerting
- [ ] Create deployment documentation
- [ ] Set up CI/CD pipeline
- [ ] Performance optimization and caching

## Bug Fixes

- [x] Fix HCT-01 plant location coordinates on map (updated to correct coordinates: 4.7993784, 100.8953087)
- [x] Increase header size (logo from h-12 to h-16, nav text from text-sm to text-base, button size-lg, header height h-20)

- [x] Remove HCT-01 Plant (Ipoh) from website - keep only 2 locations (HCT-01 Kuala Kangsar, HCT-02 Sungai Siput)
- [x] Update hero section plant count from 3 to 2
- [x] Update locations array to remove Ipoh plant
- [x] Update plant info cards to show only 2 plants
- [x] Update Get Quote form plant options to remove Ipoh

## Current Issues

- [x] Fix Google Maps JavaScript API loaded multiple times error (added global promise caching to prevent duplicate script loads)

## cPanel Deployment

- [x] Setup .env file with database credentials for cPanel (.env.cPanel created)
- [x] Configure server to use process.env.PORT (already configured in server/_core/index.ts)
- [x] Ensure all static files in /public folder (handled by build process)
- [x] Create production build (npm run build completed successfully)
- [x] Create deployment guide for cPanel (DEPLOYMENT_GUIDE_CPANEL.md created)
- [x] Create quick start guide (CPANEL_QUICK_START.md created)
- [ ] Test deployment on cPanel (pending - user to execute)


## Website Update - Company Profile Integration (March 2026)

- [x] Update Home page with company profile information from PDF (Mission, Vision, company history, certifications)
- [x] Create Catalog/Products page with concrete specifications (6 product grades with detailed specs)
- [x] Create About Us page with Mission, Vision, and company history (timeline, team roles, values)
- [x] Add certifications and standards section (JKKP, CIDB PPS, CREAM, MS EN206, ISO 9001:2015)
- [x] Improve design and layout for professional appearance (gradient sections, card layouts, professional typography)
- [x] Update navigation with new pages (About, Catalog links added to all pages)
- [x] Test all pages on dev server (all tests passing: 11/11)
- [x] Ready for checkpoint and delivery
