export default function TopButton(props: {
  link: string;
  img: string;
  label: string;
}) {
  return (
    <div>
      <a href={props.link} target="_blank">
        <button className="bg-white rounded-l-full w-20 mb-4 pl-2 max-w-md shadow-md shadow-white hover:-translate-x-24 transition duration-300 ease-in-out">
          <div className="flex flex-col-2">
            <img className="" src={props.img} alt="resume button" />
            <div className="bg-white rounded-r-full text-black font-ss3 font-extrabold pt-7 px-5 max-w-md shadow-md shadow-white transition duration-300 ease-in-out">
              {props.label}
            </div>
          </div>
        </button>
      </a>
    </div>
  );
}
