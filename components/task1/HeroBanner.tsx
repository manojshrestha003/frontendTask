export default function HeroBanner() {
  return (
    <div className="max-w-[1000px] mx-auto mb-12 px-4">
      <p className="text-sm text-gray-500 mb-2 font-semibold">
        Your SkillShikshya Journey
      </p>
      <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">
        <span className="text-[#F15A59]">Step In.</span>{' '}
        <span className="text-[#508D96]">Skill Up.</span>{' '}
        <span className="text-[#2D3436]">Stand Out.</span>{' '}
        <span className="inline-block animate-bounce ml-2">🚀</span>
      </h1>
    </div>
  );
}
