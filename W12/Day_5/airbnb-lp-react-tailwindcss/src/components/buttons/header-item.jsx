// import rectangle from "../../assets/rectangle.svg";

// eslint-disable-next-line react/prop-types
export default function HeaderItem({ text, icon, isActive, onClick }) {
  return (
    <div onClick={onClick} className={"flex flex-col justify-center items-center p-0 gap-3 pb-3 " + (isActive ? "border-b-2 border-dark-grey" : "")}>
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
        {icon}
        <text className="font-semibold text-xs text-gray-500">
          {text}
        </text>
      </div>
      {/* {isActive && (
        //   <img src={rectangle} className="bg-dark-grey w-auto" alt="rectangle" />
      )} */}
    </div>
  );
}
