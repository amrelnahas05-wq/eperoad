import { useState, useCallback } from "react";
import { ALL_COURSES, SEMESTERS, getUnlocks, CATEGORY_COLORS, CATEGORY_LABELS, type Course } from "./data/courses";

function CategoryBadge({ category }: { category: Course["category"] }) {
  const c = CATEGORY_COLORS[category];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide ${c.badge}`}>
      {CATEGORY_LABELS[category]}
    </span>
  );
}

function CourseCard({
  code,
  selected,
  highlighted,
  dimmed,
  onClick,
}: {
  code: string;
  selected: boolean;
  highlighted: "prereq" | "unlocks" | false;
  dimmed: boolean;
  onClick: () => void;
}) {
  const course = ALL_COURSES[code];
  if (!course) return null;
  const c = CATEGORY_COLORS[course.category];

  let ring = "";
  let glow = "";
  if (selected) {
    ring = "ring-2 ring-blue-500 ring-offset-1";
    glow = "shadow-lg shadow-blue-200";
  } else if (highlighted === "prereq") {
    ring = "ring-2 ring-rose-400 ring-offset-1";
    glow = "shadow-md shadow-rose-100";
  } else if (highlighted === "unlocks") {
    ring = "ring-2 ring-emerald-400 ring-offset-1";
    glow = "shadow-md shadow-emerald-100";
  }

  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left rounded-xl border px-3 py-2.5 transition-all duration-150 cursor-pointer active:scale-95
        ${c.bg} ${c.border} ${ring} ${glow}
        ${dimmed ? "opacity-25" : ""}
        ${selected ? "scale-[1.02]" : ""}
      `}
    >
      <div className="flex items-start justify-between gap-1">
        <span className={`text-[11px] font-bold font-mono tracking-wide ${c.text}`}>{code}</span>
        <span className={`text-[10px] font-medium shrink-0 ${c.text} opacity-60`}>{course.credits} CH</span>
      </div>
      <div className={`mt-0.5 text-[11px] leading-tight font-medium ${c.text} opacity-90`}>
        {course.title}
      </div>
      <div className="mt-1.5">
        <CategoryBadge category={course.category} />
      </div>
    </button>
  );
}

