export interface Course {
  code: string;
  title: string;
  credits: number;
  prerequisites: string[];
  semester: number;
  category: "math" | "physics" | "general" | "core" | "elective" | "project" | "training";
}

export interface Semester {
  number: number;
  label: string;
  year: string;
  season: string;
  courses: string[];
}

export const ALL_COURSES: Record<string, Course> = {
  MTHG001: { code: "MTHG001", title: "Algebra", credits: 2, prerequisites: [], semester: 1, category: "math" },
  PHYG001: { code: "PHYG001", title: "Mechanical Properties of Matter & Thermodynamics", credits: 3, prerequisites: [], semester: 1, category: "physics" },
  EMCG001: { code: "EMCG001", title: "Engineering Mechanics – Statics", credits: 2, prerequisites: [], semester: 1, category: "general" },
  INTG005: { code: "INTG005", title: "Introduction to Computer Science", credits: 3, prerequisites: [], semester: 1, category: "general" },
  MTHG002: { code: "MTHG002", title: "Calculus 1", credits: 3, prerequisites: [], semester: 1, category: "math" },
  INTG001: { code: "INTG001", title: "Technical Drawing", credits: 2, prerequisites: [], semester: 1, category: "general" },
  GENG001: { code: "GENG001", title: "Critical & Creative Thinking", credits: 2, prerequisites: [], semester: 1, category: "general" },

  MTHG003: { code: "MTHG003", title: "Calculus 2", credits: 3, prerequisites: ["MTHG002"], semester: 2, category: "math" },
  PHYG002: { code: "PHYG002", title: "Electricity & Magnetism", credits: 3, prerequisites: [], semester: 2, category: "physics" },
  EMCG002: { code: "EMCG002", title: "Engineering Mechanics – Dynamics", credits: 3, prerequisites: [], semester: 2, category: "general" },
  CHEG001: { code: "CHEG001", title: "Chemistry for Engineers", credits: 2, prerequisites: [], semester: 2, category: "general" },
  ENGG001: { code: "ENGG001", title: "Applied & Modern Manufacturing Engineering", credits: 3, prerequisites: [], semester: 2, category: "general" },
  GENG002: { code: "GENG002", title: "Societal Issues", credits: 2, prerequisites: [], semester: 2, category: "general" },

  EPEG101: { code: "EPEG101", title: "Electrical Circuits (1)", credits: 3, prerequisites: ["PHYG002", "MTHG003"], semester: 3, category: "core" },
  EPEG102: { code: "EPEG102", title: "Principles of Energy Conversion", credits: 2, prerequisites: ["PHYG002", "MTHG003"], semester: 3, category: "core" },
  EPEG103: { code: "EPEG103", title: "Computer Applications in Electrical Power Systems", credits: 3, prerequisites: ["INTG005"], semester: 3, category: "core" },
  INTG118: { code: "INTG118", title: "Electric Materials", credits: 2, prerequisites: ["PHYG002"], semester: 3, category: "general" },
  MTHG104: { code: "MTHG104", title: "Differential Equations", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 3, category: "math" },
  EMCG101: { code: "EMCG101", title: "Dynamics of Rigid Bodies", credits: 3, prerequisites: ["EMCG001"], semester: 3, category: "general" },

  EECG118: { code: "EECG118", title: "Electronics", credits: 3, prerequisites: ["PHYG001"], semester: 4, category: "core" },
  EPEG105: { code: "EPEG105", title: "Electrical Circuits (2)", credits: 3, prerequisites: ["MTHG104", "EPEG101"], semester: 4, category: "core" },
  EPEG106: { code: "EPEG106", title: "Logic Circuits & Microprocessors", credits: 3, prerequisites: ["EPEG103", "EECG118"], semester: 4, category: "core" },
  MTHG102: { code: "MTHG102", title: "Linear Algebra & Multivariable Integrals", credits: 3, prerequisites: ["MTHG001", "MTHG003"], semester: 4, category: "math" },
  EPEG104: { code: "EPEG104", title: "Electromagnetic Fields", credits: 4, prerequisites: ["PHYG002", "MTHG104"], semester: 4, category: "core" },
  GENGxxx: { code: "GENGxxx", title: "Selected Topic 2 (University)", credits: 2, prerequisites: [], semester: 4, category: "elective" },

  EPEG204: { code: "EPEG204", title: "Signals & Systems", credits: 3, prerequisites: ["MTHG104", "EPEG101"], semester: 5, category: "core" },
  MEPG173: { code: "MEPG173", title: "Engineering Thermodynamics", credits: 3, prerequisites: ["PHYG001"], semester: 5, category: "general" },
  MDPG102: { code: "MDPG102", title: "Fundamentals of Mechanical Design", credits: 2, prerequisites: ["INTG001"], semester: 5, category: "general" },
  MTHG110: { code: "MTHG110", title: "Introduction to Numerical Analysis", credits: 2, prerequisites: ["MTHG102"], semester: 5, category: "math" },
  CVEG118: { code: "CVEG118", title: "Civil Engineering", credits: 2, prerequisites: ["EMCG001"], semester: 5, category: "general" },
  EPEG202: { code: "EPEG202", title: "Electrical Machines (1)", credits: 3, prerequisites: ["EPEG105", "EPEG103"], semester: 5, category: "core" },

  CMPG218: { code: "CMPG218", title: "Data Structures", credits: 2, prerequisites: ["INTG005"], semester: 6, category: "general" },
  EPEG203: { code: "EPEG203", title: "Electric & Electronic Measurements", credits: 3, prerequisites: ["EPEG101", "EECG118"], semester: 6, category: "core" },
  EPEG205: { code: "EPEG205", title: "Electrical Machines (2)", credits: 3, prerequisites: ["EPEG202"], semester: 6, category: "core" },
  MTHG113: { code: "MTHG113", title: "Probability & Statistics", credits: 2, prerequisites: ["MTHG003"], semester: 6, category: "math" },
  EPEG207: { code: "EPEG207", title: "Automatic Control Systems", credits: 3, prerequisites: ["EPEG204"], semester: 6, category: "core" },
  EPEG201: { code: "EPEG201", title: "Power Systems (1)", credits: 3, prerequisites: ["EPEG105", "EPEG202"], semester: 6, category: "core" },

  EPEG281: { code: "EPEG281", title: "Industrial Training – 1", credits: 1, prerequisites: [], semester: 7, category: "training" },

  EPEG301: { code: "EPEG301", title: "Power Systems (2)", credits: 3, prerequisites: ["EPEG201", "MTHG104"], semester: 8, category: "core" },
  EPEG303: { code: "EPEG303", title: "Electrical Machines (3)", credits: 3, prerequisites: ["EPEG205"], semester: 8, category: "core" },
  EPEG302: { code: "EPEG302", title: "Power Electronics (1)", credits: 3, prerequisites: ["EECG118", "EPEG105"], semester: 8, category: "core" },
  EPEG304: { code: "EPEG304", title: "Switchgear & Protection Systems", credits: 3, prerequisites: ["EPEG201", "EPEG203"], semester: 8, category: "core" },
  EPEG206: { code: "EPEG206", title: "Electrical Power Generation", credits: 3, prerequisites: ["EPEG101", "MEPG173"], semester: 8, category: "core" },
  GENG351: { code: "GENG351", title: "Selected Current Local Issues", credits: 1, prerequisites: [], semester: 8, category: "general" },

  EPEG306: { code: "EPEG306", title: "Power Electronics (2)", credits: 3, prerequisites: ["EPEG302"], semester: 9, category: "core" },
  EPEG305: { code: "EPEG305", title: "High Voltage Engineering", credits: 3, prerequisites: ["EPEG203"], semester: 9, category: "core" },
  GENG1XX: { code: "GENG1XX", title: "Restricted Elective – 1", credits: 2, prerequisites: [], semester: 9, category: "elective" },
  EPEG307: { code: "EPEG307", title: "Digital Control Systems", credits: 3, prerequisites: ["EPEG207"], semester: 9, category: "core" },
  EECG318: { code: "EECG318", title: "Electrical Communications Systems", credits: 2, prerequisites: ["MTHG102", "EPEG204"], semester: 9, category: "core" },
  "GENG22X": { code: "GENG22X", title: "Restricted Elective – 2", credits: 2, prerequisites: [], semester: 9, category: "elective" },

  EPEG401: { code: "EPEG401", title: "Electrical Energy Utilization & Management", credits: 3, prerequisites: ["EPEG205", "EPEG306"], semester: 10, category: "core" },
  EPEG411: { code: "EPEG411", title: "Elective: Power System Planning", credits: 3, prerequisites: ["EPEG301"], semester: 10, category: "elective" },
  EPEG415: { code: "EPEG415", title: "Elective: Renewable Energy Systems", credits: 3, prerequisites: ["EPEG301"], semester: 10, category: "elective" },
  EPEG426: { code: "EPEG426", title: "Elective: Electric Drive Systems", credits: 3, prerequisites: ["EPEG303"], semester: 10, category: "elective" },
  "GENG21X": { code: "GENG21X", title: "Free Elective", credits: 2, prerequisites: [], semester: 10, category: "elective" },
  EPEG481: { code: "EPEG481", title: "Graduation Project (1)", credits: 1, prerequisites: [], semester: 10, category: "project" },

  EPEG402: { code: "EPEG402", title: "Electrical Installations", credits: 2, prerequisites: ["EPEG304", "EPEG205"], semester: 11, category: "core" },
  EPEG435: { code: "EPEG435", title: "Elective: Power Electronics in Renewable Energy", credits: 3, prerequisites: ["EPEG306"], semester: 11, category: "elective" },
  EPEG436: { code: "EPEG436", title: "Elective: Power Electronics in Power Systems", credits: 3, prerequisites: ["EPEG306"], semester: 11, category: "elective" },
  EPEG433: { code: "EPEG433", title: "Elective: Advanced Protection Systems", credits: 3, prerequisites: ["EPEG304"], semester: 11, category: "elective" },
  EPEG482: { code: "EPEG482", title: "Graduation Project (2)", credits: 3, prerequisites: ["EPEG481"], semester: 11, category: "project" },
};

