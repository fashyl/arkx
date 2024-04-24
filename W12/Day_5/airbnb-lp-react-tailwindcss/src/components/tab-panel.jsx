import Divider from "@mui/material/Divider";

export default function TabPanel() {
        return (
    <form action="" className="text-dark-grey text-s flex h-auto flex-row bg-white rounded-full items-center justify-center p-2
      border shadow-md w-min m-auto
      ">
      <div className="flex flex-col items-start pl-5 w-[263px]">
        <label
          htmlFor=""
          className="text-xs leading-4 font-semibold">
          Where
        </label>
        <br />
        <input type="text" placeholder="Search destinations" id="" name="" />
      </div>
      <Divider  orientation="vertical" variant="middle" flexItem />
      <div className="flex flex-row">
        <div className="flex flex-col items-start pl-5">
        <label
          htmlFor=""
          className="text-xs leading-4 font-semibold">
          Check in
        </label>
        <br />
        <input type="text" placeholder="Add dates" id="" name="" />
        </div>
        <Divider orientation="vertical" variant="fullWidth" flexItem />
        <div className="flex flex-col items-start pl-5"> 
        <label
          htmlFor=""
          className="text-xs leading-4 font-semibold">
          Check out
        </label>
        <br />
        <input type="text" placeholder="Add dates" id="" name="" />
        </div>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="flex flex-col items-start pl-5  w-[263px]">
        <label
          htmlFor=""
          className="text-xs leading-4 font-semibold">
          Who
        </label>
        <br />
        <input type="text" placeholder="Add guests" id="" name="" />
      </div>
      <div className="w-12 h-12 bg-red-500 rounded-full flex flex-col items-center justify-center
">
        <a href="#">
        <img src="src/assets/Vector(2).png" className="logo p-justify-end
" alt="Profile logo" />
      </a>
      </div>
    </form>
  );
}