function SemesterSection({
  semester,
  selectedCode,
  prereqOf,
  unlockedBy,
  onSelect,
}: {
  semester: (typeof SEMESTERS)[0];
  selectedCode: string | null;
  prereqOf: Set<string>;
  unlockedBy: Set<string>;
  onSelect: (code: string) => void;
}) {
  const [open, setOpen] = useState(true);

  const yearColors: Record<string, { grad: string; dot: string }> = {
    Freshman:  { grad: "from-violet-600 to-violet-500", dot: "bg-violet-500" },
    Sophomore: { grad: "from-sky-600 to-sky-500",       dot: "bg-sky-500" },
    Junior:    { grad: "from-teal-600 to-teal-500",     dot: "bg-teal-500" },
    "Senior 1":{ grad: "from-orange-600 to-orange-500", dot: "bg-orange-500" },
    "Senior 2":{ grad: "from-rose-600 to-rose-500",     dot: "bg-rose-500" },
  };
  const { grad } = yearColors[semester.year] ?? { grad: "from-slate-600 to-slate-500", dot: "bg-slate-500" };
  const anySelected = selectedCode !== null;

  const hasHighlight = semester.courses.some(c => prereqOf.has(c) || unlockedBy.has(c));

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(p => !p)}
        className={`w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${grad} rounded-2xl mb-0 transition-all active:scale-[0.99] ${open ? "rounded-b-none mb-0" : "rounded-2xl mb-0"}`}
      >
        <div className="text-left flex-1 min-w-0">
          <div className="text-white/70 text-[10px] font-bold uppercase tracking-widest">{semester.year}</div>
          <div className="text-white text-sm font-bold leading-tight">{semester.label}</div>
          <div className="text-white/60 text-[10px]">{semester.season} · {semester.courses.length} courses</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {hasHighlight && !open && (
            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
          )}
          <span className={`text-white/80 text-sm transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}>▼</span>
        </div>
      </button>

      {open && (
      <div className="flex flex-col divide-y divide-slate-100 bg-white/70 rounded-b-2xl overflow-hidden border border-t-0 border-slate-200 mb-0">
        {semester.courses.map((code) => {
          const isSelected = selectedCode === code;
          const isPrereq = prereqOf.has(code);
          const isUnlocks = unlockedBy.has(code);
          const isDimmed = anySelected && !isSelected && !isPrereq && !isUnlocks;
          const course = ALL_COURSES[code];
          if (!course) return null;
          const c = CATEGORY_COLORS[course.category];

          let leftBar = "bg-slate-200";
          if (isSelected) leftBar = "bg-blue-500";
          else if (isPrereq) leftBar = "bg-rose-400";
          else if (isUnlocks) leftBar = "bg-emerald-400";

          return (
            <button
              key={code}
              onClick={() => onSelect(code)}
              className={`
                flex items-center gap-3 w-full text-left px-3 py-3 transition-all duration-150 active:scale-[0.99]
                ${isSelected ? "bg-blue-50" : isPrereq ? "bg-rose-50" : isUnlocks ? "bg-emerald-50" : "bg-transparent"}
                ${isDimmed ? "opacity-30" : ""}
              `}
            >
              <div className={`w-1 self-stretch rounded-full shrink-0 ${leftBar}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold font-mono ${c.text}`}>{code}</span>
                  <CategoryBadge category={course.category} />
                </div>
                <div className="text-[12px] text-slate-700 font-medium leading-snug mt-0.5 truncate">
                  {course.title}
                </div>
              </div>
              <span className="text-[11px] text-slate-400 shrink-0">{course.credits} CH</span>
            </button>
          );
        })}
      </div>
      )}
    </div>
  );
}

function BottomSheet({
  code,
  onClose,
}: {
  code: string;
  onClose: () => void;
}) {
  const course = ALL_COURSES[code];
  if (!course) return null;
  const unlocks = getUnlocks(code);
  const c = CATEGORY_COLORS[course.category];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl border-t ${c.border} ${c.bg} shadow-2xl`}>
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-slate-300" />
        </div>

        <div className="px-5 pt-2 pb-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`font-mono font-bold text-sm ${c.text}`}>{code}</span>
                <CategoryBadge category={course.category} />
                <span className={`text-xs ${c.text} opacity-50`}>{course.credits} CH</span>
              </div>
              <h2 className={`mt-1 text-base font-bold leading-tight ${c.text}`}>{course.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 shrink-0 text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-5 pb-8 grid grid-cols-1 gap-4 max-h-[55vh] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shrink-0" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Prerequisites ({course.prerequisites.length})
              </span>
            </div>
            {course.prerequisites.length === 0 ? (
              <p className="text-xs text-slate-400 italic px-1">None — open to all students</p>
            ) : (
              <div className="flex flex-col gap-1.5">
                {course.prerequisites.map((pre) => {
                  const preC = ALL_COURSES[pre];
                  return (
                    <div key={pre} className="flex items-start gap-2 rounded-xl bg-rose-50 border border-rose-200 px-3 py-2">
                      <span className="font-mono text-[11px] font-bold text-rose-700 shrink-0 mt-0.5">{pre}</span>
                      <span className="text-[11px] text-rose-600 leading-tight">{preC?.title ?? ""}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                Unlocks ({unlocks.length})
              </span>
            </div>
            {unlocks.length === 0 ? (
              <p className="text-xs text-slate-400 italic px-1">No courses directly depend on this</p>
            ) : (
              <div className="flex flex-col gap-1.5">
                {unlocks.map((unl) => {
                  const unlC = ALL_COURSES[unl];
                  return (
                    <div key={unl} className="flex items-start gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-3 py-2">
                      <span className="font-mono text-[11px] font-bold text-emerald-700 shrink-0 mt-0.5">{unl}</span>
                      <span className="text-[11px] text-emerald-600 leading-tight">{unlC?.title ?? ""}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Legend({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const items: Array<{ label: string; color: string }> = [
    { label: "Mathematics", color: "bg-violet-100 border-violet-300 text-violet-700" },
    { label: "Physics",     color: "bg-sky-100 border-sky-300 text-sky-700" },
    { label: "General",     color: "bg-slate-100 border-slate-300 text-slate-600" },
    { label: "Core EPE",    color: "bg-blue-100 border-blue-300 text-blue-700" },
    { label: "Elective",    color: "bg-amber-100 border-amber-300 text-amber-700" },
    { label: "Project",     color: "bg-emerald-100 border-emerald-300 text-emerald-700" },
    { label: "Training",    color: "bg-orange-100 border-orange-300 text-orange-700" },
  ];

  return (
    <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-white/70 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Legend</span>
        <span className="text-slate-400 text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 flex flex-wrap gap-1.5">
          {items.map(({ label, color }) => (
            <span key={label} className={`px-2.5 py-1 rounded-full border text-[11px] font-medium ${color}`}>
              {label}
            </span>
          ))}
          <div className="w-full mt-2 flex gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400 shrink-0" />
              <span className="text-[11px] text-slate-600">Prerequisite of selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[11px] text-slate-600">Unlocked by selected</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const [legendOpen, setLegendOpen] = useState(false);

  const handleSelect = useCallback((code: string) => {
    setSelectedCode((prev) => (prev === code ? null : code));
  }, []);

  const prereqOf = new Set(selectedCode ? (ALL_COURSES[selectedCode]?.prerequisites ?? []) : []);
  const unlockedBy = new Set(selectedCode ? getUnlocks(selectedCode) : []);

  const totalCourses = Object.keys(ALL_COURSES).length;
  const totalCredits = Object.values(ALL_COURSES).reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-indigo-50">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="px-4 py-3">
          <h1 className="text-base font-black text-slate-900 tracking-tight leading-tight">
            CUFE · Electrical Power Engineering
          </h1>
          <p className="text-[11px] text-slate-500 mt-0.5">
            EPE 2023 · {totalCourses} courses · {totalCredits} credit hours
          </p>
        </div>
        {selectedCode && (
          <div className="px-4 py-2 bg-blue-50 border-t border-blue-100 flex items-center justify-between gap-2">
            <div className="text-xs text-blue-700 min-w-0">
              <span className="font-mono font-bold">{selectedCode}</span>
              <span className="mx-1.5 text-slate-400">·</span>
              <span className="text-rose-600 font-semibold">{ALL_COURSES[selectedCode]?.prerequisites.length ?? 0} prereqs</span>
              <span className="mx-1.5 text-slate-400">·</span>
              <span className="text-emerald-600 font-semibold">{getUnlocks(selectedCode).length} unlocked</span>
            </div>
            <button
              onClick={() => setSelectedCode(null)}
              className="text-[11px] text-slate-500 underline shrink-0"
            >
              Clear
            </button>
          </div>
        )}
      </header>

      <main className="pb-8">
        <div className="px-4 pt-4 pb-2">
          {!selectedCode && (
            <p className="text-center text-xs text-slate-400 italic mb-4">
              Tap any course to see prerequisites and what it unlocks
            </p>
          )}
        </div>

        <Legend open={legendOpen} onToggle={() => setLegendOpen((p) => !p)} />

        <div className="flex flex-col gap-6 px-3">
          {SEMESTERS.map((sem) => (
            <SemesterSection
              key={sem.number}
              semester={sem}
              selectedCode={selectedCode}
              prereqOf={prereqOf}
              unlockedBy={unlockedBy}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </main>

      {selectedCode && (
        <BottomSheet code={selectedCode} onClose={() => setSelectedCode(null)} />
      )}
    </div>
  );
}
