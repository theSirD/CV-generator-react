export default function GeneralForm() {
  return (
    <div className="general-info-container">
      <div className="general-info-header">General info</div>
      <form action="" method="" className="form-general">
        <div className="field">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="field">
          <label htmlFor="tel">Tel </label>
          <input type="tel" name="tel" id="tel" required />
        </div>
        <div className="buttons-row">
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <label htmlFor="avatar" className="custom-button">
            Add photo
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
