import GeneralForm from "./GeneralForm";
import Buttons from "./Buttons";
import EducationForm from "./EduForm";
import JobForm from "./jobForm";

export default function GeneratorForms({
  eduEntries,
  setEduEntries,
  jobEntries,
  setJobEntries,
  generalInfo,
  setGeneralInfo,
  imagePath,
  setImagePath,
}) {
  return (
    <div className="generator-forms">
      <GeneralForm
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        imagePath={imagePath}
        setImagePath={setImagePath}
      />
      <Buttons />
      <EducationForm eduEntries={eduEntries} setEduEntries={setEduEntries} />
      <JobForm jobEntries={jobEntries} setJobEntries={setJobEntries} />
    </div>
  );
}
