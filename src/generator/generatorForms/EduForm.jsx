import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { forceUpdate } from "react";

export default function EducationForm({ eduEntries, setEduEntries }) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [university, setUniversity] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [index, setIndex] = useState(0);
  const hasNext = index < eduEntries.length - 1;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!eduEntries[index].isSubmitted) {
      let eduEntry = {
        // id: uuidv4(),
        start,
        end,
        university,
        titleOfStudy,
        isSubmitted: true,
      };

      const newEduEntries = [];
      for (let i = 0; i < eduEntries.length - 1; i++) {
        newEduEntries.push(eduEntries[i]);
      }
      newEduEntries.push(eduEntry);
      newEduEntries.push({
        start: "",
        end: "",
        university: "",
        titleOfStudy: "",
        isSubmitted: false,
      });

      setEduEntries(newEduEntries);
    } else {
      let changedEduEntry = eduEntries[index];
      changedEduEntry.start = start;
      changedEduEntry.end = end;
      changedEduEntry.university = university;
      changedEduEntry.titleOfStudy = titleOfStudy;

      const newEduEntries = [];
      for (let i = 0; i < index; i++) {
        newEduEntries.push(eduEntries[i]);
      }
      newEduEntries.push(changedEduEntry);
      for (let i = index + 1; i < eduEntries.length - 1; i++) {
        newEduEntries.push(eduEntries[i]);
      }
      newEduEntries.push({
        start: "",
        end: "",
        university: "",
        titleOfStudy: "",
        isSubmitted: false,
      });

      setEduEntries(newEduEntries);
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
    setStart(eduEntries[newIndex].start);
    setEnd(eduEntries[newIndex].end);
    setUniversity(eduEntries[newIndex].university);
    setTitleOfStudy(eduEntries[newIndex].titleOfStudy);
  };

  return (
    <div className="edu-info-container">
      <div className="edu-info-header">Education info</div>
      <div className="page-number">{`${index + 1}/${eduEntries.length}`}</div>

      <form className="form-edu" onSubmit={onSubmit}>
        <div className="first-input-row">
          <div className="field">
            <label htmlFor="university">University</label>
            <input
              type="text"
              name="university"
              id="university"
              value={university}
              onChange={(e) => {
                setUniversity(e.target.value);
                eduEntries[index].university = e.target.value;
              }}
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
              onChange={(e) => {
                setTitleOfStudy(e.target.value);
                eduEntries[index].titleOfStudy = e.target.value;
              }}
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
              onChange={(e) => {
                setStart(e.target.value);
                eduEntries[index].start = e.target.value;
              }}
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
              onChange={(e) => {
                setEnd(e.target.value);
                eduEntries[index].university = e.target.value;
              }}
              required
            />
          </div>
        </div>
        <div className="buttons-row">
          <div className="study-form-buttons-left">
            <input type="submit" value={eduEntries[index].isSubmitted ? "Edit" : "Submit"} />
            <button type="button">Del</button>
            <button type="button">Add</button>
          </div>
          <div className="study-form-buttons-right">
            <button type="button">Hide</button>
            <button type="button">Prev</button>
            <button type="button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
