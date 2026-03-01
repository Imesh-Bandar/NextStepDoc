# NextStep Documentation

Official documentation for the NextStep Job Portal Management System.

## 🚀 Production Site
**Live Documentation:** [https://nextstep-docv3.vercel.app/](https://nextstep-docv3.vercel.app/)

## 📦 Built With
- [VitePress](https://vitepress.dev/) - Static Site Generator
- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vercel](https://vercel.com/) - Deployment Platform

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## 🚀 CI/CD Setup

This project uses GitHub Actions for continuous deployment to Vercel.

### Setting up Vercel Deployment

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Link your project to Vercel**:
   ```bash
   vercel link
   ```

3. **Get your Vercel tokens**:
   ```bash
   # Get your Vercel token from: https://vercel.com/account/tokens
   # Get your Project ID and Org ID
   vercel project ls
   ```

4. **Add GitHub Secrets**:
   Go to your GitHub repository → Settings → Secrets and variables → Actions

   Add the following secrets:
   - `VERCEL_TOKEN` - Your Vercel authentication token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

### How It Works

- **On Push to `main`**: Automatically builds and deploys to production
- **On Pull Request**: Creates a preview deployment for review

### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

## 📁 Project Structure

```
nextstep-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD workflow
├── docs/
│   ├── .vitepress/
│   │   └── config.mjs          # VitePress configuration
│   ├── guide/                  # Getting started guides
│   ├── api/                    # API documentation
│   ├── architecture/           # System architecture
│   ├── requirements/           # Requirements specifications
│   ├── usecases/              # Use case documentation
│   └── index.md               # Homepage
├── package.json
└── vercel.json                # Vercel configuration
```

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Push to GitHub
4. GitHub Actions will automatically build and deploy

## 📄 License

© 2026 NextStep Platform. All rights reserved.

## 🔗 Links

- **Documentation**: [https://nextstep-docv3.vercel.app/](https://nextstep-docv3.vercel.app/)
- **Repository**: [https://github.com/Imesh-Bandar/NextStepDoc](https://github.com/Imesh-Bandar/NextStepDoc)
