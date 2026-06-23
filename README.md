# Shiva's Shred Plan 🏋

Mobile-first fitness app — workout, diet, supplements & timeline.

## 🔗 Live App
👉 https://shivadevisetty.github.io/myplan

---

## 📁 Project Structure

```
myplan/
├── index.html                  ← App shell (HTML structure)
├── package.json                ← Project config
├── vite.config.js              ← Build config (set base to your repo name)
├── README.md
└── src/
    ├── main.js                 ← Entry point, navigation, toggle
    ├── styles/
    │   └── main.css            ← All styles
    ├── data/                   ← ✏️ EDIT THESE FILES TO MODIFY APP
    │   ├── user.js             ← Your stats, changes, pillars
    │   ├── workout.js          ← All 7 workout days
    │   ├── diet.js             ← Macros and all meals
    │   ├── supplements.js      ← All supplements with timing
    │   └── timeline.js         ← Monthly milestones
    └── components/
        └── render.js           ← Renders data into DOM (don't touch)
```

---

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173/myplan/
```

---

## 🏗 Build for Production

```bash
npm run build
# Output goes to /dist folder
```

---

## 🌐 Deploy to GitHub Pages

### Option A — Manual upload (easiest)
1. Run `npm run build`
2. Go to your GitHub repo
3. Upload everything inside the `/dist` folder to the repo root
4. Go to **Settings → Pages → Deploy from branch → main → / (root)**
5. Save → wait 2 min → live at `https://shivadevisetty.github.io/myplan`

### Option B — Auto deploy with GitHub Actions (recommended)
1. Push this entire project to your GitHub repo
2. Create file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Push to main — it auto-builds and deploys every time you push!

---

## ✏️ How to Modify

All content lives in `/src/data/` — you never need to touch CSS or JS logic.

| File | What to edit |
|------|-------------|
| `data/user.js` | Your name, weight, age, goal, macro targets |
| `data/workout.js` | Exercises, sets, cardio additions per day |
| `data/diet.js` | Meals, ingredients, raw/cooked weights, macros |
| `data/supplements.js` | Supplements, doses, timing |
| `data/timeline.js` | Monthly milestone goals |

### Example: Add a new supplement
Open `data/supplements.js`, find the right group, and add:
```js
{
  name:   "Creatine",
  detail: "Increases strength and muscle volume. Take daily — timing doesn't matter much.",
  dose:   "5g",
  timing: "Post-workout or any time"
}
```

### Example: Change your weight
Open `data/user.js` and change:
```js
weight: "74kg",  // updated from 76kg
```

---

## 📱 Add to iPhone Home Screen
1. Open the live URL in **Safari**
2. Tap the **Share button** (box with arrow)
3. Tap **"Add to Home Screen"**
4. Tap **Add** — opens like a native app!
