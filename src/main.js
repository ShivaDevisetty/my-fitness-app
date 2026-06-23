// ============================================================
// main.js — App entry point
// Imports all data and renders it. Also handles navigation.
// ============================================================

import { USER, CHANGES, PILLARS } from './data/user.js';
import { WORKOUT }                from './data/workout.js';
import { DIET_TARGETS, MEALS }    from './data/diet.js';
import { SUPPLEMENTS }            from './data/supplements.js';
import { TIMELINE }               from './data/timeline.js';

import {
  renderOverview,
  renderWorkout,
  renderDiet,
  renderSupplements,
  renderTimeline
} from './components/render.js';

// ── Render all sections on load ───────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderOverview({ USER, CHANGES, PILLARS });
  renderWorkout(WORKOUT);
  renderDiet({ DIET_TARGETS, MEALS });
  renderSupplements(SUPPLEMENTS);
  renderTimeline(TIMELINE);
});

// ── Page navigation ───────────────────────────────────────

window.showPage = function(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  document.getElementById("page-" + id).classList.add("active");
  document.getElementById("tab-" + id).classList.add("active");
  document.getElementById("nav-" + id).classList.add("active");
  window.scrollTo(0, 0);
};

// ── Card expand / collapse ────────────────────────────────

window.toggleCard = function(id) {
  const body = document.getElementById("body-" + id);
  const ch   = document.getElementById("ch-" + id);
  const open = body.classList.toggle("open");
  ch.textContent = open ? "▲" : "▼";
};
