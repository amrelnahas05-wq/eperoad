import type { Department } from "./types";

export const CMP_DEPARTMENT: Department = {
  id: "cmp",
  name: "Computer Engineering",
  shortName: "CMP",
  year: "2023",
  color: "green",
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
    CMPG101: { code: "CMPG101", title: "Logic Design", credits: 3, prerequisites: ["INTG005"], semester: 3, category: "core" },
    CMPG102: { code: "CMPG102", title: "Programming Techniques", credits: 3, prerequisites: ["INTG005"], semester: 3, category: "core" },
    EECG125: { code: "EECG125", title: "Electrical Circuits", credits: 3, prerequisites: ["PHYG002"], semester: 3, category: "core" },
    PHYG104: { code: "PHYG104", title: "Introduction to Modern Physics & Electromagnetic Fields", credits: 3, prerequisites: ["PHYG002", "MTHG003"], semester: 3, category: "physics" },
    MTHG101: { code: "MTHG101", title: "Introduction to Discrete Mathematics", credits: 2, prerequisites: [], semester: 3, category: "math" },
    GENG111: { code: "GENG111", title: "Selected Topics 1 (UR3)", credits: 2, prerequisites: [], semester: 3, category: "elective" },

    // ── Semester 4 (Sophomore Spring) ───────────────────────────
    CMPG103: { code: "CMPG103", title: "Microprocessor Systems", credits: 3, prerequisites: ["CMPG101", "CMPG102"], semester: 4, category: "core" },
    CMPG104: { code: "CMPG104", title: "Data Structures & Algorithms", credits: 3, prerequisites: ["CMPG102"], semester: 4, category: "core" },
    EECG126: { code: "EECG126", title: "Electronic Circuits", credits: 3, prerequisites: ["EECG125"], semester: 4, category: "core" },
    MTHG102: { code: "MTHG102", title: "Linear Algebra & Multivariable Integrals", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 4, category: "math" },
    PHYGXXX: { code: "PHYGXXX", title: "Physics Elective – Electrodynamics or Modern Physics", credits: 3, prerequisites: ["PHYG002"], semester: 4, category: "elective" },
    GENG1XX: { code: "GENG1XX", title: "Restricted Elective – 1 (UR4)", credits: 2, prerequisites: [], semester: 4, category: "elective" },

    // ── Semester 5 (Junior Fall) ─────────────────────────────────
    CMPG201: { code: "CMPG201", title: "Computer Architecture", credits: 3, prerequisites: ["CMPG103"], semester: 5, category: "core" },
    CMPG202: { code: "CMPG202", title: "Database Management Systems", credits: 3, prerequisites: ["CMPG104"], semester: 5, category: "core" },
    EECG226: { code: "EECG226", title: "Digital Electronic Circuits", credits: 3, prerequisites: ["CMPG101", "EECG126"], semester: 5, category: "core" },
    EECG225: { code: "EECG225", title: "Signals & Systems", credits: 2, prerequisites: ["MTHG102"], semester: 5, category: "core" },
    MTHG204: { code: "MTHG204", title: "Advanced Probability & Statistics", credits: 3, prerequisites: ["MTHG002"], semester: 5, category: "math" },
    GENG22X: { code: "GENG22X", title: "Restricted Elective – 2 (UR5)", credits: 2, prerequisites: [], semester: 5, category: "elective" },

    // ── Semester 6 (Junior Spring) ───────────────────────────────
    CMPG203: { code: "CMPG203", title: "Operating Systems", credits: 2, prerequisites: ["CMPG201"], semester: 6, category: "core" },
    MTHG110: { code: "MTHG110", title: "Introduction to Numerical Analysis", credits: 2, prerequisites: ["MTHG102"], semester: 6, category: "math" },
    EECG227: { code: "EECG227", title: "Communications Engineering", credits: 3, prerequisites: ["EECG225"], semester: 6, category: "core" },
    MECG251: { code: "MECG251", title: "Mechanical Engineering", credits: 2, prerequisites: [], semester: 6, category: "general" },
    CMPG204: { code: "CMPG204", title: "Design & Analysis of Algorithms", credits: 3, prerequisites: ["CMPG104"], semester: 6, category: "core" },
    EPEG251: { code: "EPEG251", title: "Electrical Power & Machines", credits: 2, prerequisites: ["EECG125"], semester: 6, category: "general" },
    GENG21X: { code: "GENG21X", title: "Free Elective (UR6)", credits: 2, prerequisites: [], semester: 6, category: "elective" },

    // ── Semester 7 (Summer) ──────────────────────────────────────
    CMPG281: { code: "CMPG281", title: "Industrial Training – 1", credits: 1, prerequisites: [], semester: 7, category: "training" },

    // ── Semester 8 (Senior-1 Fall) ───────────────────────────────
    CMPG301: { code: "CMPG301", title: "Computer Networks", credits: 3, prerequisites: ["CMPG201", "EECG227"], semester: 8, category: "core" },
    CMPG302: { code: "CMPG302", title: "Embedded Systems", credits: 3, prerequisites: ["CMPG103", "CMPG203"], semester: 8, category: "core" },
    CMPG307: { code: "CMPG307", title: "Computer Aided Digital & Logic Design", credits: 3, prerequisites: ["CMPG101", "EECG226"], semester: 8, category: "core" },
    EECG325: { code: "EECG325", title: "Digital Communications", credits: 3, prerequisites: ["EECG227"], semester: 8, category: "core" },
    GENG352: { code: "GENG352", title: "Selected Current Local Issues (UR7)", credits: 1, prerequisites: [], semester: 8, category: "general" },

    // ── Semester 9 (Senior-1 Spring) ────────────────────────────
    CMPG303: { code: "CMPG303", title: "Machine Intelligence", credits: 3, prerequisites: ["MTHG204", "CMPG202"], semester: 9, category: "core" },
    CMPG304: { code: "CMPG304", title: "Software Engineering", credits: 3, prerequisites: ["CMPG203", "CMPG204"], semester: 9, category: "core" },
    CMPG305: { code: "CMPG305", title: "Security of Computer Systems & Networks", credits: 3, prerequisites: ["CMPG301"], semester: 9, category: "core" },
    CMPG306: { code: "CMPG306", title: "Mobile & Web Application Development", credits: 3, prerequisites: ["CMPG203", "CMPG104"], semester: 9, category: "core" },
    CMPGE01: { code: "CMPGE01", title: "Elective 1", credits: 2, prerequisites: [], semester: 9, category: "elective" },
    EECG327: { code: "EECG327", title: "Control Engineering", credits: 2, prerequisites: ["EECG225"], semester: 9, category: "general" },

    // ── Semester 10 (Senior-2 Fall) ──────────────────────────────
    CMPG401: { code: "CMPG401", title: "Machine Learning", credits: 3, prerequisites: ["MTHG204", "CMPG303"], semester: 10, category: "core" },
    CMPG308: { code: "CMPG308", title: "Law, Tenders & Professional Consultation", credits: 3, prerequisites: [], semester: 10, category: "general" },
    CMPG404: { code: "CMPG404", title: "Advanced Database Systems", credits: 3, prerequisites: ["CMPG202"], semester: 10, category: "core" },
    CMPGE02: { code: "CMPGE02", title: "Elective 2", credits: 2, prerequisites: [], semester: 10, category: "elective" },
    CMPGE03: { code: "CMPGE03", title: "Elective 3", credits: 2, prerequisites: [], semester: 10, category: "elective" },
    CMPGE04: { code: "CMPGE04", title: "Elective 4 (Track)", credits: 2, prerequisites: [], semester: 10, category: "elective" },
    CMPG481: { code: "CMPG481", title: "Graduation Project (1)", credits: 1, prerequisites: [], semester: 10, category: "project" },

    // ── Semester 11 (Senior-2 Spring) ───────────────────────────
    CMPG406: { code: "CMPG406", title: "Parallel & Distributed Computing", credits: 3, prerequisites: ["CMPG201"], semester: 11, category: "core" },
    CMPG407: { code: "CMPG407", title: "Languages & Compilers", credits: 2, prerequisites: ["CMPG104"], semester: 11, category: "core" },
    CMPGE05: { code: "CMPGE05", title: "Elective 5 (Track)", credits: 2, prerequisites: [], semester: 11, category: "elective" },
    CMPGE06: { code: "CMPGE06", title: "Elective 6 (Track)", credits: 2, prerequisites: [], semester: 11, category: "elective" },
    CMPGE07: { code: "CMPGE07", title: "Elective 7 (Track)", credits: 2, prerequisites: [], semester: 11, category: "elective" },
    CMPGE08: { code: "CMPGE08", title: "Elective 8 (Advanced Topic)", credits: 2, prerequisites: [], semester: 11, category: "elective" },
    CMPG482: { code: "CMPG482", title: "Graduation Project (2)", credits: 2, prerequisites: ["CMPG481"], semester: 11, category: "project" },
  },
  semesters: [
    { number: 1,  label: "Semester 1",  year: "Freshman",  season: "Fall",   courses: ["MTHG001","PHYG001","EMCG001","INTG005","MTHG002","INTG001","GENG001"] },
    { number: 2,  label: "Semester 2",  year: "Freshman",  season: "Spring", courses: ["MTHG003","PHYG002","EMCG002","CHEG001","ENGG001","GENG002"] },
    { number: 3,  label: "Semester 3",  year: "Sophomore", season: "Fall",   courses: ["CMPG101","CMPG102","EECG125","PHYG104","MTHG101","GENG111"] },
    { number: 4,  label: "Semester 4",  year: "Sophomore", season: "Spring", courses: ["CMPG103","CMPG104","EECG126","MTHG102","PHYGXXX","GENG1XX"] },
    { number: 5,  label: "Semester 5",  year: "Junior",    season: "Fall",   courses: ["CMPG201","CMPG202","EECG226","EECG225","MTHG204","GENG22X"] },
    { number: 6,  label: "Semester 6",  year: "Junior",    season: "Spring", courses: ["CMPG203","MTHG110","EECG227","MECG251","CMPG204","EPEG251","GENG21X"] },
    { number: 7,  label: "Summer",      year: "Junior",    season: "Summer", courses: ["CMPG281"] },
    { number: 8,  label: "Semester 7",  year: "Senior 1",  season: "Fall",   courses: ["CMPG301","CMPG302","CMPG307","EECG325","GENG352"] },
    { number: 9,  label: "Semester 8",  year: "Senior 1",  season: "Spring", courses: ["CMPG303","CMPG304","CMPG305","CMPG306","CMPGE01","EECG327"] },
    { number: 10, label: "Semester 9",  year: "Senior 2",  season: "Fall",   courses: ["CMPG401","CMPG308","CMPG404","CMPGE02","CMPGE03","CMPGE04","CMPG481"] },
    { number: 11, label: "Semester 10", year: "Senior 2",  season: "Spring", courses: ["CMPG406","CMPG407","CMPGE05","CMPGE06","CMPGE07","CMPGE08","CMPG482"] },
  ],
};
