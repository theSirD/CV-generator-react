import Navbar from "./navbar";
import GeneratorForms from "./generatorForms/GeneratorForms";
import Author from "./Author";

export default function Generator() {
  return (
    <div className="generator">
      <div className="generator-header">
        <span>CV Generator</span>
      </div>
      <Navbar />
      <GeneratorForms />
      <Author />
    </div>
  );
}
