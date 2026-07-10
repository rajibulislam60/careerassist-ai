import SkillAnalyzerPage from "./SkillAnalyzerPage";
import SkillDetails from "./SkillDetails";
import SkillScore from "./SkillScore";

export default function page() {
  return (
    <div className="py-6 h-screen overflow-y-auto">
      <SkillAnalyzerPage />
      <SkillScore />
      <SkillDetails />
    </div>
  );
}
