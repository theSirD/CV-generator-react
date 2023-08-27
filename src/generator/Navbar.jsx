import { RxDividerVertical } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      {/* <NavLink to="/content">Content</NavLink> */}

      <button type="button">Content</button>
      {/* <RxDividerVertical /> */}
      {/* <button type="button">Customization</button> */}
      {/* <NavLink to="/customization">Customization</NavLink> */}
    </div>
  );
}
