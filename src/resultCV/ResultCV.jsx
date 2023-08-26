import CVEduContainer from "./CVEduContainer/CVEduContainer";
import CVJobContainer from "./CVJobContainer/CVJobContainer";

export default function ResultCV({ src, eduEntries, jobEntries }) {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <div className="cv-general-info">
          <div className="cv-name">Daniel Isaev</div>
          <div className="cv-email">isaev-daneil17@yandex.ru</div>
          <div className="cv-tel">12345556789</div>
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
