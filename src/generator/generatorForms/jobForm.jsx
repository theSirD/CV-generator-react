export default function JobForm() {
  return (
    <div className="job-info-container">
      <div className="job-info-header">Job info</div>

      <form action="" method="get" className="form-job">
        <div className="first-input-row">
          <div className="field">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" required />
          </div>
          <div className="field">
            <label htmlFor="position-title">Position title</label>
            <input
              type="text"
              name="position-title"
              id="position-title"
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
              required
            />
          </div>
          <div className="field">
            <label htmlFor="end-job-date">End Date</label>
            <input type="date" name="end-job-date" id="end-job-date" required />
          </div>
        </div>
        <div className="field textarea-field">
          <label htmlFor="responsibilites">Responsibilites</label>
          <textarea
            id="responsibilites"
            name="responsibilites"
            rows="5"
            cols="33"
            required
          ></textarea>
        </div>

        <div className="buttons-row">
          <div className="job-form-buttons-left">
            <input type="submit" value="Submit" />
            <button type="button">Del</button>
            <button type="button">Add</button>
          </div>
          <div className="job-form-buttons-right">
            <button type="button">Hide</button>
            <button type="button">Prev</button>
            <button type="button">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
}
