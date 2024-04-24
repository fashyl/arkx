import CategoryTab from "./categories";
import Navbar from "./navbar";
import TabPanel from "./tab-panel";

export default function Header() {
  return (
    <div>
      <Navbar className="fixed top-0 left-16 w-full h-20 bg-white shadow-md flex flex-row justify-between items-center px-32 isolate" />
      <TabPanel className=""/>
      <CategoryTab />
    </div>
  );
}
