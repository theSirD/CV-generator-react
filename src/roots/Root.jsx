import { useState } from "react";
import Generator from "../generator/Generator";
import ResultCV from "../resultCV/ResultCV";

export default function Root() {
  const [eduEntries, setEduEntries] = useState([]);
  return (
    <>
      <Generator eduEntries={eduEntries} setEduEntries={setEduEntries} />
      <ResultCV eduEntries={eduEntries} />
    </>
  );
}
