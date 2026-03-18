import CourseExplorer from '../../components/task2/CourseExplorer';

export const metadata = {
  title: 'Courses Explorer - SkillShikshya',
  description: 'Explore our classes and master trending skills. Dive into what\'s hot right now!',
};

export default function Task2Page() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-20 pb-20">
      <div className="container mx-auto px-4">
        <CourseExplorer />
      </div>
    </main>
  );
}
