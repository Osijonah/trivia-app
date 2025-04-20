import * as classes from'./Checkmark.module.css';

const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#00973f"
    stroke="#00973f"
    className={`"checkmark" ${classes.correct}`}
    viewBox="0 -3 32 32"
  >
    <g id="SVGRepo_iconCarrier">
      <g
        id="Page-1"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g
          id="Icon-Set-Filled"
          fill="#00973f"
          transform="translate(-518 -1039)"
        >
          <path
            id="checkmark"
            d="M548.783 1040.2a4.02 4.02 0 0 0-5.775 0l-14.439 14.72-3.609-3.68a4.04 4.04 0 0 0-5.775 0c-1.595 1.63-1.595 4.27 0 5.89l6.497 6.63a4.02 4.02 0 0 0 5.775 0l17.326-17.67c1.595-1.63 1.595-4.27 0-5.89"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);


export default Checkmark;