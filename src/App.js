import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>🚀 Perminov Studios</h1>
      <div className="status-badge">✓ Deployed to GitHub Pages</div>
      <p>
        This React application is fully configured and ready for deployment to GitHub Pages.
        Built with modern React 18 and automated CI/CD pipeline.
      </p>
      
      <ul className="features">
        <li>
          <strong>📦 Homepage Configuration:</strong> Configured for perminov-studios.github.io/app
        </li>
        <li>
          <strong>⚙️ Automated Deployment:</strong> GitHub Actions workflow builds and deploys on push to main
        </li>
        <li>
          <strong>🔄 SPA Support:</strong> 404.html fallback created to handle client-side routing
        </li>
        <li>
          <strong>⚡ Optimized Build:</strong> Production-ready bundle with code splitting and minification
        </li>
        <li>
          <strong>🎨 Modern Stack:</strong> React 18.3.1 with latest best practices
        </li>
      </ul>

      <div className="footer">
        <p>
          Built with React • Deployed with GitHub Pages • 
          <a href="https://github.com/Perminov-Studios/app" target="_blank" rel="noopener noreferrer"> View Source</a>
        </p>
      </div>
    </div>
  );
}