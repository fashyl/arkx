import HeaderItem from "./buttons/header-item";
import { GiCaveEntrance, GiStoneTower, GiEcology } from "react-icons/gi";
import { MdCabin } from "react-icons/md";
import { RiLandscapeLine } from "react-icons/ri";
import { LiaCitySolid, LiaKeySolid } from "react-icons/lia";
import { FaPlateWheat } from "react-icons/fa6";
import { GoContainer } from "react-icons/go";
import { HiOutlineFire } from "react-icons/hi";
import { TbSailboat, TbBeach, TbUfo } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { PiPark } from "react-icons/pi";
import { BsToggleOn, BsWater } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { useState } from "react";

const data = [
  {
    icon: <GiCaveEntrance />,
    title: "Caves",
    id: crypto.randomUUID(),
  },
  {
    icon: <MdCabin />,
    title: "Cabins",
    id: crypto.randomUUID(),
  },
  {
    icon: <RiLandscapeLine />,
    title: "Amazing views",
    id: crypto.randomUUID(),
  },
  {
    icon: <LiaCitySolid />,
    title: "Top cities",
    id: crypto.randomUUID(),
  },
  {
    icon: <FaPlateWheat />,
    title: "Luxe",
    id: crypto.randomUUID(),
  },
  {
    icon: <GoContainer />,
    title: "Containers",
    id: crypto.randomUUID(),
  },
  {
    icon: <HiOutlineFire />,
    title: "Trending",
    id: crypto.randomUUID(),
  },
  {
    icon: <LiaKeySolid />,
    title: "New",
    id: crypto.randomUUID(),
  },
  {
    icon: <GiStoneTower />,
    title: "Historical homes",
    id: crypto.randomUUID(),
  },
  {
    icon: <GiEcology />,
    title: "Earth homes",
    id: crypto.randomUUID(),
  },
  {
    icon: <TbSailboat />,
    title: "Boats",
    id: crypto.randomUUID(),
  },
  {
    icon: <TbBeach />,
    title: "Beachfront",
    id: crypto.randomUUID(),
  },
  {
    icon: <TbUfo />,
    title: "OMG!",
    id: crypto.randomUUID(),
  },
  {
    icon: <IoHomeOutline />,
    title: "Tiny homes",
    id: crypto.randomUUID(),
  },
  {
    icon: <PiPark />,
    title: "National parks",
    id: crypto.randomUUID(),
  },
  {
    icon: <BsWater />,
    title: "Lakes",
    id: crypto.randomUUID(),
  },
];

export default function CategoryTab() {
    const [categories, setCategories] = useState([...data]);

    const handleClick = (id) => {
        const updatedCategories = categories.map((category) => {
            if (category.id === id) {
              return { ...category, isActive: true };
            } else {
              return { ...category, isActive: false };
            }
          });
        setCategories(updatedCategories);
      };

  return (
    <div className="flex flex-row items-middle gap-20 p-0 mx-auto mt-4">
      {categories.map((category) => (
        <HeaderItem
          key={category.id}
          icon={category.icon}
          text={category.title}
          isActive={category.isActive}
          onClick={() => handleClick(category.id)}
        />
      ))}
      <div className="flex flex-row gap-4">
      <button className="flex items-center py-2 px-2 gap-2 bg-white border border-gray-300 rounded-md">
        <VscSettings />
        <text
          className="font-semibold text-xs leading-4 flex items-center text-center text-gray-900"
        >
          Filters
        </text>
      </button>
      <button className="flex items-center py-2 px-2 gap-2 bg-white border border-gray-300 rounded-md">
        <BsToggleOn />
      </button>
      </div>
    </div>
  );
}
