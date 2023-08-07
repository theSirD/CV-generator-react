export default function JobForm() {
  return (
    <div>
      <div className="form-header">Job info</div>
      <form action="" method="get" className="form-job">
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="email">Tel </label>
        <input type="tel" name="email" id="email" required />
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
