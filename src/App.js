import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>Perminov Studios — React + GitHub Pages</h1>
      <p>This React app is configured to deploy to GitHub Pages.</p>
      <ul>
        <li>Homepage set in package.json: perminov-studios.github.io/app</li>
        <li>GitHub Actions workflow builds and deploys on push to main</li>
        <li>404.html fallback is created to avoid SPA refresh 404s</li>
      </ul>
    </div>
  );
}