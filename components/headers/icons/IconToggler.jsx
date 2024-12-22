
const IconToggler = () => {
  return (
    <div className='w-6 inline-block text-black dark:text-white'>
        <svg
                  className="fill-current"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 12"
                >
                  {" "}
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h14M1 6h14M1 11h7"
                  />{" "}
                </svg>
    </div>
  )
}

export default IconToggler