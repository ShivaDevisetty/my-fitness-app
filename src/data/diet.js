// ============================================================
// data/diet.js — DAILY TARGETS AND ALL MEALS
//
// DIET_TARGETS — 6 macro cards shown at top of Diet page
//
// MEALS — each meal:
//   name      — meal title
//   time      — small text above title
//   kcal      — shown on card header
//   modified  — true = orange badge
//   items     — ingredient strings
//               wrap raw→cooked weights in <rc>...</rc> tags
//               start with "NEW:" to highlight as orange new item
//               start with "──" to show as a section divider
//   drink     — optional drink string (null = none)
//   macros    — macro summary string for bottom of card
//   note      — optional warning note (null = none)
// ============================================================

export const DIET_TARGETS = [
  { val: "~2,220", label: "Calories" },
  { val: "~183g",  label: "Protein"  },
  { val: "~185g",  label: "Carbs"    },
  { val: "~57g",   label: "Fat"      },
  { val: "~35g",   label: "Fiber"    },
  { val: "3.5–4L", label: "Water"    }
];

export const MEALS = [
  {
    name: "Meal 1 — Breakfast",
    time: "MORNING · FIRST THING",
    kcal: "~440 kcal",
    modified: false,
    items: [
      "Dymatize Whey — 30g",
      "Rolled Oats — <rc>35g raw → ~85g cooked</rc>",
      "Banana — 80g",
      "Mixed Seeds — 12g",
      "Whole Egg — 1 egg <rc>(~50g raw → ~45g cooked)</rc>",
      "Psyllium Husk — 5g (add after cooking oats)",
      "Flaxseeds (ground) — 10g"
    ],
    drink:  "🍵 Spearmint Tea — 1 cup",
    macros: "38g protein · 52g carbs · 17g fat · 8g fiber",
    note:   null
  },
  {
    name: "Meal 2 — Lunch",
    time: "MIDDAY",
    kcal: "~540 kcal",
    modified: false,
    items: [
      "Chicken Breast — <rc>235g raw → ~185g cooked</rc>",
      "Sweet Potato — <rc>180g raw → ~150g cooked</rc>",
      "Lemon — half (squeezed)",
      "── Option A ──",
      "Spinach — <rc>100g raw → ~35g cooked</rc>",
      "Carrot — <rc>70g raw → ~50g cooked</rc>",
      "Capsicum — <rc>100g raw → ~70g cooked</rc>",
      "── Option B ──",
      "Green Beans — <rc>200g raw → ~130g cooked</rc>",
      "Carrot — <rc>70g raw → ~50g cooked</rc>",
      "Capsicum — <rc>150g raw → ~100g cooked</rc>"
    ],
    drink:  null,
    macros: "52g protein · 55g carbs · 8g fat · 5g fiber",
    note:   null
  },
  {
    name: "Meal 3 — Pre-Workout",
    time: "60–90 MIN BEFORE GYM",
    kcal: "~580 kcal",
    modified: true,
    items: [
      "Rolled Oats — <rc>68g raw → ~165g cooked</rc>",
      "Banana — 90g",
      "Honey — 7g (1 tsp)",
      "NEW: Whole Eggs — <rc>2 eggs (~100g raw → ~90g cooked)</rc>",
      "NEW: Dymatize Whey — ½ scoop (15g)"
    ],
    drink:  null,
    macros: "35g protein · 80g carbs · 11g fat · 5g fiber",
    note:   "Greek Yogurt removed — replaced with whole eggs + half scoop whey. Whole food, no market trust issues, ~25g protein added"
  },
  {
    name: "Post-Workout",
    time: "WITHIN 30 MIN AFTER TRAINING",
    kcal: "~180 kcal",
    modified: false,
    items: [
      "Dymatize Whey — 30g",
      "Chia Seeds — 5g",
      "Sabja Seeds — 5g",
      "Creatine — 3g"
    ],
    drink:  "Mix with 400–500ml water",
    macros: "27g protein · 5g carbs · 3g fat · 2g fiber",
    note:   null
  },
  {
    name: "Meal 4 — Dinner",
    time: "EVENING",
    kcal: "~420 kcal",
    modified: false,
    items: [
      "Tofu (firm) — <rc>250g raw → ~220g cooked</rc>",
      "Zucchini OR Bottle Gourd — <rc>330g raw → ~220g cooked</rc>",
      "Garlic — 2 cloves (~10g raw)",
      "Olive Oil — 5g (1 tsp)"
    ],
    drink:  "🍵 Spearmint Tea — 1 cup",
    macros: "32g protein · 17g carbs · 18g fat · 3g fiber",
    note:   null
  }
];
