import { useState } from "react";
import Generator from "../generator/Generator";
import ResultCV from "../resultCV/ResultCV";

export default function Root() {
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
      />
      <ResultCV eduEntries={eduEntries} jobEntries={jobEntries} />
    </>
  );
}
