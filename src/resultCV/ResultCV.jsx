import CVJobEntry from "./CVJobEntry";
import CVEduContainer from "./CVEduContainer/CVEduContainer";

export default function ResultCV({ src, eduEntries }) {
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

        <div className="cv-job-container">
          <div className="cv-job-header">Job info</div>
          <CVJobEntry
            start={"10.9.2004"}
            end={"10.9.2008"}
            company={"Ozon Tech"}
            positionTitle={"Intern"}
            responsibilites={"Interny responsibilities"}
          />
          <CVJobEntry
            start={"10.9.2004"}
            end={"10.9.2008"}
            company={"Ozon Tech"}
            positionTitle={"Intern"}
            responsibilites={"Interny responsibilities"}
          />
        </div>
      </div>
    </div>
  );
}
