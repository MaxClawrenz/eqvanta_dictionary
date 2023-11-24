import { Link } from "react-router-dom";

function WordHeader() {
  return (
    <div className="HeaderLeft">
      <Link to="/_wt/dictionary">
        <svg
          className="GoBackIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="38"
          viewBox="0 0 37 38"
          fill="none"
        >
          <g clipPath="url(#clip0_2687_13)">
            <g clipPath="url(#clip1_2687_13)">
              <circle cx="18.5" cy="19.355" r="17.5" fill="none"></circle>
              <path
                d="M18.5 37.855C28.7007 37.855 37 29.5556 37 19.355C37 9.15433 28.7007 0.85498 18.5 0.85498C8.29935 0.85498 0 9.15433 0 19.355C0 29.5556 8.29935 37.855 18.5 37.855ZM18.5 2.70347C27.6821 2.70347 35.1515 10.1729 35.1515 19.355C35.1515 28.5371 27.6821 36.0065 18.5 36.0065C9.3179 36.0065 1.84849 28.5371 1.84849 19.355C1.84849 10.1729 9.3179 2.70347 18.5 2.70347Z"
                fill="#929090"
              ></path>
              <path
                d="M12.6903 20.1734H12.4258L12.6128 20.3604L16.2344 23.982C16.5537 24.3013 16.5537 24.8129 16.2344 25.1323C15.915 25.4516 15.4034 25.4516 15.084 25.1323L9.88564 19.9339C9.7274 19.7756 9.65366 19.5707 9.65366 19.3549C9.65366 19.1416 9.73336 18.9358 9.89319 18.776L15.0916 13.5776C15.411 13.2582 15.9225 13.2582 16.2419 13.5776C16.5613 13.897 16.5613 14.4085 16.2419 14.7279L12.6204 18.3494L12.4333 18.5365H12.6978H26.5351C26.9877 18.5365 27.3536 18.9024 27.3536 19.3549C27.3536 19.8075 26.9877 20.1734 26.5351 20.1734H12.6903Z"
                fill="#FBBB10"
                stroke="#FBBB10"
                strokeWidth="0.219145"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2687_13">
              <rect
                width="37"
                height="37"
                fill="white"
                transform="matrix(0 1 -1 0 37 0.85498)"
              ></rect>
            </clipPath>
            <clipPath id="clip1_2687_13">
              <rect
                width="37"
                height="37"
                fill="white"
                transform="translate(0 0.85498)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div className="universal_bold_title_back">Глоссарий</div>
    </div>
  );
}

export default WordHeader;
