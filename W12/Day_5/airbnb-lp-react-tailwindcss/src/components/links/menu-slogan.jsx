import language from "../../assets/language.svg";
import menu from '../../assets/menu.svg'
import profile from '../../assets/profile.svg'

export default function MenuSlogan() {
  return (
    <>
    <div className="flex flex-row items-center">
      <a href="/" className="font-semibold p-3 text-dark-grey">
        Airbnb your home
      </a>
      <a href="#" className="flex-none">
      <img src={language} className="logo p-3" alt="language logo" />
      </a>
    </div>
    <div className='flex flex-row items-center p-2 px-4 gap-4 bg-white border border-light-grey rounded-full
    flex-grow-0'>
      <a href="/">
        <img src={menu} className="logo" alt="Menu logo" />
      </a>
      <a href="/">
        <img src={profile} className="logo" alt="Profile logo" />
      </a>
    </div>
    </>
  );
}
