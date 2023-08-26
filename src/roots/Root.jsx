import { useState } from "react";
import Generator from "../generator/Generator";
import ResultCV from "../resultCV/ResultCV";

export default function Root() {
  const [generalInfo, setGeneralInfo] = useState([
    {
      name: "",
      email: "",
      tel: "",
      isSubmitted: false,
    },
  ]);

  const [imagePath, setImagePath] = useState("");

  const [eduEntries, setEduEntries] = useState([
    {
      start: "",
      end: "",
      university: "",
      titleOfStudy: "",
      isSubmitted: false,
      hide: false,
    },
  ]);

  const [jobEntries, setJobEntries] = useState([
    {
      start: "",
      end: "",
      company: "",
      positionTitle: "",
      responsibilities: "",
      isSubmitted: false,
      hide: false,
    },
  ]);

  return (
    <>
      <Generator
        eduEntries={eduEntries}
        setEduEntries={setEduEntries}
        jobEntries={jobEntries}
        setJobEntries={setJobEntries}
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        imagePath={imagePath}
        setImagePath={setImagePath}
      />
      <ResultCV
        eduEntries={eduEntries}
        jobEntries={jobEntries}
        generalInfo={generalInfo}
        imagePath={imagePath}
      />
    </>
  );
}
