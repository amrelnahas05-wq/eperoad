import type { Department } from "./types";

export const AER_DEPARTMENT: Department = {
  id: "aer",
  name: "Aerospace Engineering",
  shortName: "AER",
  year: "2023",
  color: "purple",
  courses: {
    // ── Semester 1 (Freshman Fall) ──────────────────────────────
    MTHG001: { code: "MTHG001", title: "Algebra", credits: 2, prerequisites: [], semester: 1, category: "math" },
    PHYG001: { code: "PHYG001", title: "Mechanical Properties of Matter & Thermodynamics", credits: 3, prerequisites: [], semester: 1, category: "physics" },
    EMCG001: { code: "EMCG001", title: "Engineering Mechanics – Statics", credits: 2, prerequisites: [], semester: 1, category: "general" },
    INTG005: { code: "INTG005", title: "Introduction to Computer Science", credits: 3, prerequisites: [], semester: 1, category: "general" },
    MTHG002: { code: "MTHG002", title: "Calculus 1", credits: 3, prerequisites: [], semester: 1, category: "math" },
    INTG001: { code: "INTG001", title: "Technical Drawing", credits: 2, prerequisites: [], semester: 1, category: "general" },
    GENG001: { code: "GENG001", title: "Critical & Creative Thinking", credits: 2, prerequisites: [], semester: 1, category: "general" },

    // ── Semester 2 (Freshman Spring) ────────────────────────────
    MTHG003: { code: "MTHG003", title: "Calculus 2", credits: 3, prerequisites: ["MTHG002"], semester: 2, category: "math" },
    PHYG002: { code: "PHYG002", title: "Electricity and Magnetism", credits: 3, prerequisites: [], semester: 2, category: "physics" },
    EMCG002: { code: "EMCG002", title: "Engineering Mechanics – Dynamics", credits: 3, prerequisites: [], semester: 2, category: "general" },
    CHEG001: { code: "CHEG001", title: "Chemistry for Engineers", credits: 2, prerequisites: [], semester: 2, category: "general" },
    ENGG001: { code: "ENGG001", title: "Applied & Modern Manufacturing Engineering", credits: 3, prerequisites: [], semester: 2, category: "general" },
    GENG002: { code: "GENG002", title: "Societal Issues", credits: 2, prerequisites: [], semester: 2, category: "general" },

    // ── Semester 3 (Sophomore Fall) ─────────────────────────────
    AERG111: { code: "AERG111", title: "Introduction to Aerospace Engineering", credits: 2, prerequisites: [], semester: 3, category: "core" },
    AERG161: { code: "AERG161", title: "Computer Applications in Aerospace Engineering", credits: 2, prerequisites: ["INTG005"], semester: 3, category: "core" },
    XXXG1XX: { code: "XXXG1XX", title: "Elective – 1", credits: 2, prerequisites: [], semester: 3, category: "elective" },
    INTG116: { code: "INTG116", title: "Computer Aided Machine Drawing", credits: 2, prerequisites: ["INTG001"], semester: 3, category: "general" },
    MTHG102: { code: "MTHG102", title: "Linear Algebra & Multivariable Integration", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 3, category: "math" },
    PHYG103: { code: "PHYG103", title: "Applied Physics", credits: 3, prerequisites: ["PHYG001"], semester: 3, category: "physics" },
    GENG111: { code: "GENG111", title: "Selected Topics 1 (UR3)", credits: 2, prerequisites: [], semester: 3, category: "elective" },

    // ── Semester 4 (Sophomore Spring) ───────────────────────────
    AERG121: { code: "AERG121", title: "Analysis of Structures", credits: 3, prerequisites: ["EMCG001", "MTHG104"], semester: 4, category: "core" },
    AERG131: { code: "AERG131", title: "Thermodynamics", credits: 3, prerequisites: ["PHYG001"], semester: 4, category: "core" },
    MDPG102: { code: "MDPG102", title: "Fundamentals of Mechanical Design", credits: 2, prerequisites: ["INTG001"], semester: 4, category: "general" },
    EMCG101: { code: "EMCG101", title: "Dynamics of Rigid Bodies", credits: 3, prerequisites: ["EMCG001"], semester: 4, category: "general" },
    MTHG104: { code: "MTHG104", title: "Differential Equations", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 4, category: "math" },
    GENG1XX: { code: "GENG1XX", title: "Restricted Elective – 1 (UR4)", credits: 2, prerequisites: [], semester: 4, category: "elective" },

    // ── Semester 5 (Junior Fall) ─────────────────────────────────
    AERG211: { code: "AERG211", title: "Fluid Mechanics", credits: 3, prerequisites: ["AERG131", "MTHG104"], semester: 5, category: "core" },
    AERG221: { code: "AERG221", title: "Mechanics of Structures 1", credits: 3, prerequisites: ["AERG121"], semester: 5, category: "core" },
    AERG251: { code: "AERG251", title: "Orbital & Attitude Dynamics", credits: 3, prerequisites: ["EMCG101", "MTHG104"], semester: 5, category: "core" },
    AERG271: { code: "AERG271", title: "Measurement & Data Processing", credits: 2, prerequisites: ["PHYG103"], semester: 5, category: "core" },
    EPEG130: { code: "EPEG130", title: "Introduction to Electrical Power & Machines Engineering", credits: 3, prerequisites: ["PHYG002"], semester: 5, category: "general" },
    GENG241: { code: "GENG241", title: "Selected Topics 2", credits: 2, prerequisites: [], semester: 5, category: "elective" },
    MTHG113: { code: "MTHG113", title: "Probability & Statistics", credits: 2, prerequisites: ["MTHG003"], semester: 5, category: "math" },

    // ── Semester 6 (Junior Spring) ───────────────────────────────
    AERG212: { code: "AERG212", title: "Gas Dynamics", credits: 2, prerequisites: ["AERG211"], semester: 6, category: "core" },
    AERG222: { code: "AERG222", title: "Mechanics of Structures 2", credits: 2, prerequisites: ["AERG221"], semester: 6, category: "core" },
    AERG232: { code: "AERG232", title: "Aircraft Propulsion Systems", credits: 3, prerequisites: ["AERG131", "AERG211"], semester: 6, category: "core" },
    AERG242: { code: "AERG242", title: "Systems Dynamics & Control", credits: 3, prerequisites: ["MTHG104"], semester: 6, category: "core" },
    MTHG203: { code: "MTHG203", title: "Complex Functions", credits: 2, prerequisites: ["MTHG104"], semester: 6, category: "math" },
    GENG232: { code: "GENG232", title: "Global Warming & Climate Change", credits: 2, prerequisites: [], semester: 6, category: "general" },

    // ── Semester 7 (Summer) ──────────────────────────────────────
    AERG281: { code: "AERG281", title: "Industrial Training – 1", credits: 1, prerequisites: [], semester: 7, category: "training" },

    // ── Semester 8 (Senior-1 Fall) ───────────────────────────────
    AERG311: { code: "AERG311", title: "Incompressible Aerodynamics", credits: 3, prerequisites: ["AERG211"], semester: 8, category: "core" },
    AERG321: { code: "AERG321", title: "Analysis of Plates and Shells", credits: 2, prerequisites: ["AERG222"], semester: 8, category: "core" },
    AERG331: { code: "AERG331", title: "Combustion & Heat Transfer", credits: 3, prerequisites: ["AERG212"], semester: 8, category: "core" },
    AERG341: { code: "AERG341", title: "Control Systems Analysis & Design", credits: 3, prerequisites: ["AERG242"], semester: 8, category: "core" },
    EPMG316: { code: "EPMG316", title: "Electronics", credits: 3, prerequisites: ["PHYG002"], semester: 8, category: "general" },
    GENG351: { code: "GENG351", title: "Selected Current Local Issues (UR7)", credits: 1, prerequisites: [], semester: 8, category: "general" },

    // ── Semester 9 (Senior-1 Spring) ────────────────────────────
    AERG312: { code: "AERG312", title: "Compressible Aerodynamics", credits: 3, prerequisites: ["AERG212", "AERG311"], semester: 9, category: "core" },
    AERG322: { code: "AERG322", title: "Analysis of Flying Vehicles Structures", credits: 3, prerequisites: ["AERG321"], semester: 9, category: "core" },
    AERG342: { code: "AERG342", title: "Flight Mechanics", credits: 3, prerequisites: ["AERG341"], semester: 9, category: "core" },
    AERG392: { code: "AERG392", title: "Aircraft Design & Manufacturing", credits: 3, prerequisites: ["AERG311", "AERG321", "AERG331"], semester: 9, category: "core" },
    AERG431: { code: "AERG431", title: "Design of Aircraft Propulsion Systems", credits: 3, prerequisites: ["AERG232", "AERG331"], semester: 9, category: "core" },

    // ── Semester 10 (Senior-2 Fall) ──────────────────────────────
    AERG411: { code: "AERG411", title: "Computational Aerodynamics", credits: 2, prerequisites: ["AERG311"], semester: 10, category: "core" },
    AERG441: { code: "AERG441", title: "Digital Control Applications", credits: 3, prerequisites: ["AERG341"], semester: 10, category: "core" },
    AERG332: { code: "AERG332", title: "Rocket Propulsion Engines", credits: 2, prerequisites: ["AERG232"], semester: 10, category: "core" },
    AERG4E3: { code: "AERG4E3", title: "Elective – 3", credits: 3, prerequisites: [], semester: 10, category: "elective" },
    AERG4E4: { code: "AERG4E4", title: "Elective – 4", credits: 3, prerequisites: [], semester: 10, category: "elective" },
    AERG481: { code: "AERG481", title: "Graduation Project (1)", credits: 2, prerequisites: [], semester: 10, category: "project" },

    // ── Semester 11 (Senior-2 Spring) ───────────────────────────
    AERG422: { code: "AERG422", title: "Design of Aircraft Structures", credits: 2, prerequisites: ["AERG322"], semester: 11, category: "core" },
    AERG442: { code: "AERG442", title: "Design of Control Systems for Aerospace Vehicles", credits: 2, prerequisites: ["AERG342"], semester: 11, category: "core" },
    AERG4E5: { code: "AERG4E5", title: "Elective – 5", credits: 3, prerequisites: [], semester: 11, category: "elective" },
    AERG4E6: { code: "AERG4E6", title: "Elective – 6", credits: 3, prerequisites: [], semester: 11, category: "elective" },
    AERG4E7: { code: "AERG4E7", title: "Elective – 7", credits: 3, prerequisites: [], semester: 11, category: "elective" },
    AERG482: { code: "AERG482", title: "Graduation Project (2)", credits: 3, prerequisites: ["AERG481"], semester: 11, category: "project" },
  },
  semesters: [
    { number: 1,  label: "Semester 1",  year: "Freshman",  season: "Fall",   courses: ["MTHG001","PHYG001","EMCG001","INTG005","MTHG002","INTG001","GENG001"] },
    { number: 2,  label: "Semester 2",  year: "Freshman",  season: "Spring", courses: ["MTHG003","PHYG002","EMCG002","CHEG001","ENGG001","GENG002"] },
    { number: 3,  label: "Semester 3",  year: "Sophomore", season: "Fall",   courses: ["AERG111","AERG161","XXXG1XX","INTG116","MTHG102","PHYG103","GENG111"] },
    { number: 4,  label: "Semester 4",  year: "Sophomore", season: "Spring", courses: ["AERG121","AERG131","MDPG102","EMCG101","MTHG104","GENG1XX"] },
    { number: 5,  label: "Semester 5",  year: "Junior",    season: "Fall",   courses: ["AERG211","AERG221","AERG251","AERG271","EPEG130","GENG241","MTHG113"] },
    { number: 6,  label: "Semester 6",  year: "Junior",    season: "Spring", courses: ["AERG212","AERG222","AERG232","AERG242","MTHG203","GENG232"] },
    { number: 7,  label: "Summer",      year: "Junior",    season: "Summer", courses: ["AERG281"] },
    { number: 8,  label: "Semester 7",  year: "Senior 1",  season: "Fall",   courses: ["AERG311","AERG321","AERG331","AERG341","EPMG316","GENG351"] },
    { number: 9,  label: "Semester 8",  year: "Senior 1",  season: "Spring", courses: ["AERG312","AERG322","AERG342","AERG392","AERG431"] },
    { number: 10, label: "Semester 9",  year: "Senior 2",  season: "Fall",   courses: ["AERG411","AERG441","AERG332","AERG4E3","AERG4E4","AERG481"] },
    { number: 11, label: "Semester 10", year: "Senior 2",  season: "Spring", courses: ["AERG422","AERG442","AERG4E5","AERG4E6","AERG4E7","AERG482"] },
  ],
};
