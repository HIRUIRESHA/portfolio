# Hiruni Iresha — Developer Portfolio

A modern, high-performance developer portfolio built with **React 19**, **Vite**, and **Tailwind CSS**. Designed with rich aesthetics, glassmorphism, fluid micro-interactions, dark/light themes, and 100% client-side functionality for zero-backend hosting on **Vercel**.

---

## 🌟 Key Features

- **Modern Glassmorphic UI**: Ambient glow backdrops, frosted navigation panels, sleek borders, and subtle film-grain texture.
- **Dynamic Theme Switcher**: Instant light & obsidian dark mode transitions with system preference synchronization.
- **Interactive Project Showcase**:
  - Filterable by `Full Stack`, `DevOps & Cloud`, and `Mobile App`.
  - Detailed project modal dialog with architectural overview, feature breakdown, tech stack pills, and GitHub source links.
  - Real project assets for *Buildaura*, *Buildaura DevOps CI/CD*, *MovieLens*, *ExpenseMate*, and *CareLink*.
- **Education & Experience Timeline**: Clear milestones detailing undergraduate studies and software engineering initiatives.
- **Verified CV Download**: Direct, one-click PDF download for `Hiruni_Iresha_CV.pdf`.
- **100% Client-Side Contact**:
  - Direct integration with **EmailJS** (no backend server required).
  - One-click **Copy Email to Clipboard** with animated toast feedback.
  - Automatic fallback to default email client (`mailto:`) if keys are absent.
  - Anti-spam honeypot protection.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS, CSS Custom Properties / Tokens
- **Icons**: Lucide React, React Icons (`react-icons/si`, `react-icons/fa`)
- **Build Tool**: Vite 7
- **Deployment Platform**: Vercel (Static Single Page Application)

---

## 🚀 How to Deploy on Vercel

This portfolio is configured to run completely on the client side without any Node.js backend server.

### Option 1: Deploy via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: modernize portfolio design and add vercel config"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New Project** and select your GitHub repository.
4. **Project Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `react-dev-portfolio` (if importing the parent folder, or `./` if importing `react-dev-portfolio` directly)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables** (Optional, for EmailJS):
   Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID` = `your_service_id`
   - `VITE_EMAILJS_TEMPLATE_ID` = `your_template_id`
   - `VITE_EMAILJS_PUBLIC_KEY` = `your_public_key`
6. Click **Deploy**. Your site will be live within seconds!

### Option 2: Deploy via Vercel CLI
```bash
cd react-dev-portfolio
npm install -g vercel
vercel
```

---

## 💻 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```
