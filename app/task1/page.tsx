import HeroBanner from '@/components/task1/HeroBanner';
import FeatureGrid from '@/components/task1/FeatureGrid';

export const metadata = {
  title: 'SkillShikshya Journey - Step In. Skill Up. Stand Out.',
  description: 'Discover your learning path with SkillShikshya. Start with clarity, learn by doing, get mentored, and showcase your achievements.',
};

export default function Task1Page() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-20">
      <div className="container mx-auto">
        <FeatureGrid />
      </div>
    </main>
  );
}
