import FeatureCard from './FeatureCard';
import { FEATURE_CARDS } from '@/lib/constants';

export default function FeatureGrid() {
  return (
    // Added horizontal padding (px-12) so overflows are visible
    <section className="max-w-[1300px] mx-auto py-20 px-8 md:px-16 overflow-visible">
      <div className="mb-12">
        <p className="text-[#414141] font-bold text-[24px] mb-1 tracking-wider">
          Your SkillShikshya Journey
        </p>
        <h2 className="text-[32px] md:text-[32px] font-black">
          <span className="text-[#34A853]">Step</span> In.
          <span className="text-[#34A853]"> Skill</span> Up.
          <span className="text-gray-900"> Stand Out.</span> 🚀
        </h2>
      </div>

      {/* Grid with 32px gap as requested */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {FEATURE_CARDS.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}