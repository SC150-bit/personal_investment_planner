# Personal Investment Planner

**Personal Investment Planner** is a simple web app that helps users plan their investments in SIPs, Crypto, and Gold based on their monthly income. It uses live crypto rates (via Gemini API), displays a visual pie chart using Chart.js, and allows the user to download their investment plan as a PDF.

## 🔧 Tech Stack

- **React.js** – UI & state management  
- **Gemini API** – Fetch live crypto prices  
- **Chart.js** – Visual pie chart for allocation  
- **jsPDF** – Export plan as downloadable PDF  
- **CSS** – Basic styling and layout  

## ✨ Features

- Input monthly income and get a smart allocation plan
- Live BTC/INR conversion using Gemini
- Investment distribution:  
  - **50% SIPs**  
  - **20% Gold**  
  - **30% Crypto**
- Visual pie chart of allocation
- Downloadable PDF of your plan

## 📦 Installation

Clone the repo and install dependencies:

\`\`\`bash
git clone https://github.com/SC150-bit/personal-investment-planner.git
cd personal-investment-planner
npm install
\`\`\`

Start the development server:

\`\`\`bash
npm start
\`\`\`

## 🌐 Deployment Options

### GitHub Pages:
1. Add this to \`package.json\`:
\`\`\`json
"homepage": "https://<username>.github.io/<repo-name>"
\`\`\`
2. Add deploy scripts:
\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
\`\`\`
3. Install GH Pages:
\`\`\`bash
npm install gh-pages --save-dev
\`\`\`
4. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

### Vercel / Netlify:
- Connect your GitHub repo
- Auto-deploy works out of the box

## 📄 License

MIT License
