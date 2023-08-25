import CVEduEntry from "./CVEduEntry";
export default function CVEduContainer({ eduEntries }) {
  if (eduEntries.length === 1) return;
  let allEntriesAreHidden = true;
  let allEntriesAreNotSubmitted = true;
  for (let i = 0; i < eduEntries.length - 1; i++) {
    if (eduEntries[i].hide === false) {
      allEntriesAreHidden = false;
    }
    if (eduEntries[i].isSubmitted === true) {
      allEntriesAreNotSubmitted = false;
    }
  }

  if (!allEntriesAreHidden && !allEntriesAreNotSubmitted) {
    return (
      <div className="cv-edu-container">
        <div className="cv-edu-header">Education info</div>
        {eduEntries.map(
          (entry) =>
            !entry.hide && (
              <CVEduEntry
                key={entry.id}
                start={entry.start}
                end={entry.end}
                university={entry.university}
                titleOfStudy={entry.titleOfStudy}
              />
            )
        )}
      </div>
    );
  }
}
