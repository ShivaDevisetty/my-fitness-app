// ============================================================
// components/render.js
// Renders all data into DOM. Do not modify.
// ============================================================

function parseIngredient(str) {
  return str.replace(/<rc>(.*?)<\/rc>/g,
    (_, m) => `<span class="rc-note">${m}</span>`
  );
}

// ── Overview ──────────────────────────────────────────────
export function renderOverview({ USER, CHANGES, PILLARS }) {
  document.getElementById("header-h1").textContent = `${USER.name}'s Shred Plan`;
  document.getElementById("header-sub").textContent =
    `${USER.weight} · ${USER.height} · ${USER.age} · ${USER.goal}`;
  document.getElementById("stat-cal").textContent = USER.calories;
  document.getElementById("stat-pro").textContent = USER.protein;
  document.getElementById("stat-car").textContent = USER.cardio;

  const changesEl = document.getElementById("changes-list");
  CHANGES.forEach(c => {
    changesEl.insertAdjacentHTML("beforeend", `
      <div class="change-card">
        <span style="color:#f97316;font-size:14px;margin-top:1px">✦</span>
        <div>
          <div class="change-title">${c.title}</div>
          <div class="change-desc">${c.desc}</div>
        </div>
      </div>`);
  });

  const pillarsEl = document.getElementById("pillars-grid");
  PILLARS.forEach(p => {
    pillarsEl.insertAdjacentHTML("beforeend", `
      <div class="pillar-card">
        <div class="pillar-icon">${p.icon}</div>
        <div class="pillar-title">${p.title}</div>
        <div class="pillar-desc">${p.desc}</div>
      </div>`);
  });
}

// ── Workout ───────────────────────────────────────────────
export function renderWorkout(WORKOUT) {
  const el = document.getElementById("workout-list");
  WORKOUT.forEach((d, i) => {
    const id    = "w" + i;
    const color = d.modified ? "#f97316" : "#22c55e";
    const badge = d.modified
      ? `<span class="badge badge-orange">MODIFIED</span>`
      : `<span class="badge badge-green">UNCHANGED</span>`;

    const exRows = d.exercises.map(ex => {
      if (ex.absLabel) return `<div class="abs-label">ABS</div>`;
      return `<div class="ex-row">
        <span class="ex-name">${ex.name}</span>
        ${ex.sets ? `<span class="ex-sets">${ex.sets}</span>` : ""}
      </div>`;
    }).join("");

    const addBox = d.addition ? `
      <div class="addition-box">
        ${d.addition.replace(/\n/, "<br><span style='color:#888;font-weight:400'>") + "</span>"}
      </div>` : "";

    el.insertAdjacentHTML("beforeend", `
      <div class="card">
        <button class="card-header" onclick="toggleCard('${id}')">
          <div class="card-left">
            <div class="dot" style="background:${color}"></div>
            <div>
              <div class="card-day">${d.day}</div>
              <div class="card-title">${d.label}</div>
            </div>
          </div>
          <div class="card-right">
            ${badge}
            <span class="chevron" id="ch-${id}">▼</span>
          </div>
        </button>
        <div class="card-body" id="body-${id}">
          <div style="padding-top:12px">${exRows}${addBox}</div>
        </div>
      </div>`);
  });
}

// ── Diet ──────────────────────────────────────────────────
export function renderDiet({ DIET_TARGETS, MEALS }) {
  const targetsEl = document.getElementById("diet-targets");
  DIET_TARGETS.forEach(t => {
    targetsEl.insertAdjacentHTML("beforeend", `
      <div class="target-card">
        <div class="target-val">${t.val}</div>
        <div class="target-label">${t.label}</div>
      </div>`);
  });

  const mealsEl = document.getElementById("meals-list");
  MEALS.forEach((m, i) => {
    const id    = "m" + i;
    const color = m.modified ? "#f97316" : "#22c55e";
    const badge = m.modified
      ? `<span class="badge badge-orange">MODIFIED</span>` : "";

    const ingRows = m.items.map(item => {
      if (item.startsWith("──")) {
        return `<div class="option-divider">${item}</div>`;
      }
      const isNew  = item.startsWith("NEW:");
      const clean  = isNew ? item.replace("NEW:", "✚") : item;
      const parsed = parseIngredient(clean);
      return `<div class="ing-row${isNew ? " new-item" : ""}">${parsed}</div>`;
    }).join("");

    const drinkHtml = m.drink
      ? `<div style="font-size:12px;color:#666;margin-top:8px">${m.drink}</div>` : "";
    const noteHtml = m.note
      ? `<div class="note-box">⚠ ${m.note}</div>` : "";

    mealsEl.insertAdjacentHTML("beforeend", `
      <div class="card">
        <button class="card-header" onclick="toggleCard('${id}')">
          <div class="card-left">
            <div class="dot" style="background:${color}"></div>
            <div>
              <div class="card-day">${m.time}</div>
              <div class="card-title">${m.name}</div>
            </div>
          </div>
          <div class="card-right">
            <span style="font-size:12px;color:#777">${m.kcal}</span>
            ${badge}
            <span class="chevron" id="ch-${id}">▼</span>
          </div>
        </button>
        <div class="card-body" id="body-${id}">
          <div style="padding-top:12px">
            ${ingRows}${drinkHtml}
            <div class="macros-bar">${m.macros}</div>
            ${noteHtml}
          </div>
        </div>
      </div>`);
  });
}

// ── Supplements ───────────────────────────────────────────
export function renderSupplements(SUPPLEMENTS) {
  const el = document.getElementById("supp-list");
  SUPPLEMENTS.forEach(group => {
    const rows = group.items.map(s => `
      <div class="supp-row">
        <div class="supp-left">
          <div class="supp-name">${s.name}</div>
          <div class="supp-detail">${s.detail}</div>
        </div>
        <div class="supp-right">
          <div class="supp-dose">${s.dose}</div>
          <div class="supp-timing">${s.timing}</div>
        </div>
      </div>`).join("");

    el.insertAdjacentHTML("beforeend", `
      <div class="supp-section">
        <div class="supp-section-title">${group.groupTitle}</div>
        ${rows}
      </div>`);
  });
}

// ── Timeline ──────────────────────────────────────────────
export function renderTimeline(TIMELINE) {
  const el = document.getElementById("timeline-list");
  TIMELINE.forEach(t => {
    el.insertAdjacentHTML("beforeend", `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-card">
          <div class="tl-period">${t.period}</div>
          <div class="tl-icon">${t.icon}</div>
          <div class="tl-text">${t.text}</div>
        </div>
      </div>`);
  });
}
