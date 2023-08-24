import CVEduEntry from "./CVEduEntry";
export default function CVEduContainer({ eduEntries }) {
  if (eduEntries.length === 0) return;

  return (
    <div className="cv-edu-container">
      <div className="cv-edu-header">Education info</div>
      {eduEntries.map((entry) => (
        <CVEduEntry
          key={entry.id}
          start={entry.start}
          end={entry.end}
          university={entry.university}
          titleOfStudy={entry.titleOfStudy}
        />
      ))}
    </div>
  );
}
