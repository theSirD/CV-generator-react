import Dates from "../Dates";

export default function CVEduEntry({ start, end, university, titleOfStudy }) {
  return (
    <div className="cv-edu-info">
      <Dates start={start} end={end} />
      <div className="cv-university">{university}</div>
      <div className="cv-title-of-study">{titleOfStudy}</div>
    </div>
  );
}
