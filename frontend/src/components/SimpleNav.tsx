import { ColorToggle } from "./ColorToggle";
import { Logo } from "./Logo";

export const SimpleNav = () => {
  return (
    <div className="w-full py-4  flex items-center justify-between">
      <Logo />
      <ColorToggle />
    </div>
  );
};
