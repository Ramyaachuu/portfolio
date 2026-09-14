# Ramya V — Portfolio Website

A simple, static portfolio built with HTML5, CSS3, JavaScript and Bootstrap 5.

## Files

```
portfolio/
├── index.html          → all page content and structure
├── style.css            → all visual design (colors, fonts, layout, dark mode)
├── script.js             → dark mode toggle, mobile menu, hero typing effect
└── assets/
    └── resume.pdf         → ADD THIS FILE (see below)
```

## 1. Run it locally

No build tools or installs needed — it's a static site.

**Easiest way:**
Just double-click `index.html` and it will open in your browser.

**Better way (avoids some browser quirks):**
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` → "Open with Live Server".

Or, if you have Python installed, run this inside the `portfolio` folder:
```
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## 2. Deploy with GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio` or `your-username.github.io`).
2. Push these files to the repository:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub, go to your repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will give you a live URL, usually:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   (If your repo is named `YOUR_USERNAME.github.io`, the site will be at `https://YOUR_USERNAME.github.io/` directly.)

## 3. Things you still need to add

Search the code for `TODO` comments — there are three things left as placeholders on purpose,
since fake links weren't added for you:

| What | Where | How to fix |
|---|---|---|
| GitHub profile URL | `index.html` — hero buttons and Contact section (2 places) | Replace `https://github.com/YOUR_USERNAME` with your real GitHub URL |
| Project GitHub links | `index.html` — inside each `.project-body` (commented out) | Add your repo links and uncomment the `<a>` tag for each project, if you want to link them |
| Resume PDF file | `assets/resume.pdf` | Export your resume as a PDF and save it at exactly this path/filename |

Everything else (name, education, skills, internship, projects, workshop, strengths, contact
details) is already filled in from your resume and does not need editing unless something
about your details changes.

## Notes

- Dark/light mode is a toggle button in the navbar (top right) and remembers your choice.
- The site is fully responsive — resize your browser or check it on your phone to see the
  mobile menu (hamburger icon).
- All colors, fonts and spacing live in `style.css` under the `:root` section at the top if
  you want to adjust the look later.
