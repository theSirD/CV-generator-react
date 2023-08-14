export default function GeneralForm() {
  return (
    <div>
      <div className="form-header">General info</div>
      <form action="" method="get" className="form-general">
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="tel">Tel </label>
        <input type="tel" name="tel" id="tel" required />
        <div className="general-form-buttons">
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
