import Brand from "./links/brand";
import MenuSlogan from "./links/menu-slogan";
import Tablist from "./links/tablist";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-10 h-20 isolate">
      <Brand
        className="flex flex-col justify-center items-start w-96 h-13"
        />
        <div></div>
      <Tablist className="flex flex-row items-center p-4 w-136 h-19 bg-white border border-gray-200 rounded-full shadow-md mx-auto" />
      <div className="flex flex-row items-center p-0 gap-4 justify-self-center w-104 h-17">
        <MenuSlogan />
      </div>
    </div>
  );
}

