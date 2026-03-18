import FeatureCard from './FeatureCard';
import { FEATURE_CARDS } from '@/lib/constants';

export default function FeatureGrid() {
  return (
    // Added horizontal padding (px-12) so overflows are visible
    <section className="max-w-[1300px] mx-auto py-20 px-8 md:px-16 overflow-visible">
      <div className="mb-12">
        <p className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wider">
          Your SkillShikshya Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-black">
          <span className="text-[#34A853]">Step</span> In. 
          <span className="text-[#34A853]"> Skill</span> Up. 
          <span className="text-gray-900"> Stand Out.</span> 🚀
        </h2>
      </div>

      {/* Grid with larger gap to allow for illustration overflow space */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {FEATURE_CARDS.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}