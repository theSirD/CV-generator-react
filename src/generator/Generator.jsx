import Navbar from "./navbar";
import GeneralForm from "./contentScreen/GeneralForm";
import Buttons from "./contentScreen/Buttons";
import EducationForm from "./contentScreen/EduForm";
import JobForm from "./contentScreen/jobForm";

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
        <JobForm />
      </div>
    </div>
  );
}
