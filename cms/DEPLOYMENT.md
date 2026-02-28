# Production Deployment Checklist

## Pre-Deployment Security Checklist

### 1. Environment Variables
- [ ] Generate strong JWT_SECRET (32+ characters)
- [ ] Generate strong CSRF_SECRET (32+ characters)
- [ ] Set NODE_ENV=production
- [ ] Set NEXT_PUBLIC_APP_URL to production domain
- [ ] Create strong ADMIN_PASSWORD
- [ ] Set up production MONGODB_URI

### 2. MongoDB Security
- [ ] Enable authentication
- [ ] Create database user with minimal permissions
- [ ] Whitelist only necessary IP addresses
- [ ] Enable encryption at rest
- [ ] Set up automated backups
- [ ] Enable audit logging

### 3. Application Security
- [ ] Change default admin password after first login
- [ ] Review and adjust rate limiting settings
- [ ] Enable HTTPS/SSL
- [ ] Configure security headers
- [ ] Test CSRF protection
- [ ] Verify cookie settings (httpOnly, secure, sameSite)

## Vercel Deployment Steps

### Step 1: Prepare Repository
```bash
git init
git add .
git commit -m "Initial commit: Production CMS"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Vercel Setup
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Environment Variables
Add all environment variables in Vercel dashboard:

```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=<generated-secret>
JWT_EXPIRES_IN=7d
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
CSRF_SECRET=<generated-secret>
RATE_LIMIT_MAX_ATTEMPTS=5
RATE_LIMIT_WINDOW_MS=900000
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=<strong-password>
```

### Step 4: Deploy
Click "Deploy" and wait for build to complete

### Step 5: Post-Deployment
1. Access your domain: `https://yourdomain.com`
2. Go to `/admin/login`
3. Login with admin credentials
4. **IMMEDIATELY change the default password**
5. Create test blog post
6. Verify SEO tags are rendering correctly

## MongoDB Atlas Setup

### 1. Create Cluster
1. Go to https://cloud.mongodb.com
2. Create new cluster (choose region close to Vercel)
3. Select FREE tier or paid tier based on needs

### 2. Database Access
1. Database Access → Add New Database User
2. Authentication Method: Password
3. Username: `cms_user`
4. Password: Generate secure password
5. Database User Privileges: Read and write to any database

### 3. Network Access
1. Network Access → Add IP Address
2. For Vercel: Add `0.0.0.0/0` (all IPs)
3. Or add specific Vercel IP ranges for better security

### 4. Get Connection String
1. Click "Connect"
2. Choose "Connect your application"
3. Copy connection string
4. Replace `<password>` with your database password
5. Replace `<dbname>` with `cms_db`

## Post-Deployment Tasks

### Security Hardening
- [ ] Enable two-factor authentication for admin
- [ ] Set up monitoring and alerting
- [ ] Configure log aggregation
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Review and test all API endpoints
- [ ] Perform security audit
- [ ] Set up Content Security Policy headers

### Performance Optimization
- [ ] Enable caching strategies
- [ ] Set up CDN for static assets
- [ ] Optimize images
- [ ] Enable compression
- [ ] Monitor Core Web Vitals

### Backup Strategy
- [ ] Configure MongoDB automated backups
- [ ] Test backup restoration process
- [ ] Document backup procedures
- [ ] Set up backup alerts

### Monitoring Setup
- [ ] Set up uptime monitoring
- [ ] Configure error alerting
- [ ] Monitor database performance
- [ ] Track API response times
- [ ] Monitor login failures

## Testing Checklist

### Functional Testing
- [ ] Login with valid credentials
- [ ] Login with invalid credentials (rate limiting)
- [ ] Create blog post (draft)
- [ ] Create blog post (published)
- [ ] Edit blog post
- [ ] Delete blog post
- [ ] Search functionality
- [ ] Pagination
- [ ] Frontend blog rendering
- [ ] SEO meta tags rendering
- [ ] Logout functionality

### Security Testing
- [ ] SQL injection attempts
- [ ] XSS attempts
- [ ] CSRF token validation
- [ ] Rate limiting on login
- [ ] Unauthorized access to admin routes
- [ ] JWT token expiration
- [ ] Session management
- [ ] Cookie security flags

### Performance Testing
- [ ] Page load times
- [ ] API response times
- [ ] Database query performance
- [ ] Concurrent user handling
- [ ] Mobile responsiveness

## Troubleshooting

### Build Failures
```bash
# Local build test
npm run build

# Type checking
npm run type-check

# Check environment variables
echo $MONGODB_URI
```

### Database Connection Issues
1. Verify connection string format
2. Check IP whitelist in MongoDB Atlas
3. Verify database user credentials
4. Test connection locally first

### Authentication Issues
1. Clear browser cookies
2. Verify JWT_SECRET is set correctly
3. Check token expiration settings
4. Review middleware configuration

## Maintenance Schedule

### Daily
- Monitor error logs
- Check failed login attempts
- Review system health

### Weekly
- Review database performance
- Check backup integrity
- Update dependencies (security patches)

### Monthly
- Full security audit
- Performance optimization review
- Backup restoration test
- Update documentation

## Emergency Procedures

### Database Breach
1. Immediately revoke all database access
2. Change all passwords and secrets
3. Review audit logs
4. Restore from backup if needed
5. Notify affected users

### DDoS Attack
1. Enable Vercel DDoS protection
2. Increase rate limiting
3. Review access logs
4. Block malicious IPs

### Data Loss
1. Stop all write operations
2. Restore from latest backup
3. Verify data integrity
4. Resume operations
5. Document incident

## Support Contacts

- Vercel Support: https://vercel.com/support
- MongoDB Support: https://support.mongodb.com
- Next.js Docs: https://nextjs.org/docs

## Success Metrics

Track these KPIs post-deployment:
- Uptime percentage (target: 99.9%)
- Average response time (target: <200ms)
- Failed login rate
- Database query performance
- User engagement metrics

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Seed database
npx ts-node scripts/seed.ts

# Generate secure secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

Remember: Security is an ongoing process, not a one-time setup!
