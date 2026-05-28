# 🌐 Keystone Schools Website - Deployment Guide

Complete instructions for deploying your website to various platforms.

---

## Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Optimized for Next.js
- Free SSL certificate
- Automatic deployments from GitHub
- Fast CDN worldwide
- Easy custom domain setup

### Steps:

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up (free)

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/keystone-schools.git
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Import"

4. **Configure**
   - Set Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **Add Environment Variables** (if needed)
   - Go to Settings → Environment Variables
   - Add any variables from `.env.example`

6. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live!

### Custom Domain on Vercel:

1. Go to Settings → Domains
2. Enter your domain (e.g., keystoneschools.co.zw)
3. Add DNS records as instructed
4. Verify domain

**Cost:** Free for basic deployment

---

## Option 2: Netlify

### Steps:

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up

2. **Connect Git Repository**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables (if needed)

4. **Deploy**
   - Click "Deploy site"
   - Check build logs
   - Your site is live!

5. **Custom Domain**
   - Domain settings
   - Add custom domain
   - Update DNS records

**Cost:** Free (with option to upgrade)

---

## Option 3: AWS Amplify

### Steps:

1. **Create AWS Account**
   - Go to https://aws.amazon.com
   - Sign up

2. **Install AWS CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

3. **Initialize Project**
   ```bash
   amplify init
   ```

4. **Add Hosting**
   ```bash
   amplify hosting add
   # Choose: Amazon CloudFront and S3
   ```

5. **Deploy**
   ```bash
   amplify publish
   ```

**Cost:** Pay-as-you-go (free tier available)

---

## Option 4: Google Firebase Hosting

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Build Project**
   ```bash
   npm run build
   ```

3. **Initialize Firebase**
   ```bash
   firebase init
   # Select Hosting
   # Set public directory to: .next/static
   ```

4. **Deploy**
   ```bash
   firebase deploy
   ```

**Cost:** Free tier available, pay-as-you-go

---

## Option 5: Traditional Hosting (cPanel/FTP)

### Steps:

1. **Build Project**
   ```bash
   npm run build
   npm install -g pm2
   ```

2. **Upload Files**
   - Use FTP client (FileZilla, etc.)
   - Upload entire project folder
   - Upload `node_modules` OR run `npm install` on server

3. **Start Application**
   ```bash
   pm2 start npm --name "keystone" -- start
   pm2 startup
   pm2 save
   ```

4. **Configure Web Server**
   - Create public folder
   - Configure reverse proxy to port 3000
   - Set up SSL certificate

**Cost:** Depends on hosting provider ($5-50/month)

---

## Option 6: DigitalOcean App Platform

### Steps:

1. **Create DigitalOcean Account**
   - Go to https://digitalocean.com
   - Sign up

2. **Connect GitHub**
   - Apps → Create App
   - Select GitHub as source
   - Choose repository

3. **Configure**
   - Framework: Node.js
   - Build: `npm install && npm run build`
   - Run: `npm start`
   - Port: 3000

4. **Deploy**
   - Review settings
   - Click "Create Resources"
   - Monitor deployment

5. **Domain Setup**
   - Apps → Settings
   - Add custom domain
   - Configure DNS

**Cost:** $5-12/month

---

## Option 7: Heroku (With Buildpack)

