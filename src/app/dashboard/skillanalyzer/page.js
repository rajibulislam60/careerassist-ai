import SkillAnalyzerPage from "./SkillAnalyzerPage";
import SkillDetails from "./SkillDetails";
import SkillOverView from "./SkillOverView";
import SkillScore from "./SkillScore";

export default function Page() {
  return (
    <div className="py-6 h-screen overflow-y-auto">
      <SkillAnalyzerPage />

      <div className="mt-6 flex flex-col lg:flex-row gap-4">
        {/* Left Content */}
        <div className="w-full lg:w-[70%] space-y-6">
          <SkillScore />
          <SkillDetails />
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[30%]">
          <SkillOverView />
        </div>
      </div>
    </div>
  );
}
