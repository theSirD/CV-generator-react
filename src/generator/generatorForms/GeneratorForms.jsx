import GeneralForm from "./GeneralForm";
import Buttons from "./Buttons";
import EducationForm from "./EduForm";
import JobForm from "./jobForm";

export default function GeneratorForms() {
  return (
    <div className="generator-forms">
      <GeneralForm />
      <Buttons />
      <EducationForm />
      <JobForm />
    </div>
  );
}
