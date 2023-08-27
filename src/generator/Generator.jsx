import Navbar from "./Navbar";
import GeneratorForms from "./generatorForms/GeneratorForms";
import CustomizationScreen from "./customizationScreen/CustomizationScreen";
import Author from "./Author";

export default function Generator({
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
    <div className="generator">
      <div className="generator-header">
        <span>CV Generator</span>
      </div>
      <Navbar />
      <GeneratorForms
        eduEntries={eduEntries}
        setEduEntries={setEduEntries}
        jobEntries={jobEntries}
        setJobEntries={setJobEntries}
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        imagePath={imagePath}
        setImagePath={setImagePath}
      />
      {/* <CustomizationScreen /> */}
      <Author />
    </div>
  );
}
