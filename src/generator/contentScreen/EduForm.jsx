export default function EducationForm() {
  return (
    <div>
      <div className="form-header">Education info</div>
      <form action="" method="get" className="form-education">
        <label htmlFor="university">University </label>
        <input type="text" name="university" id="university" required />
        <label htmlFor="title-of-study">Title of study </label>
        <input type="text" name="title-of-study" id="title-of-study" required />
        <label htmlFor="start-study-date">Tel </label>
        <input
          type="date"
          name="start-study-date"
          id="start-study-date"
          required
        />
        <label htmlFor="end-study-date">Tel </label>
        <input type="date" name="end-study-date" id="end-study-date" required />
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
      </form>
    </div>
  );
}
