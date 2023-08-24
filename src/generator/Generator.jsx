import Navbar from "./navbar";
import GeneratorForms from "./generatorForms/GeneratorForms";
import CustomizationScreen from "./customizationScreen/CustomizationScreen";
import Author from "./Author";

export default function Generator({ eduEntries, setEduEntries }) {
  return (
    <div className="generator">
      <div className="generator-header">
        <span>CV Generator</span>
      </div>
      <Navbar />
      <GeneratorForms eduEntries={eduEntries} setEduEntries={setEduEntries} />
      {/* <CustomizationScreen /> */}
      <Author />
    </div>
  );
}
