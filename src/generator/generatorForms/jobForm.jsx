import { useState } from "react";

export default function JobForm({ jobEntries, setJobEntries }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [company, setCompany] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilites, setResponsibilites] = useState("");
  const [index, setIndex] = useState(0);
  const hasNext = index < jobEntries.length - 1;
  const hasPrev = index > 0;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!jobEntries[index].isSubmitted) {
      let jobEntry = {
        // id: uuidv4(),
        start,
        end,
        company,
        positionTitle,
        responsibilites,
        isSubmitted: true,
        hide: false,
      };

      const newJobEntries = [];
      for (let i = 0; i < jobEntries.length - 1; i++) {
        newJobEntries.push(jobEntries[i]);
      }
      newJobEntries.push(jobEntry);
      newJobEntries.push({
        start: "",
        end: "",
        company: "",
        positionTitle: "",
        responsibilites: "",
        isSubmitted: false,
        hide: false,
      });

      setJobEntries(newJobEntries);
    } else {
      let changedJobEntry = jobEntries[index];
      changedJobEntry.start = start;
      changedJobEntry.end = end;
      changedJobEntry.company = company;
      changedJobEntry.positionTitle = positionTitle;
      changedJobEntry.responsibilites = responsibilites;

      const newJobEntries = [];
      for (let i = 0; i < index; i++) {
        newJobEntries.push(jobEntries[i]);
      }
      newJobEntries.push(changedJobEntry);
      for (let i = index + 1; i < jobEntries.length - 1; i++) {
        newJobEntries.push(jobEntries[i]);
      }
      newJobEntries.push({
        start: "",
        end: "",
        company: "",
        positionTitle: "",
        responsibilites: "",
        isSubmitted: false,
        hide: false,
      });

      setJobEntries(newJobEntries);
    }
  };

  const handleNextClick = () => {
    let newIndex = index;
    if (hasNext) {
      newIndex++;
    } else {
      newIndex = 0;
    }
    setIndex(newIndex);
    setStart(jobEntries[newIndex].start);
    setEnd(jobEntries[newIndex].end);
    setCompany(jobEntries[newIndex].company);
    setPositionTitle(jobEntries[newIndex].positionTitle);
    setResponsibilites(jobEntries[newIndex].responsibilites);
  };

  const handlePrevClick = () => {
    let newIndex = index;
    if (hasPrev) {
      newIndex--;
    } else {
      newIndex = jobEntries.length - 1;
    }
    setIndex(newIndex);
    setStart(jobEntries[newIndex].start);
    setEnd(jobEntries[newIndex].end);
    setCompany(jobEntries[newIndex].company);
    setPositionTitle(jobEntries[newIndex].positionTitle);
    setResponsibilites(jobEntries[newIndex].responsibilites);
  };

  const handleHideClick = () => {
    let changedJobEntry = jobEntries[index];
    changedJobEntry.hide = !changedJobEntry.hide;

    const newJobEntries = [];
    for (let i = 0; i < index; i++) {
      newJobEntries.push(jobEntries[i]);
    }
    newJobEntries.push(changedJobEntry);
    for (let i = index + 1; i < jobEntries.length - 1; i++) {
      newJobEntries.push(jobEntries[i]);
    }
    newJobEntries.push({
      start: "",
      end: "",
      company: "",
      positionTitle: "",
      responsibilites: "",
      isSubmitted: false,
      hide: false,
    });

    setJobEntries(newJobEntries);
  };

  const handleAddClick = () => {
    if (index === jobEntries.length - 2) {
      handleNextClick();
    } else {
      const newIndex = index + 1;

      const newEntry = {
        start: "",
        end: "",
        company: "",
        positionTitle: "",
        responsibilites: "",
        isSubmitted: false,
        hide: false,
      };

      const newJobEntries = [];
      for (let i = 0; i < newIndex; i++) {
        newJobEntries.push(jobEntries[i]);
      }
      newJobEntries.push(newEntry);
      for (let i = newIndex; i < jobEntries.length - 1; i++) {
        newJobEntries.push(jobEntries[i]);
      }
      newJobEntries.push({
        start: "",
        end: "",
        company: "",
        positionTitle: "",
        responsibilites: "",
        isSubmitted: false,
        hide: false,
      });

      setIndex(newIndex);
      setJobEntries(newJobEntries);
    }
  };

  const handleDelClick = () => {
    const newJobEntries = [];
    for (let i = 0; i < index; i++) {
      newJobEntries.push(jobEntries[i]);
    }
    for (let i = index + 1; i < jobEntries.length - 1; i++) {
      newJobEntries.push(jobEntries[i]);
    }
    newJobEntries.push({
      start: "",
      end: "",
      company: "",
      positionTitle: "",
      responsibilites: "",
      isSubmitted: false,
      hide: false,
    });

    setJobEntries(newJobEntries);
  };

  return (
    <div className="job-info-container">
      <div className="job-info-header">Job info</div>
      <div className="page-number">{`${index + 1}/${jobEntries.length}`}</div>

      <form action="" method="get" className="form-job" onSubmit={onSubmit}>
        <div className="first-input-row">
          <div className="field">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              onChange={(e) => {
                setCompany(e.target.value);
                jobEntries[index].company = e.target.value;
              }}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="position-title">Position title</label>
            <input
              type="text"
              name="position-title"
              id="position-title"
              onChange={(e) => {
                setPositionTitle(e.target.value);
                jobEntries[index].positionTitle = e.target.value;
              }}
              required
            />
          </div>
        </div>
        <div className="second-input-row">
          <div className="field">
            <label htmlFor="start-job-date">Start Date</label>
            <input
              type="date"
              name="start-job-date"
              id="start-job-date"
              onChange={(e) => {
                setStart(e.target.value);
                jobEntries[index].start = e.target.value;
              }}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="end-job-date">End Date</label>
            <input
              type="date"
              name="end-job-date"
              id="end-job-date"
              onChange={(e) => {
                setEnd(e.target.value);
                jobEntries[index].end = e.target.value;
              }}
              required
            />
          </div>
        </div>
        <div className="field textarea-field">
          <label htmlFor="responsibilites">Responsibilites</label>
          <textarea
            id="responsibilites"
            name="responsibilites"
            rows="5"
            cols="33"
            onChange={(e) => {
              setResponsibilites(e.target.value);
              jobEntries[index].responsibilites = e.target.value;
            }}
            required
          ></textarea>
        </div>

        <div className="buttons-row">
          <div className="job-form-buttons-left">
            <input
              type="submit"
              value={jobEntries[index].isSubmitted ? "Edit" : "Submit"}
            />
            {jobEntries[index].isSubmitted && (
              <>
                <button type="button" onClick={handleDelClick}>
                  Del
                </button>
                <button type="button" onClick={handleAddClick}>
                  Add
                </button>
              </>
            )}
          </div>
          <div className="job-form-buttons-right">
            {jobEntries[index].isSubmitted && (
              <button type="button" onClick={handleHideClick}>
                {jobEntries[index].hide ? "Show" : "Hide"}
              </button>
            )}
            {jobEntries.length > 1 && (
              <>
                <button type="button" onClick={handlePrevClick}>
                  Prev
                </button>
                <button type="button" onClick={handleNextClick}>
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
