import airbnbBrand from "../../assets/airbnb.svg";

export default function Brand() {
  return (
    <div>
      <a href="/">
        <img
          src={airbnbBrand}
          className="logo grow-0 shrink-0 basis-auto order-0
"
          alt="Airbnb logo"
        />
      </a>
    </div>
  );
}
