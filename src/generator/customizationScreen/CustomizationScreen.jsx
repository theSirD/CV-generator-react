import LayoutSettings from "./LayoutSettings";
import ColorSettings from "./ColorSettings";

export default function CustomizationScreen() {
  return (
    <div className="customization-screen">
      <LayoutSettings />
      <ColorSettings />
    </div>
  );
}