export const SEMESTERS: Semester[] = [
  { number: 1, label: "Semester 1", year: "Freshman", season: "Fall", courses: ["MTHG001","PHYG001","EMCG001","INTG005","MTHG002","INTG001","GENG001"] },
  { number: 2, label: "Semester 2", year: "Freshman", season: "Spring", courses: ["MTHG003","PHYG002","EMCG002","CHEG001","ENGG001","GENG002"] },
  { number: 3, label: "Semester 3", year: "Sophomore", season: "Fall", courses: ["EPEG101","EPEG102","EPEG103","INTG118","MTHG104","EMCG101"] },
  { number: 4, label: "Semester 4", year: "Sophomore", season: "Spring", courses: ["EECG118","EPEG105","EPEG106","MTHG102","EPEG104","GENGxxx"] },
  { number: 5, label: "Semester 5", year: "Junior", season: "Fall", courses: ["EPEG204","MEPG173","MDPG102","MTHG110","CVEG118","EPEG202"] },
  { number: 6, label: "Semester 6", year: "Junior", season: "Spring", courses: ["CMPG218","EPEG203","EPEG205","MTHG113","EPEG207","EPEG201"] },
  { number: 7, label: "Summer", year: "Junior", season: "Summer", courses: ["EPEG281"] },
  { number: 8, label: "Semester 7", year: "Senior 1", season: "Fall", courses: ["EPEG301","EPEG303","EPEG302","EPEG304","EPEG206","GENG351"] },
  { number: 9, label: "Semester 8", year: "Senior 1", season: "Spring", courses: ["EPEG306","EPEG305","GENG1XX","EPEG307","EECG318","GENG22X"] },
  { number: 10, label: "Semester 9", year: "Senior 2", season: "Fall", courses: ["EPEG401","EPEG411","EPEG415","EPEG426","GENG21X","EPEG481"] },
  { number: 11, label: "Semester 10", year: "Senior 2", season: "Spring", courses: ["EPEG402","EPEG435","EPEG436","EPEG433","EPEG482"] },
];