### Steps:

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create keystone-schools
   ```

3. **Set Buildpack**
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Custom Domain**
   ```bash
   heroku domains:add keystoneschools.co.zw
   ```

**Cost:** Free tier available, paid plans from $7/month

---

## Option 8: Railway

### Steps:

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Add environment variables if needed
   - Railway auto-detects Node.js

4. **Deploy**
   - Automatic deployment starts
   - Check deployment logs
   - Get assigned domain

5. **Custom Domain**
   - Project Settings → Domains
   - Add custom domain
   - Update DNS

**Cost:** Pay-as-you-go, free tier available

---

## Domain Setup

### Step 1: Buy Domain
- GoDaddy: https://godaddy.com
- Namecheap: https://namecheap.com
- Local provider for `.co.zw` domains

### Step 2: Update DNS Records

Add these records:
```
Type: A
Name: @
Value: [Your hosting provider's IP/DNS]

Type: CNAME
Name: www
Value: [Your main domain]
```

### Step 3: Configure SSL

Most modern hosts provide free SSL certificates:
- Vercel: Automatic
- Netlify: Automatic
- AWS: Via ACM
- Firebase: Automatic
- Traditional: Let's Encrypt

---

## Performance Optimization After Deployment

### 1. Add Analytics
```javascript
// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

useEffect(() => {
  const handleRouteChange = (url) => {
    // Your analytics code
    gtag.pageview(url);
  };
  
  router.events.on('routeChangeComplete', handleRouteChange);
  return () => router.events.off('routeChangeComplete', handleRouteChange);
}, [router.events]);
```

### 2. Enable Image Optimization
Already configured in `next.config.js`

### 3. Monitor Performance
- Use Google Lighthouse
- Check Core Web Vitals
- Monitor with Sentry for errors

### 4. Set Up CDN
- Vercel: Automatic
- Cloudflare: https://cloudflare.com (free)
- AWS CloudFront: With AWS hosting

---

## SSL Certificate Setup

### Automatic (Recommended)
- Vercel ✓
- Netlify ✓
- Firebase ✓
- AWS Amplify ✓
- Railway ✓

### Manual with Let's Encrypt
```bash
# On your server
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d keystoneschools.co.zw
```

---

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Mobile responsive design works
- [ ] Registration form submits successfully
- [ ] All links work
- [ ] Images load correctly
- [ ] SSL certificate active (https)
- [ ] Custom domain configured
- [ ] Email forwarding set up
- [ ] Analytics installed
- [ ] Backup system configured
- [ ] Monitoring alerts set up

---

## Monitoring & Maintenance

### Uptime Monitoring
- UptimeRobot: https://uptimerobot.com
- Freshping: https://freshping.io
- StatusPage: https://statuspage.io

### Error Tracking
- Sentry: https://sentry.io
- Rollbar: https://rollbar.com
- LogRocket: https://logrocket.com

### Performance Monitoring
- New Relic: https://newrelic.com
- DataDog: https://datadoghq.com
- Google Analytics: https://analytics.google.com

---

## Updating Your Website

### After Deployment

1. **Make changes locally**
   ```bash
   npm run dev
   # Test changes
   ```

2. **Commit and push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. **Auto-deployment**
   - Changes deploy automatically (Vercel/Netlify)
   - Or manually deploy as needed

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Use different port
npm start -- -p 3001
```

### Database Connection Issues
- Check environment variables
- Verify connection string
- Check firewall rules

### Performance Issues
- Check API response times
- Monitor server resources
- Optimize database queries
- Use caching headers

---

## Cost Comparison

| Platform | Cost | Setup | Ease |
|----------|------|-------|------|
| Vercel | Free | Easy | ⭐⭐⭐⭐⭐ |
| Netlify | Free | Easy | ⭐⭐⭐⭐⭐ |
| Railway | Free tier | Easy | ⭐⭐⭐⭐ |
| Firebase | Free tier | Medium | ⭐⭐⭐⭐ |
| DigitalOcean | $5-12/mo | Medium | ⭐⭐⭐ |
| AWS | Pay-go | Hard | ⭐⭐ |
| Traditional | $5-50/mo | Medium | ⭐⭐⭐ |

**Recommendation for Keystone Schools:**
Start with **Vercel** (Free & Easy) → Upgrade to paid plan when needed

---

## Contacting Support

### Vercel Support
- https://vercel.com/support
- Email: support@vercel.com

### Netlify Support
- https://netlify.com/support
- Chat: Available in dashboard

### DigitalOcean Support
- https://support.digitalocean.com
- Community: https://digitalocean.com/community

---

## Additional Resources

- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Performance Guide:** https://web.dev/performance/
- **Security Best Practices:** https://owasp.org/
- **SEO Guide:** https://developers.google.com/search

---

**Ready to Deploy?**
Start with **Option 1: Vercel** - It's the easiest! 🚀

Need help? Email: info@keystoneschools.co.zw
