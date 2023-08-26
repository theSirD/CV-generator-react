import CVEduContainer from "./CVEduContainer/CVEduContainer";
import CVJobContainer from "./CVJobContainer/CVJobContainer";

export default function ResultCV({ src, eduEntries, jobEntries, generalInfo }) {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <div className="cv-general-info">
          <div className="cv-name">{generalInfo.name}</div>
          <div className="cv-email">{generalInfo.email}</div>
          <div className="cv-tel">{generalInfo.tel}</div>
        </div>
        <img src="src/assets/me.jpeg" alt="avatar" className="cv-avatar" />
      </div>
      <div className="cv-body">
        <CVEduContainer eduEntries={eduEntries} />
        <CVJobContainer jobEntries={jobEntries} />
      </div>
    </div>
  );
}
