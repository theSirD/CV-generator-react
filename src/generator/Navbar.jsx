import { RxDividerVertical } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="nav">
      <button type="button">Content</button>
      <RxDividerVertical />
      <button type="button">Customization</button>
    </div>
  );
}
