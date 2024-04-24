import language from "../../assets/language.svg";

export default function Slogan() {
  return (
    <div className="flex flex-row items-center">
      <a href="/" className="font-semibold p-3 text-dark-grey text-sm leading-4.5
">
        Airbnb your home
      </a>
      <a href="#" className="flex-none">
      <img src={language} className="logo p-3" alt="language logo" />
      </a>
    </div>
  );
}
