import { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [university, setUniversity] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [index, setIndex] = useState(0);
  return (
    <div className="generator-forms">
      <GeneralForm
        name={name}
        email={email}
        tel={tel}
        setName={setName}
        setEmail={setEmail}
        setTel={setTel}
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        imagePath={imagePath}
        setImagePath={setImagePath}
      />
      <Buttons
        setName={setName}
        setEmail={setEmail}
        setTel={setTel}
        setGeneralInfo={setGeneralInfo}
        setImagePath={setImagePath}
        setEduEntries={setEduEntries}
        setJobEntries={setJobEntries}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        university={university}
        setUniversity={setUniversity}
        titleOfStudy={titleOfStudy}
        setTitleOfStudy={setTitleOfStudy}
        index={index}
        setIndex={setIndex}
      />
      <EducationForm
        eduEntries={eduEntries}
        setEduEntries={setEduEntries}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        university={university}
        setUniversity={setUniversity}
        titleOfStudy={titleOfStudy}
        setTitleOfStudy={setTitleOfStudy}
        index={index}
        setIndex={setIndex}
      />
      <JobForm jobEntries={jobEntries} setJobEntries={setJobEntries} />
    </div>
  );
}
