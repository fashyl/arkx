export default function Tablist() {
  return (
    <div className="flex p-4 w-18 h-14 rounded-md gap-6">
      <a href="#">
        <text
          className="grow-0 shrink-0 basis-auto order-0 self-stretch font-semibold text-dark-grey text-center text-base leading-6
            "
        >
          Stays
        </text>
      </a>
      <a href="#">
        <text
          className="grow-0 shrink-0 basis-auto order-1 self-stretch font-normal text-light-grey text-center text-base leading-6
"
        >
          Experiences
        </text>
      </a>
      <a href="#">
        <text
          className="grow-0 shrink-0 basis-auto order-2 self-stretch font-normal text-light-grey text-center text-base leading-6
"
        >
          Online Experiences
        </text>
      </a>
    </div>
  );
}
