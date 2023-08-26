export default function Buttons({
  setName,
  setEmail,
  setTel,
  setGeneralInfo,
  setImagePath,
  setEduEntries,
  setJobEntries,
  start,
  setStart,
  end,
  setEnd,
  university,
  setUniversity,
  titleOfStudy,
  setTitleOfStudy,
  index,
  setIndex,
}) {
  // const handleClearClick()

  //и вот это синхронизируй

  const handleLoadButtonClick = () => {
    setName("Daniel Isaev");
    setEmail("isaev-daniel17@yandex.ru");
    setTel("8921777****");
    setGeneralInfo({
      name: "Daniel Isaev",
      email: "isaev-daniel17@yandex.ru",
      tel: "8921777****",
    });

    setStart("2022-09-01");
    setEnd("2026-09-01");
    setUniversity("ITMO");
    setTitleOfStudy("Computer Science");
    setEduEntries([
      {
        start: "2022-09-1",
        end: "2026-09-1",
        university: "ITMO University",
        titleOfStudy: "Computer Science",
        isSubmitted: true,
        hide: false,
      },
      {
        start: "",
        end: "",
        university: "",
        titleOfStudy: "",
        isSubmitted: false,
        hide: false,
      },
    ]);
  };
  return (
    <div className="generator-buttons">
      <button
        type="button"
        className="load-example-button"
        onClick={handleLoadButtonClick}
      >
        Load example
      </button>
      <button type="button" className="clear-cv-button">
        Clear resume
      </button>
      <button type="button" className="download-cv-button">
        Download CV
      </button>
    </div>
  );
}
