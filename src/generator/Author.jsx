import githubPictureUrl from "../../src/assets/github.jpg";

export default function Author() {
  return (
    <div className="author">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img src={githubPictureUrl} alt="GitHub picture" />
        <span>theSirD</span>
      </a>
    </div>
  );
}
