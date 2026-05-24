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

export interface Department {
  id: string;
  name: string;
  shortName: string;
  year: string;
  color: string;
  courses: Record<string, Course>;
  semesters: Semester[];
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
  core: "Core",
  elective: "Elective",
  project: "Project",
  training: "Training",
};

export function getUnlocksForDept(courseCode: string, courses: Record<string, Course>): string[] {
  return Object.values(courses)
    .filter(c => c.prerequisites.includes(courseCode))
    .map(c => c.code);
}
