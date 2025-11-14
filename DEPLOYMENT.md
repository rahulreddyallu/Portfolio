# Deployment Guide

A complete guide for deploying your portfolio website across multiple platforms.

---

## Pre-Deployment Checklist

- Update homepage URL in package.json
- Replace placeholder text with your actual details
- Update social media links
- Add real project entries
- Test responsiveness on multiple devices
- Optimize all images (WebP/AVIF recommended)
- Run production build locally for validation
- Check browser console for errors
- Verify all internal and external links
- Ensure SEO metadata is properly configured

---

## GitHub Pages

### Automatic Deployment

1. Update `package.json`:

```
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Deploy:

```
npm run deploy
```

### Manual Deployment

1. Build the project:

```
npm run build
```

2. Create `gh-pages` branch and push build:

```
git checkout -b gh-pages
git add build -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix build origin gh-pages
```

---

## Vercel

### Quick Deploy

Use the Vercel deploy button to clone and deploy:

```
https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio
```

### CLI Deployment

```
npm i -g vercel
vercel
```

### Configuration (`vercel.json`)

```
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

---

## Netlify

### Drag and Drop Deployment

1. Build the project:

```
npm run build
```

2. Drag the `build` folder to the Netlify Drop interface.

### Git Deployment

1. Connect your repository to Netlify
2. Set:

```
Build command: npm run build
Publish directory: build
```

### Netlify Configuration (`netlify.toml`)

```
[build]
command = "npm run build"
publish = "build"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

---

## AWS S3 and CloudFront

### Setup

Install AWS CLI:

```
aws configure
```

Create S3 bucket:

```
aws s3 mb s3://your-portfolio-bucket
```

Build and upload:

```
npm run build
aws s3 sync build/ s3://your-portfolio-bucket
```

Enable static site hosting:

```
aws s3 website s3://your-portfolio-bucket --index-document index.html
```

---

## Firebase Hosting

Install Firebase CLI:

```
npm install -g firebase-tools
```

Login:

```
firebase login
```

Initialize project:

```
firebase init
```

Deploy:

```
npm run build
firebase deploy
```

---

## Docker Deployment

### Dockerfile

```
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## Custom Domain

### GitHub Pages

Create a `CNAME` file inside `public/`:

```
yourdomain.com
```

Configure DNS:

```
Type: A
Name: @
Values:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Vercel

1. Navigate to Project Settings → Domains
2. Add your domain
3. Apply DNS configuration based on Vercel instructions

---

## Post-Deployment Checklist

### Performance Monitoring

- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals tracking
- Google Analytics

### SEO Validation

- Submit sitemap to Google Search Console
- Verify site on Bing Webmaster Tools
- Test schema using Structured Data Testing Tool

### Security Enhancements

- Enable HTTPS
- Add security headers
- Configure Content Security Policy (CSP)

---

End of Deployment Guide.
