import { useState } from "react";

export default function GeneralForm({
  generalInfo,
  setGeneralInfo,
  setImagePath,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setGeneralInfo({ name, email, tel, isSubmitted: true });
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const { files } = e.target;
    const image = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImagePath(reader.result);
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className="general-info-container">
      <div className="general-info-header">General info</div>
      <form className="form-general" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="tel">Tel </label>
          <input
            type="tel"
            name="tel"
            id="tel"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
            required
          />
        </div>
        <div className="buttons-row">
          <input
            type="submit"
            value={!generalInfo.isSubmitted ? "Submit" : "Edit"}
          />
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={handleFileUpload}
          />
          <label htmlFor="avatar" className="custom-button">
            Add photo
          </label>
        </div>
      </form>
    </div>
  );
}