export function getUnlocks(courseCode: string): string[] {
  return Object.values(ALL_COURSES)
    .filter(c => c.prerequisites.includes(courseCode))
    .map(c => c.code);
}

export const CATEGORY_COLORS: Record<Course["category"], { bg: string; border: string; text: string; badge: string }> = {
  math:     { bg: "bg-violet-50",  border: "border-violet-300", text: "text-violet-800",  badge: "bg-violet-100 text-violet-700" },
  physics:  { bg: "bg-sky-50",     border: "border-sky-300",    text: "text-sky-800",     badge: "bg-sky-100 text-sky-700" },
  general:  { bg: "bg-slate-50",   border: "border-slate-300",  text: "text-slate-700",   badge: "bg-slate-100 text-slate-600" },
  core:     { bg: "bg-blue-50",    border: "border-blue-300",   text: "text-blue-900",    badge: "bg-blue-100 text-blue-700" },
  elective: { bg: "bg-amber-50",   border: "border-amber-300",  text: "text-amber-800",   badge: "bg-amber-100 text-amber-700" },
  project:  { bg: "bg-emerald-50", border: "border-emerald-300",text: "text-emerald-800", badge: "bg-emerald-100 text-emerald-700" },
  training: { bg: "bg-orange-50",  border: "border-orange-300", text: "text-orange-800",  badge: "bg-orange-100 text-orange-700" },
};

export const CATEGORY_LABELS: Record<Course["category"], string> = {
  math: "Mathematics",
  physics: "Physics",
  general: "General",
  core: "Core EPE",
  elective: "Elective",
  project: "Project",
  training: "Training",
};
