export default function ResultCV({ src }) {
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
        {/* replace following with components */}
        <div className="cv-edu-container">
          <div className="cv-edu-header">Education info</div>
          <div className="cv-edu-info entry-1">
            <div className="cv-edu-dates">10.9.2004 - 10.9.2008</div>
            <div className="cv-university">ITMO University</div>
            <div className="cv-title-of-study">Bachelors in IT</div>
          </div>
          <div className="cv-edu-info entry-2">
            <div className="cv-edu-dates">10.9.2004 - 10.9.2008</div>
            <div className="cv-university">ITMO University</div>
            <div className="cv-title-of-study">Bachelors in IT</div>
          </div>
        </div>
        <div className="cv-job-container">
          <div className="cv-job-header">Job info</div>
          <div className="cv-job-info">
            <div className="cv-job-dates">10.9.2004 - 10.9.2008</div>
            <div className="other-job-info"></div>
            <div className="cv-company">Ozon Tech</div>
            <div className="cv-position-title">Intern</div>
            <div className="cv-responsibilites">Interny responsibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
}
