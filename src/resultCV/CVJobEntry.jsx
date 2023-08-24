import Dates from "./Dates";

export default function CVJobEntry({
  start,
  end,
  company,
  positionTitle,
  responsibilites,
}) {
  return (
    <div className="cv-job-info">
      <Dates start={start} end={end} />
      <div className="cv-company">{company}</div>
      <div className="cv-position-title">{positionTitle}</div>
      <div className="cv-responsibilites">{responsibilites}</div>
    </div>
  );
}
