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
  const hasPrev = index > 0;

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
        hide: false,
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
        hide: false,
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
        hide: false,
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

  const handlePrevClick = () => {
    let newIndex = index;
    if (hasPrev) {
      newIndex--;
    } else {
      newIndex = eduEntries.length - 1;
    }
    setIndex(newIndex);
    setStart(eduEntries[newIndex].start);
    setEnd(eduEntries[newIndex].end);
    setUniversity(eduEntries[newIndex].university);
    setTitleOfStudy(eduEntries[newIndex].titleOfStudy);
  };

  const handleHideClick = () => {
    let changedEduEntry = eduEntries[index];
    changedEduEntry.hide = !changedEduEntry.hide;

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
      hide: false,
    });

    setEduEntries(newEduEntries);
  };

  const handleAddClick = () => {
    if (index === eduEntries.length - 2) {
      handleNextClick();
    } else {
      const newIndex = index + 1;

      const newEntry = {
        start: "",
        end: "",
        university: "",
        titleOfStudy: "",
        isSubmitted: false,
        hide: false,
      };

      const newEduEntries = [];
      for (let i = 0; i < newIndex; i++) {
        newEduEntries.push(eduEntries[i]);
      }
      newEduEntries.push(newEntry);
      for (let i = newIndex; i < eduEntries.length - 1; i++) {
        newEduEntries.push(eduEntries[i]);
      }
      newEduEntries.push({
        start: "",
        end: "",
        university: "",
        titleOfStudy: "",
        isSubmitted: false,
        hide: false,
      });

      setIndex(newIndex);
      setEduEntries(newEduEntries);
    }
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
            <input
              type="submit"
              value={eduEntries[index].isSubmitted ? "Edit" : "Submit"}
            />
            {eduEntries[index].isSubmitted && (
              <>
                <button type="button">Del</button>
                <button type="button" onClick={handleAddClick}>
                  Add
                </button>
              </>
            )}
          </div>
          <div className="study-form-buttons-right">
            {eduEntries[index].isSubmitted && (
              <button type="button" onClick={handleHideClick}>
                {eduEntries[index].hide ? "Show" : "Hide"}
              </button>
            )}

            <button type="button" onClick={handlePrevClick}>
              Prev
            </button>
            <button type="button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
