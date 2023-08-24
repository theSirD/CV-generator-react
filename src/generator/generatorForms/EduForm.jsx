import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EducationForm({ eduEntries, setEduEntries }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [university, setUniversity] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const eduEntry = {
      id: uuidv4(),
      start,
      end,
      university,
      titleOfStudy,
    };

    setEduEntries([...eduEntries, eduEntry]);
  };

  return (
    <div className="edu-info-container">
      <div className="edu-info-header">Education info</div>

      <form className="form-edu" onSubmit={onSubmit}>
        <div className="first-input-row">
          <div className="field">
            <label htmlFor="university">University</label>
            <input
              type="text"
              name="university"
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="title-of-study">Title of study </label>
            <input
              type="text"
              name="title-of-study"
              id="title-of-study"
              value={titleOfStudy}
              onChange={(e) => setTitleOfStudy(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="second-input-row">
          <div className="field">
            <label htmlFor="start-study-date">Start Date</label>
            <input
              type="date"
              name="start-study-date"
              id="start-study-date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="end-study-date">End Date</label>
            <input
              type="date"
              name="end-study-date"
              id="end-study-date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="buttons-row">
          <div className="study-form-buttons-left">
            <input type="submit" value="Submit" />
            <button type="button">Del</button>
            <button type="button">Add</button>
          </div>
          <div className="study-form-buttons-right">
            <button type="button">Hide</button>
            <button type="button">Prev</button>
            <button type="button">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}
