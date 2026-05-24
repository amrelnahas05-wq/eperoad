import type { Department } from "./types";

export const CVE_DEPARTMENT: Department = {
  id: "cve",
  name: "Civil Engineering",
  shortName: "CVE",
  year: "2023",
  color: "rose",
  courses: {
    // ── Semester 1 (Freshman Fall) ──────────────────────────────
    MTHG002: { code: "MTHG002", title: "Calculus 1", credits: 3, prerequisites: [], semester: 1, category: "math" },
    PHYG001: { code: "PHYG001", title: "Mechanical Properties of Matter & Thermodynamics", credits: 3, prerequisites: [], semester: 1, category: "physics" },
    EMCG001: { code: "EMCG001", title: "Engineering Mechanics – Statics", credits: 2, prerequisites: [], semester: 1, category: "general" },
    INTG005: { code: "INTG005", title: "Introduction to Computer Science", credits: 3, prerequisites: [], semester: 1, category: "general" },
    INTG001: { code: "INTG001", title: "Technical Drawing", credits: 2, prerequisites: [], semester: 1, category: "general" },
    MTHG001: { code: "MTHG001", title: "Algebra", credits: 2, prerequisites: [], semester: 1, category: "math" },
    GENG001: { code: "GENG001", title: "Critical & Creative Thinking", credits: 2, prerequisites: [], semester: 1, category: "general" },

    // ── Semester 2 (Freshman Spring) ────────────────────────────
    MTHG003: { code: "MTHG003", title: "Calculus 2", credits: 3, prerequisites: ["MTHG002"], semester: 2, category: "math" },
    PHYG002: { code: "PHYG002", title: "Electricity & Magnetism", credits: 3, prerequisites: [], semester: 2, category: "physics" },
    EMCG002: { code: "EMCG002", title: "Engineering Mechanics – Dynamics", credits: 3, prerequisites: [], semester: 2, category: "general" },
    ENGG001: { code: "ENGG001", title: "Applied & Modern Manufacturing Engineering", credits: 3, prerequisites: [], semester: 2, category: "general" },
    CHEG001: { code: "CHEG001", title: "Chemistry for Engineers", credits: 2, prerequisites: [], semester: 2, category: "general" },
    GENG002: { code: "GENG002", title: "Societal Issues", credits: 2, prerequisites: [], semester: 2, category: "general" },

    // ── Semester 3 (Sophomore Fall) ─────────────────────────────
    MTHG102: { code: "MTHG102", title: "Linear Algebra & Multivariable Integrals", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 3, category: "math" },
    STRG111: { code: "STRG111", title: "Structural Analysis (1) – Statically Determinate Structures", credits: 3, prerequisites: ["EMCG001", "MTHG003"], semester: 3, category: "core" },
    STRG141: { code: "STRG141", title: "Properties & Strength of Construction Materials", credits: 4, prerequisites: ["CHEG001"], semester: 3, category: "core" },
    IHDG111: { code: "IHDG111", title: "Civil Engineering Drawings", credits: 2, prerequisites: ["INTG001"], semester: 3, category: "core" },
    CVEG_BSC: { code: "CVEG_BSC", title: "Basic Science Elective", credits: 2, prerequisites: [], semester: 3, category: "elective" },
    GENG111: { code: "GENG111", title: "Selected Topics 1 (UR3)", credits: 2, prerequisites: [], semester: 3, category: "elective" },

    // ── Semester 4 (Sophomore Spring) ───────────────────────────
    MTHG110: { code: "MTHG110", title: "Introduction to Numerical Analysis", credits: 2, prerequisites: ["MTHG102"], semester: 4, category: "math" },
    STRG112: { code: "STRG112", title: "Structural Mechanics (1) – Elementary Stress Analysis", credits: 3, prerequisites: ["STRG111"], semester: 4, category: "core" },
    STRG241: { code: "STRG241", title: "Technology of Construction Materials", credits: 4, prerequisites: ["STRG141"], semester: 4, category: "core" },
    IHDG112: { code: "IHDG112", title: "Introduction to Water Resources & Irrigation", credits: 2, prerequisites: ["IHDG111"], semester: 4, category: "core" },
    MTHG113: { code: "MTHG113", title: "Probability & Statistics", credits: 2, prerequisites: ["MTHG003"], semester: 4, category: "math" },
    GENG11X: { code: "GENG11X", title: "Restricted Elective – 1 (UR4)", credits: 2, prerequisites: [], semester: 4, category: "elective" },

    // ── Semester 5 (Junior Fall) ─────────────────────────────────
    STRG211: { code: "STRG211", title: "Structural Analysis (2) – Deformations & Statically Indeterminate Structures", credits: 3, prerequisites: ["STRG112"], semester: 5, category: "core" },
    STRG221: { code: "STRG221", title: "Reinforced Concrete (1) – Design of RC Beams", credits: 4, prerequisites: ["STRG112"], semester: 5, category: "core" },
    IHDG211: { code: "IHDG211", title: "Fluid Mechanics", credits: 3, prerequisites: ["MTHG110", "EMCG001"], semester: 5, category: "core" },
    ARCG211: { code: "ARCG211", title: "Planning, Building Construction & Architectural Specifications", credits: 1, prerequisites: [], semester: 5, category: "general" },
    PBWG211: { code: "PBWG211", title: "Surveying", credits: 4, prerequisites: [], semester: 5, category: "core" },
    GENG351: { code: "GENG351", title: "Selected Current Local Issues (UR7)", credits: 1, prerequisites: [], semester: 5, category: "general" },

    // ── Semester 6 (Junior Spring) ───────────────────────────────
    STRG212: { code: "STRG212", title: "Structural Mechanics (2) – Advanced Stress Analysis", credits: 2, prerequisites: ["STRG112"], semester: 6, category: "core" },
    STRG222: { code: "STRG222", title: "Reinforced Concrete (2) – Design of RC Slabs", credits: 3, prerequisites: ["STRG221"], semester: 6, category: "core" },
    IHDG212: { code: "IHDG212", title: "Hydraulics of Pipelines & Pumps", credits: 2, prerequisites: ["IHDG211"], semester: 6, category: "core" },
    IHDG214: { code: "IHDG214", title: "Open Channels & Groundwater Hydraulics", credits: 2, prerequisites: ["IHDG211"], semester: 6, category: "core" },
    PBWG214: { code: "PBWG214", title: "Geomatics", credits: 4, prerequisites: ["PBWG211"], semester: 6, category: "core" },
    CVEG261: { code: "CVEG261", title: "Construction Project Management", credits: 2, prerequisites: [], semester: 6, category: "general" },
    CVEG281: { code: "CVEG281", title: "Industrial Training – 1", credits: 1, prerequisites: [], semester: 6, category: "training" },

    // ── Semester 7 (Senior-1 Fall) ───────────────────────────────
    STRG311: { code: "STRG311", title: "Structural Analysis (3) – Matrix Stiffness Analysis", credits: 3, prerequisites: ["STRG211"], semester: 7, category: "core" },
    STRG321: { code: "STRG321", title: "Reinforced Concrete (3) – Design of Long-span RC Structures", credits: 2, prerequisites: ["STRG222"], semester: 7, category: "core" },
    STRG351: { code: "STRG351", title: "Steel Structures (1) – Members", credits: 3, prerequisites: ["STRG212"], semester: 7, category: "core" },
    IHDG311: { code: "IHDG311", title: "Irrigation & Drainage Engineering", credits: 3, prerequisites: ["IHDG212", "IHDG214"], semester: 7, category: "core" },
    PBWG321: { code: "PBWG321", title: "Transport Planning & Traffic Engineering", credits: 4, prerequisites: [], semester: 7, category: "core" },
    INTG30X: { code: "INTG30X", title: "Free Elective – 1", credits: 1, prerequisites: [], semester: 7, category: "elective" },

    // ── Semester 8 (Senior-1 Spring) ────────────────────────────
    STRG31X: { code: "STRG31X", title: "Structural Mechanics Elective Course", credits: 2, prerequisites: ["STRG311"], semester: 8, category: "elective" },
    STRG322: { code: "STRG322", title: "Reinforced Concrete (4) – Design of Special RC Structures", credits: 2, prerequisites: ["STRG321"], semester: 8, category: "core" },
    STRG352: { code: "STRG352", title: "Steel Structures (2) – Connections", credits: 3, prerequisites: ["STRG351"], semester: 8, category: "core" },
    IHDG312: { code: "IHDG312", title: "Design of Irrigation Works", credits: 3, prerequisites: ["IHDG311"], semester: 8, category: "core" },
    PBWG331: { code: "PBWG331", title: "Soil Mechanics", credits: 4, prerequisites: [], semester: 8, category: "core" },
    GENG21X: { code: "GENG21X", title: "Free Elective (UR6)", credits: 2, prerequisites: [], semester: 8, category: "elective" },

    // ── Semester 9 (Senior-2 Fall) ───────────────────────────────
    CVEG40X: { code: "CVEG40X", title: "Free Elective – 2", credits: 2, prerequisites: [], semester: 9, category: "elective" },
    IHDG41X: { code: "IHDG41X", title: "IHD Elective", credits: 2, prerequisites: [], semester: 9, category: "elective" },
    PBWG451: { code: "PBWG451", title: "Introduction to Sanitary & Environmental Engineering", credits: 4, prerequisites: [], semester: 9, category: "core" },
    CVEG481: { code: "CVEG481", title: "Graduation Project (1)", credits: 1, prerequisites: [], semester: 9, category: "project" },
    PBWG432: { code: "PBWG432", title: "Foundations", credits: 4, prerequisites: ["PBWG331"], semester: 9, category: "core" },
    GENG24X: { code: "GENG24X", title: "Restricted Elective – 2 (UR7)", credits: 2, prerequisites: [], semester: 9, category: "elective" },

    // ── Semester 10 (Senior-2 Spring) ───────────────────────────
    PBWG441: { code: "PBWG441", title: "Introduction to Highway & Airport Engineering", credits: 4, prerequisites: ["PBWG321"], semester: 10, category: "core" },
    PBWG4XX: { code: "PBWG4XX", title: "PBW Elective", credits: 2, prerequisites: [], semester: 10, category: "elective" },
    CVEG4XA: { code: "CVEG4XA", title: "Restricted Elective for GP", credits: 2, prerequisites: [], semester: 10, category: "elective" },
    CVEG482: { code: "CVEG482", title: "Graduation Project (2)", credits: 3, prerequisites: ["CVEG481"], semester: 10, category: "project" },
    STRG461: { code: "STRG461", title: "Quantity Surveying & Cost Control", credits: 3, prerequisites: [], semester: 10, category: "core" },
    CVEG4XB: { code: "CVEG4XB", title: "Free Elective – 3", credits: 2, prerequisites: [], semester: 10, category: "elective" },
  },
  semesters: [
    { number: 1,  label: "Semester 1",  year: "Freshman",  season: "Fall",   courses: ["MTHG002","PHYG001","EMCG001","INTG005","INTG001","MTHG001","GENG001"] },
    { number: 2,  label: "Semester 2",  year: "Freshman",  season: "Spring", courses: ["MTHG003","PHYG002","EMCG002","ENGG001","CHEG001","GENG002"] },
    { number: 3,  label: "Semester 3",  year: "Sophomore", season: "Fall",   courses: ["MTHG102","STRG111","STRG141","IHDG111","CVEG_BSC","GENG111"] },
    { number: 4,  label: "Semester 4",  year: "Sophomore", season: "Spring", courses: ["MTHG110","STRG112","STRG241","IHDG112","MTHG113","GENG11X"] },
    { number: 5,  label: "Semester 5",  year: "Junior",    season: "Fall",   courses: ["STRG211","STRG221","IHDG211","ARCG211","PBWG211","GENG351"] },
    { number: 6,  label: "Semester 6",  year: "Junior",    season: "Spring", courses: ["STRG212","STRG222","IHDG212","IHDG214","PBWG214","CVEG261","CVEG281"] },
    { number: 7,  label: "Semester 7",  year: "Senior 1",  season: "Fall",   courses: ["STRG311","STRG321","STRG351","IHDG311","PBWG321","INTG30X"] },
    { number: 8,  label: "Semester 8",  year: "Senior 1",  season: "Spring", courses: ["STRG31X","STRG322","STRG352","IHDG312","PBWG331","GENG21X"] },
    { number: 9,  label: "Semester 9",  year: "Senior 2",  season: "Fall",   courses: ["CVEG40X","IHDG41X","PBWG451","CVEG481","PBWG432","GENG24X"] },
    { number: 10, label: "Semester 10", year: "Senior 2",  season: "Spring", courses: ["PBWG441","PBWG4XX","CVEG4XA","CVEG482","STRG461","CVEG4XB"] },
  ],
};
