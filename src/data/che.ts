import type { Department } from "./types";

export const CHE_DEPARTMENT: Department = {
  id: "che",
  name: "Chemical Engineering",
  shortName: "CHE",
  year: "2023",
  color: "teal",
  courses: {
    // ── Semester 1 (Freshman Fall) ──────────────────────────────
    MTHG001: { code: "MTHG001", title: "Algebra", credits: 2, prerequisites: [], semester: 1, category: "math" },
    PHYG001: { code: "PHYG001", title: "Mechanical Properties of Matter, Waves & Thermodynamics", credits: 3, prerequisites: [], semester: 1, category: "physics" },
    EMCG001: { code: "EMCG001", title: "Engineering Mechanics – Statics", credits: 2, prerequisites: [], semester: 1, category: "general" },
    INTG005: { code: "INTG005", title: "Introduction to Computer Science", credits: 3, prerequisites: [], semester: 1, category: "general" },
    MTHG002: { code: "MTHG002", title: "Calculus 1", credits: 3, prerequisites: [], semester: 1, category: "math" },
    INTG001: { code: "INTG001", title: "Technical Drawing", credits: 2, prerequisites: [], semester: 1, category: "general" },
    GENG001: { code: "GENG001", title: "Critical & Creative Thinking", credits: 2, prerequisites: [], semester: 1, category: "general" },

    // ── Semester 2 (Freshman Spring) ────────────────────────────
    MTHG003: { code: "MTHG003", title: "Calculus 2", credits: 3, prerequisites: ["MTHG002"], semester: 2, category: "math" },
    PHYG002: { code: "PHYG002", title: "Electricity & Magnetism", credits: 3, prerequisites: [], semester: 2, category: "physics" },
    EMCG002: { code: "EMCG002", title: "Engineering Mechanics – Dynamics", credits: 3, prerequisites: [], semester: 2, category: "general" },
    CHEG001: { code: "CHEG001", title: "Chemistry for Engineers", credits: 2, prerequisites: [], semester: 2, category: "general" },
    ENGG001: { code: "ENGG001", title: "Applied & Modern Manufacturing Engineering", credits: 3, prerequisites: [], semester: 2, category: "general" },
    GENG002: { code: "GENG002", title: "Societal Issues", credits: 2, prerequisites: [], semester: 2, category: "general" },

    // ── Semester 3 (Sophomore Fall) ─────────────────────────────
    MTHG103: { code: "MTHG103", title: "Ordinary Differential Equations & Mathematical Transforms", credits: 2, prerequisites: ["MTHG001", "MTHG003"], semester: 3, category: "math" },
    MTHG113: { code: "MTHG113", title: "Probability & Statistics", credits: 2, prerequisites: ["MTHG003"], semester: 3, category: "math" },
    CHEG131: { code: "CHEG131", title: "Inorganic & Analytical Chemistry", credits: 3, prerequisites: ["CHEG001"], semester: 3, category: "core" },
    CHEG121: { code: "CHEG121", title: "Fluid Mechanics", credits: 3, prerequisites: ["MTHG103", "PHYG001"], semester: 3, category: "core" },
    CHEG141: { code: "CHEG141", title: "Organic Chemistry", credits: 2, prerequisites: ["CHEG001"], semester: 3, category: "core" },
    EPEG120: { code: "EPEG120", title: "Introduction to Electrical Power Engineering", credits: 2, prerequisites: ["PHYG002"], semester: 3, category: "general" },
    GENG111: { code: "GENG111", title: "Selected Topics 1 (UR3)", credits: 2, prerequisites: [], semester: 3, category: "elective" },

    // ── Semester 4 (Sophomore Spring) ───────────────────────────
    MTHG102: { code: "MTHG102", title: "Linear Algebra & Multivariable Integrals", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 4, category: "math" },
    PHYG106: { code: "PHYG106", title: "Introduction to Applied Physics", credits: 2, prerequisites: ["PHYG001"], semester: 4, category: "physics" },
    CHEG101: { code: "CHEG101", title: "Introduction to Chemical Engineering", credits: 3, prerequisites: ["CHEG001", "PHYG001"], semester: 4, category: "core" },
    CHEG111: { code: "CHEG111", title: "Computer Applications in Chemical Engineering", credits: 4, prerequisites: ["INTG005"], semester: 4, category: "core" },
    CHEG142: { code: "CHEG142", title: "Organic & Biochemistry", credits: 2, prerequisites: ["CHEG141"], semester: 4, category: "core" },
    GENG1XX: { code: "GENG1XX", title: "Restricted Elective – 1 (UR4)", credits: 2, prerequisites: [], semester: 4, category: "elective" },

    // ── Semester 5 (Junior Fall) ─────────────────────────────────
    CHEG252: { code: "CHEG252", title: "Chemical Engineering Thermodynamics", credits: 3, prerequisites: ["CHEG101", "PHYG001"], semester: 5, category: "core" },
    CHEG212: { code: "CHEG212", title: "Chemical Engineering Fundamentals", credits: 3, prerequisites: ["CHEG101", "MTHG103"], semester: 5, category: "core" },
    CHEG222: { code: "CHEG222", title: "Momentum Transfer", credits: 3, prerequisites: ["CHEG121"], semester: 5, category: "core" },
    CHEG232: { code: "CHEG232", title: "Materials Engineering", credits: 2, prerequisites: ["CHEG131"], semester: 5, category: "core" },
    CHEG26X: { code: "CHEG26X", title: "Elective 1 – Environmental/Energy/Renewable", credits: 2, prerequisites: [], semester: 5, category: "elective" },
    GENG2XX: { code: "GENG2XX", title: "Restricted Elective – 2 (UR5)", credits: 2, prerequisites: [], semester: 5, category: "elective" },

    // ── Semester 6 (Junior Spring) ───────────────────────────────
    CHEG251: { code: "CHEG251", title: "Physical Chemistry & Phase Equilibrium", credits: 3, prerequisites: ["CHEG252", "CHEG131"], semester: 6, category: "core" },
    CHEG213: { code: "CHEG213", title: "Numerical Applications in Chemical Engineering", credits: 4, prerequisites: ["CHEG111", "MTHG102"], semester: 6, category: "core" },
    CHEG223: { code: "CHEG223", title: "Heat Transfer", credits: 4, prerequisites: ["CHEG222", "CHEG212"], semester: 6, category: "core" },
    CHEG264: { code: "CHEG264", title: "Economics for Chemical Engineers", credits: 2, prerequisites: [], semester: 6, category: "general" },
    GENG21X: { code: "GENG21X", title: "Free Elective (UR6)", credits: 2, prerequisites: [], semester: 6, category: "elective" },

    // ── Semester 7 (Senior-1 Fall) ───────────────────────────────
    CHEG324: { code: "CHEG324", title: "Mechanical Unit Operations", credits: 4, prerequisites: ["CHEG223"], semester: 7, category: "core" },
    CHEG325: { code: "CHEG325", title: "Applied Heat Transfer", credits: 2, prerequisites: ["CHEG223"], semester: 7, category: "core" },
    CHEG333: { code: "CHEG333", title: "Inorganic Technology", credits: 4, prerequisites: ["CHEG212", "CHEG252"], semester: 7, category: "core" },
    CHEG343: { code: "CHEG343", title: "Organic Technology", credits: 3, prerequisites: ["CHEG142", "CHEG212"], semester: 7, category: "core" },
    CHEG33X: { code: "CHEG33X", title: "Elective 2 – Water/Desalination/Biochemical Technology", credits: 2, prerequisites: [], semester: 7, category: "elective" },
    GENG351: { code: "GENG351", title: "Selected Current Local Issues (UR7)", credits: 1, prerequisites: [], semester: 7, category: "general" },

    // ── Semester 8 (Senior-1 Spring) ────────────────────────────
    CHEG326: { code: "CHEG326", title: "Mass Transfer Operations", credits: 3, prerequisites: ["CHEG223"], semester: 8, category: "core" },
    CHEG314: { code: "CHEG314", title: "Modeling of Process Systems", credits: 3, prerequisites: ["CHEG213", "MTHG103"], semester: 8, category: "core" },
    CHEG353: { code: "CHEG353", title: "Applied Electrochemistry & Corrosion", credits: 2, prerequisites: ["CHEG131"], semester: 8, category: "core" },
    CHEG315: { code: "CHEG315", title: "Chemical Engineering Software", credits: 2, prerequisites: ["CHEG213"], semester: 8, category: "core" },
    CHEG36X: { code: "CHEG36X", title: "Elective 3 – Nuclear/Safety/Materials Handling", credits: 2, prerequisites: [], semester: 8, category: "elective" },
    CHEG34X: { code: "CHEG34X", title: "Elective 4 – Petrochemicals/Polymers", credits: 3, prerequisites: [], semester: 8, category: "elective" },

    // ── Summer ───────────────────────────────────────────────────
    CHEG281: { code: "CHEG281", title: "Industrial Training – 1", credits: 1, prerequisites: [], semester: 9, category: "training" },

    // ── Semester 9 (Senior-2 Fall) ───────────────────────────────
    CHEG416: { code: "CHEG416", title: "Process Control Engineering", credits: 4, prerequisites: ["CHEG314", "CHEG213"], semester: 10, category: "core" },
    CHEG417: { code: "CHEG417", title: "Chemical Reaction Engineering & Mechanical Vessel Design", credits: 4, prerequisites: ["CHEG252", "CHEG222"], semester: 10, category: "core" },
    CHEG427: { code: "CHEG427", title: "Separation Processes", credits: 3, prerequisites: ["CHEG326"], semester: 10, category: "core" },
    CHEG481: { code: "CHEG481", title: "Graduation Project (1)", credits: 1, prerequisites: [], semester: 10, category: "project" },
    CHEG44X: { code: "CHEG44X", title: "Elective 5 – Petroleum Industry / Well Operations", credits: 2, prerequisites: [], semester: 10, category: "elective" },
    CHEG43X: { code: "CHEG43X", title: "Elective 7 – Polymers / Paints / Rubber", credits: 2, prerequisites: [], semester: 10, category: "elective" },

    // ── Semester 10 (Senior-2 Spring) ───────────────────────────
    CHEG418: { code: "CHEG418", title: "Process & Plant Design", credits: 4, prerequisites: ["CHEG416", "CHEG417"], semester: 11, category: "core" },
    CHEG428: { code: "CHEG428", title: "Chemical Engineering Laboratory", credits: 2, prerequisites: ["CHEG326"], semester: 11, category: "core" },
    CHEG482: { code: "CHEG482", title: "Graduation Project (2)", credits: 3, prerequisites: ["CHEG481"], semester: 11, category: "project" },
    CHEG448: { code: "CHEG448", title: "Natural Gas Engineering", credits: 2, prerequisites: [], semester: 11, category: "core" },
    CHEG45X: { code: "CHEG45X", title: "Elective 6 – Environmental Laws / Ethics", credits: 2, prerequisites: [], semester: 11, category: "elective" },
    CHEG44Y: { code: "CHEG44Y", title: "Elective 8 – Petroleum Refining", credits: 2, prerequisites: [], semester: 11, category: "elective" },
  },
  semesters: [
    { number: 1,  label: "Semester 1",  year: "Freshman",  season: "Fall",   courses: ["MTHG001","PHYG001","EMCG001","INTG005","MTHG002","INTG001","GENG001"] },
    { number: 2,  label: "Semester 2",  year: "Freshman",  season: "Spring", courses: ["MTHG003","PHYG002","EMCG002","CHEG001","ENGG001","GENG002"] },
    { number: 3,  label: "Semester 3",  year: "Sophomore", season: "Fall",   courses: ["MTHG103","MTHG113","CHEG131","CHEG121","CHEG141","EPEG120","GENG111"] },
    { number: 4,  label: "Semester 4",  year: "Sophomore", season: "Spring", courses: ["MTHG102","PHYG106","CHEG101","CHEG111","CHEG142","GENG1XX"] },
    { number: 5,  label: "Semester 5",  year: "Junior",    season: "Fall",   courses: ["CHEG252","CHEG212","CHEG222","CHEG232","CHEG26X","GENG2XX"] },
    { number: 6,  label: "Semester 6",  year: "Junior",    season: "Spring", courses: ["CHEG251","CHEG213","CHEG223","CHEG264","GENG21X"] },
    { number: 7,  label: "Semester 7",  year: "Senior 1",  season: "Fall",   courses: ["CHEG324","CHEG325","CHEG333","CHEG343","CHEG33X","GENG351"] },
    { number: 8,  label: "Semester 8",  year: "Senior 1",  season: "Spring", courses: ["CHEG326","CHEG314","CHEG353","CHEG315","CHEG36X","CHEG34X"] },
    { number: 9,  label: "Summer",      year: "Senior 1",  season: "Summer", courses: ["CHEG281"] },
    { number: 10, label: "Semester 9",  year: "Senior 2",  season: "Fall",   courses: ["CHEG416","CHEG417","CHEG427","CHEG481","CHEG44X","CHEG43X"] },
    { number: 11, label: "Semester 10", year: "Senior 2",  season: "Spring", courses: ["CHEG418","CHEG428","CHEG482","CHEG448","CHEG45X","CHEG44Y"] },
  ],
};
