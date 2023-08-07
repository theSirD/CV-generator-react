import Navbar from "./navbar";
import GeneralForm from "./contentScreen/GeneralForm";
import Buttons from "./contentScreen/Buttons";
import EducationForm from "./contentScreen/EduForm";

export default function Generator() {
  return (
    <div className="generator">
      <div className="generator-header">
        <span>CV Generator</span>
      </div>
      <Navbar />
      <div className="generator-forms">
        <GeneralForm />
        <Buttons />
        <EducationForm />
      </div>
    </div>
  );
}
