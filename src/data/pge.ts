import type { Department } from "./types";

export const PGE_DEPARTMENT: Department = {
  id: "pge",
  name: "Petroleum & Natural Gas Engineering",
  shortName: "PGE",
  year: "2023",
  color: "orange",
  courses: {
    // ── Semester 1 (Freshman Fall) ──────────────────────────────
    GENG001: { code: "GENG001", title: "Critical & Creative Thinking", credits: 2, prerequisites: [], semester: 1, category: "general" },
    MTHG002: { code: "MTHG002", title: "Calculus 1", credits: 3, prerequisites: [], semester: 1, category: "math" },
    PHYG001: { code: "PHYG001", title: "Mechanical Properties of Materials, Waves & Thermodynamics", credits: 3, prerequisites: [], semester: 1, category: "physics" },
    EMCG001: { code: "EMCG001", title: "Engineering Mechanics – Statics", credits: 2, prerequisites: [], semester: 1, category: "general" },
    INTG005: { code: "INTG005", title: "Introduction to Computer Science", credits: 3, prerequisites: [], semester: 1, category: "general" },
    MTHG001: { code: "MTHG001", title: "Algebra", credits: 2, prerequisites: [], semester: 1, category: "math" },
    INTG001: { code: "INTG001", title: "Technical Drawing", credits: 2, prerequisites: [], semester: 1, category: "general" },

    // ── Semester 2 (Freshman Spring) ────────────────────────────
    GENG002: { code: "GENG002", title: "Societal Issues", credits: 2, prerequisites: [], semester: 2, category: "general" },
    MTHG003: { code: "MTHG003", title: "Calculus 2", credits: 3, prerequisites: ["MTHG002"], semester: 2, category: "math" },
    PHYG002: { code: "PHYG002", title: "Electricity and Magnetism", credits: 3, prerequisites: [], semester: 2, category: "physics" },
    EMCG002: { code: "EMCG002", title: "Engineering Mechanics – Particle Dynamics", credits: 3, prerequisites: [], semester: 2, category: "general" },
    ENGG001: { code: "ENGG001", title: "Applied & Modern Manufacturing Engineering", credits: 3, prerequisites: [], semester: 2, category: "general" },
    CHEG001: { code: "CHEG001", title: "Chemistry for Engineers", credits: 2, prerequisites: [], semester: 2, category: "general" },

    // ── Semester 3 (Sophomore Fall) ─────────────────────────────
    GENG111: { code: "GENG111", title: "Selected Topics – 1 (UR3)", credits: 2, prerequisites: [], semester: 3, category: "elective" },
    MTHG102: { code: "MTHG102", title: "Linear Algebra & Multivariable Integrals", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 3, category: "math" },
    MTHG104: { code: "MTHG104", title: "Differential Equations", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 3, category: "math" },
    PGEG111: { code: "PGEG111", title: "Introduction to Petroleum Engineering", credits: 1, prerequisites: [], semester: 3, category: "core" },
    IHRG121: { code: "IHRG121", title: "Fluid Mechanics", credits: 2, prerequisites: ["MTHG104", "EMCG001"], semester: 3, category: "general" },
    MPMG101: { code: "MPMG101", title: "Engineering Materials", credits: 3, prerequisites: [], semester: 3, category: "general" },
    STRG111: { code: "STRG111", title: "Theory of Structure", credits: 2, prerequisites: [], semester: 3, category: "general" },

    // ── Semester 4 (Sophomore Spring) ───────────────────────────
    GENG119: { code: "GENG119", title: "Principles of Entrepreneurship & Marketing", credits: 2, prerequisites: [], semester: 4, category: "elective" },
    MTHG110: { code: "MTHG110", title: "Introduction to Numerical Analysis", credits: 2, prerequisites: ["MTHG102"], semester: 4, category: "math" },
    MPEG177: { code: "MPEG177", title: "Thermodynamics and Combustion", credits: 2, prerequisites: ["PHYG001"], semester: 4, category: "general" },
    PGEG211: { code: "PGEG211", title: "Reservoir Rock and Fluid Properties", credits: 3, prerequisites: ["PGEG111", "PHYG002"], semester: 4, category: "core" },
    PGEG121: { code: "PGEG121", title: "General Geology", credits: 3, prerequisites: ["MTHG003"], semester: 4, category: "core" },
    EPEG120: { code: "EPEG120", title: "Introduction to Electrical Power Engineering", credits: 2, prerequisites: ["PHYG002"], semester: 4, category: "general" },
    PHYG106: { code: "PHYG106", title: "Introduction to Applied Physics", credits: 2, prerequisites: ["PHYG001"], semester: 4, category: "physics" },

    // ── Semester 5 (Junior Fall) ─────────────────────────────────
    "GENG22X": { code: "GENG22X", title: "Restricted Elective – 2 (UR5)", credits: 2, prerequisites: [], semester: 5, category: "elective" },
    CHEG211: { code: "CHEG211", title: "Organic & Inorganic Chemistry", credits: 2, prerequisites: ["CHEG001"], semester: 5, category: "general" },
    PGEG122: { code: "PGEG122", title: "Oil Well Drilling Engineering – 1", credits: 3, prerequisites: ["PGEG111", "IHRG121"], semester: 5, category: "core" },
    PGEG225: { code: "PGEG225", title: "Stratigraphy", credits: 3, prerequisites: ["PGEG121"], semester: 5, category: "core" },
    MING211: { code: "MING211", title: "Rock Mechanics", credits: 2, prerequisites: ["STRG111"], semester: 5, category: "general" },
    PGEG221: { code: "PGEG221", title: "Reservoir Engineering", credits: 3, prerequisites: ["PGEG211"], semester: 5, category: "core" },

    // ── Semester 6 (Junior Spring) ───────────────────────────────
    "GENG21X": { code: "GENG21X", title: "Free Elective (UR6)", credits: 2, prerequisites: [], semester: 6, category: "elective" },
    PBWG216: { code: "PBWG216", title: "Plane and Topographic Survey", credits: 2, prerequisites: ["INTG001"], semester: 6, category: "general" },
    PGEG212: { code: "PGEG212", title: "Oil Well Drilling Engineering – 2", credits: 3, prerequisites: ["PGEG122"], semester: 6, category: "core" },
    PGEG223: { code: "PGEG223", title: "Natural Gas Production Engineering & Treatment", credits: 3, prerequisites: ["PGEG221"], semester: 6, category: "core" },
    PGEG213: { code: "PGEG213", title: "Petroleum Production Engineering", credits: 3, prerequisites: ["PGEG211", "PGEG221"], semester: 6, category: "core" },
    PGEG224: { code: "PGEG224", title: "Oil Surface Treatment Operations", credits: 3, prerequisites: ["PGEG213"], semester: 6, category: "core" },

    // ── Semester 7 (Senior-1 Fall) ───────────────────────────────
    PGEG222: { code: "PGEG222", title: "Well Logging", credits: 3, prerequisites: ["PGEG211", "PGEG121"], semester: 7, category: "core" },
    PGEG321: { code: "PGEG321", title: "Subsurface Exploration Engineering", credits: 3, prerequisites: ["PGEG222"], semester: 7, category: "core" },
    PGEG313: { code: "PGEG313", title: "Petroleum Legislation & Economics", credits: 2, prerequisites: ["PGEG221"], semester: 7, category: "core" },
    PGEG314: { code: "PGEG314", title: "Petroleum Network Design", credits: 3, prerequisites: ["PGEG213"], semester: 7, category: "core" },
    PGEG315: { code: "PGEG315", title: "Oil and Gas Well Stimulation", credits: 2, prerequisites: ["PGEG212"], semester: 7, category: "core" },
    PGEG331: { code: "PGEG331", title: "Elective Course 1", credits: 3, prerequisites: [], semester: 7, category: "elective" },

    // ── Semester 8 (Senior-1 Spring) ────────────────────────────
    PGEG324: { code: "PGEG324", title: "Well Completion & Workover Operations", credits: 3, prerequisites: ["PGEG212"], semester: 8, category: "core" },
    PGEG311: { code: "PGEG311", title: "Artificial Lift", credits: 3, prerequisites: ["PGEG213"], semester: 8, category: "core" },
    PGEG412: { code: "PGEG412", title: "Petroleum Geology", credits: 3, prerequisites: ["PGEG225", "PGEG222"], semester: 8, category: "core" },
    PGEG322: { code: "PGEG322", title: "Oil Well Drilling Engineering – 3", credits: 3, prerequisites: ["PGEG212"], semester: 8, category: "core" },
    PGEG341: { code: "PGEG341", title: "Elective Course 2", credits: 3, prerequisites: [], semester: 8, category: "elective" },
    PGEG325: { code: "PGEG325", title: "Industrial Training", credits: 1, prerequisites: [], semester: 8, category: "training" },

    // ── Semester 9 (Senior-2 Fall) ───────────────────────────────
    PGEG421: { code: "PGEG421", title: "Reservoir Simulation", credits: 3, prerequisites: ["PGEG221"], semester: 9, category: "core" },
    PGEG312: { code: "PGEG312", title: "Well Test Analysis", credits: 3, prerequisites: ["PGEG221"], semester: 9, category: "core" },
    PGEG481: { code: "PGEG481", title: "Graduation Project (1)", credits: 1, prerequisites: [], semester: 9, category: "project" },
    PGEG351: { code: "PGEG351", title: "Elective Course 3", credits: 3, prerequisites: [], semester: 9, category: "elective" },
    PGEG431: { code: "PGEG431", title: "Elective Course 4", credits: 3, prerequisites: [], semester: 9, category: "elective" },
    PGRG441: { code: "PGRG441", title: "Elective Course 5", credits: 3, prerequisites: [], semester: 9, category: "elective" },

    // ── Semester 10 (Senior-2 Spring) ───────────────────────────
    PGEG361: { code: "PGEG361", title: "Selected Current Issues – Energy & Climate Change", credits: 1, prerequisites: [], semester: 10, category: "general" },
    PGEG411: { code: "PGEG411", title: "Drilling Optimization and Management", credits: 4, prerequisites: ["PGEG322"], semester: 10, category: "core" },
    PGEG422: { code: "PGEG422", title: "Oil Recovery Enhancement Methods", credits: 4, prerequisites: ["PGEG221", "PGEG311"], semester: 10, category: "core" },
    PGEG482: { code: "PGEG482", title: "Graduation Project (2)", credits: 3, prerequisites: ["PGEG481"], semester: 10, category: "project" },
    PGEG451: { code: "PGEG451", title: "Elective Course 6", credits: 3, prerequisites: [], semester: 10, category: "elective" },
  },
  semesters: [
    { number: 1,  label: "Semester 1",  year: "Freshman",  season: "Fall",   courses: ["GENG001","MTHG002","PHYG001","EMCG001","INTG005","MTHG001","INTG001"] },
    { number: 2,  label: "Semester 2",  year: "Freshman",  season: "Spring", courses: ["GENG002","MTHG003","PHYG002","EMCG002","ENGG001","CHEG001"] },
    { number: 3,  label: "Semester 3",  year: "Sophomore", season: "Fall",   courses: ["GENG111","MTHG102","MTHG104","PGEG111","IHRG121","MPMG101","STRG111"] },
    { number: 4,  label: "Semester 4",  year: "Sophomore", season: "Spring", courses: ["GENG119","MTHG110","MPEG177","PGEG211","PGEG121","EPEG120","PHYG106"] },
    { number: 5,  label: "Semester 5",  year: "Junior",    season: "Fall",   courses: ["GENG22X","CHEG211","PGEG122","PGEG225","MING211","PGEG221"] },
    { number: 6,  label: "Semester 6",  year: "Junior",    season: "Spring", courses: ["GENG21X","PBWG216","PGEG212","PGEG223","PGEG213","PGEG224"] },
    { number: 7,  label: "Semester 7",  year: "Senior 1",  season: "Fall",   courses: ["PGEG222","PGEG321","PGEG313","PGEG314","PGEG315","PGEG331"] },
    { number: 8,  label: "Semester 8",  year: "Senior 1",  season: "Spring", courses: ["PGEG324","PGEG311","PGEG412","PGEG322","PGEG341","PGEG325"] },
    { number: 9,  label: "Semester 9",  year: "Senior 2",  season: "Fall",   courses: ["PGEG421","PGEG312","PGEG481","PGEG351","PGEG431","PGRG441"] },
    { number: 10, label: "Semester 10", year: "Senior 2",  season: "Spring", courses: ["PGEG361","PGEG411","PGEG422","PGEG482","PGEG451"] },
  ],
};
