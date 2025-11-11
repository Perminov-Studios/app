# Perminov Studios - React App

A modern React application configured for deployment to GitHub Pages.

## 🚀 Live Demo

Visit the live application at: [https://perminov-studios.github.io/app](https://perminov-studios.github.io/app)

## ✨ Features

- **React 18.3.1** - Latest React features and improvements
- **GitHub Pages Deployment** - Automated deployment via GitHub Actions
- **Responsive Design** - Beautiful, modern UI that works on all devices
- **SPA Support** - Proper routing support with 404.html fallback
- **Optimized Build** - Production-ready bundle with code splitting

## 🛠️ Tech Stack

- **React** - UI library
- **React Scripts** - Build tooling and development server
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - CI/CD pipeline

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Perminov-Studios/app.git

# Navigate to the project directory
cd app

# Install dependencies
npm install
```

## 🏃 Running Locally

```bash
# Start development server
npm start
```

The app will be available at `http://localhost:3000/app`

## 🏗️ Building

```bash
# Create production build
npm run build
```

The optimized build will be created in the `build/` directory.

## 🚢 Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch.

## 📁 Project Structure

```
app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── favicon.svg             # App icon
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO configuration
├── src/
│   ├── App.css                 # App styles
│   ├── App.js                  # Main React component
│   └── index.js                # Application entry point
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔧 Configuration

The app is configured with the following settings in `package.json`:

```json
{
  "homepage": "https://perminov-studios.github.io/app"
}
```

This ensures all assets are correctly referenced when deployed to GitHub Pages.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Perminov Studios**

- GitHub: [@Perminov-Studios](https://github.com/Perminov-Studios)

---

Made with ❤️ using React and GitHub Pages
