import CVJobEntry from "./CVJobEntry";
export default function CVJobContainer({ jobEntries }) {
  if (jobEntries.length === 1) return;
  let allEntriesAreHidden = true;
  let allEntriesAreNotSubmitted = true;
  for (let i = 0; i < jobEntries.length - 1; i++) {
    if (jobEntries[i].hide === false) {
      allEntriesAreHidden = false;
    }
    if (jobEntries[i].isSubmitted === true) {
      allEntriesAreNotSubmitted = false;
    }
  }

  if (!allEntriesAreHidden && !allEntriesAreNotSubmitted) {
    return (
      <div className="cv-edu-container">
        <div className="cv-edu-header">Job info</div>
        {jobEntries.map(
          (entry) =>
            !entry.hide && (
              <CVJobEntry
                key={entry.id}
                start={entry.start}
                end={entry.end}
                company={entry.company}
                positionTitle={entry.positionTitle}
                responsibilites={entry.responsibilites}
              />
            )
        )}
      </div>
    );
  }
}
