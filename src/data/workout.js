// ============================================================
// data/workout.js — ALL 7 WORKOUT DAYS
//
// Each day:
//   day      — day name shown on card
//   label    — card title
//   modified — true = orange badge, false = green
//   exercises— { name, sets }  sets can be ""
//              add absLabel:true to show ABS divider
//   addition — extra orange box at bottom (null = none)
//              use \n for line break inside the box
// ============================================================

export const WORKOUT = [
  {
    day: "MONDAY",
    label: "PUSH + CARDIO",
    modified: true,
    exercises: [
      { name: "Incline Barbell Press",     sets: "3 × 6-8"   },
      { name: "Flat DB Press",             sets: "3 × 8-10"  },
      { name: "Seated DB Shoulder Press",  sets: "3 × 8-10"  },
      { name: "Cable Lateral Raise",       sets: "3 × 12-15" },
      { name: "Rope Pushdown",             sets: "3 × 10-12" },
      { name: "Overhead Extension",        sets: "2 × 10-12" }
    ],
    addition: "✚ Zone 2 Cardio: 25 min incline treadmill or cycling after lifting\nTarget: 116–136 bpm · Can hold a conversation"
  },
  {
    day: "TUESDAY",
    label: "PULL",
    modified: false,
    exercises: [
      { name: "Weighted Pull-Ups", sets: "3 × 6-8"   },
      { name: "Barbell Row",       sets: "3 × 6-8"   },
      { name: "Cable Row",         sets: "2 × 8-12"  },
      { name: "Face Pulls",        sets: "3 × 12-15" },
      { name: "Barbell Curl",      sets: "3 × 8-10"  },
      { name: "Hammer Curl",       sets: "2 × 10-12" }
    ],
    addition: null
  },
  {
    day: "WEDNESDAY",
    label: "LEGS + ABS + CARDIO",
    modified: true,
    exercises: [
      { name: "Squat",                 sets: "4 × 5-8"   },
      { name: "Romanian Deadlift",     sets: "3 × 8-10"  },
      { name: "Leg Press",             sets: "3 × 10-15" },
      { name: "Bulgarian Split Squat", sets: "2 × 10-12" },
      { name: "Leg Curl",              sets: "3 × 10-15" },
      { name: "Calf Raises",           sets: "4 × 15-20" },
      { name: "ABS_DIVIDER",           sets: "", absLabel: true },
      { name: "Hanging Leg Raises",    sets: "3 sets"    },
      { name: "Cable Crunches",        sets: "3 sets"    },
      { name: "Plank",                 sets: "2 × 60 sec"}
    ],
    addition: "✚ Zone 2 Cardio: 20 min light cycling post-session\nKeep it light — legs will be fatigued"
  },
  {
    day: "THURSDAY",
    label: "ACTIVE RECOVERY",
    modified: false,
    exercises: [
      { name: "30–45 min walk",  sets: "" },
      { name: "Mobility work",   sets: "" },
      { name: "Stretching",      sets: "" }
    ],
    addition: null
  },
  {
    day: "FRIDAY",
    label: "PUSH + CARDIO",
    modified: true,
    exercises: [
      { name: "Bench Press",           sets: "4 × 4-6"        },
      { name: "Incline DB Press",      sets: "3 × 8-10"       },
      { name: "Arnold Press",          sets: "3 × 8-10"       },
      { name: "Lateral Raise Machine", sets: "3 × 12-15"      },
      { name: "Skull Crushers",        sets: "3 × 8-10"       },
      { name: "Dips",                  sets: "2 sets to failure" }
    ],
    addition: "✚ Zone 2 Cardio: 25 min incline treadmill or cycling after lifting"
  },
  {
    day: "SATURDAY",
    label: "PULL + ABS + CARDIO",
    modified: true,
    exercises: [
      { name: "Deadlift",              sets: "2 × 3-5"   },
      { name: "Lat Pulldown",          sets: "3 × 8-10"  },
      { name: "One-Arm DB Row",        sets: "3 × 10"    },
      { name: "Straight Arm Pulldown", sets: "2 × 12-15" },
      { name: "Incline Curl",          sets: "3 × 8-12"  },
      { name: "Concentration Curl",    sets: "2 × 10-12" },
      { name: "ABS_DIVIDER",           sets: "", absLabel: true },
      { name: "Hanging Leg Raises",    sets: "3 sets"    },
      { name: "Ab Wheel",              sets: "3 sets"    },
      { name: "Reverse Crunch",        sets: "2 sets"    }
    ],
    addition: "✚ Steady-State Cardio: 40 min brisk walk or light cycling\nCan be done same day evening or separate session"
  },
  {
    day: "SUNDAY",
    label: "REST + STEPS",
    modified: true,
    exercises: [
      { name: "Complete rest from training", sets: "" }
    ],
    addition: "✚ 8,000–10,000 steps target\nPassive fat burn. No gym required — walk outside, mall, anywhere"
  }
];
