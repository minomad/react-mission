
function Spinner() {
  return (
    <figure className="flex flex-col items-center p-24 min-[500px]:min-h-[calc(100vh-52px)] min-[500px]:min-w-[calc(100vh-15px)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <g>
          <path fill="#fff" stroke="#3763c9" strokeWidth="12" d="M50 15a35 35 0 1024.749 10.251"></path>
          <path fill="#3763c9" d="M49 3v24l12-12L49 3"></path>
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </g>
      </svg>
      <figcaption>Loading...</figcaption>
    </figure>
  );
}
export default Spinner;
