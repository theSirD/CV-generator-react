import GeneralForm from "./GeneralForm";
import Buttons from "./Buttons";
import EducationForm from "./EduForm";
import JobForm from "./jobForm";

export default function GeneratorForms({ eduEntries, setEduEntries }) {
  return (
    <div className="generator-forms">
      <GeneralForm />
      <Buttons />
      <EducationForm eduEntries={eduEntries} setEduEntries={setEduEntries}/>
      <JobForm />
    </div>
  );
}
