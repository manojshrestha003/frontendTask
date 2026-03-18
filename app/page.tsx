import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] via-[#E8F6F3] to-[#FFF8E1] px-6 py-10">
      <div className="text-center max-w-[600px]">
        <h1 className="text-[2.5rem] font-black text-[#2D3436] mb-3 italic leading-tight">
          <span className="text-[#2D9596]">Skill</span>
          <span className="text-[#C0392B]">Shikshya</span>
        </h1>
        <p className="text-[1.1rem] text-[#636E72] mb-10">
          Frontend Design Tasks
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/task1"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-br from-[#2D9596] to-[#27AE60] text-white rounded-2xl text-base font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(45,149,150,0.3)]"
          >
            Task 1 — SkillShikshya Journey
            <span className="text-[1.2em]">→</span>
          </Link>

          <Link
            href="/task2"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-br from-[#C0392B] to-[#E74C3C] text-white rounded-2xl text-base font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(192,57,43,0.3)]"
          >
            Task 2 — Courses Explorer
            <span className="text-[1.2em]">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
