export const LoginModal = () => {
  return (
    <div className="min-h-screen bg-red-100/60 flex items-center justify-center">
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 md:max-w-5xl">
        <div className="px-6 py-6 rounded-xl flex flex-col shadow-2xl md:py-16 md:px-16">
          <div className="mb-12">
            <div className="flex flex-row justify-between mb-5">
              <h2 className="text-4xl font-mono font-bold">Log In</h2>
              <div className="group bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:-translate-y-0.5 transition md:absolute md:right-5 md:top-4 md:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black group-hover:text-gray-600"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </div>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600 pr-5">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>

            <input
              type="email"
              placeholder="Enter your email addresss"
              className="border border-gray-300 w-full p-6 rounded-lg placeholder:font-light"
            />
            <div className="flex flex-col md:flex-row md:mt-8 md:justify-between items-center">
              <p className="text-center m-6 font-thin text-cyan-700 md:text-left md:m-0">
                Forgot password
              </p>
              <button className="w-full text-center border  bg-cyan-700 text-white rounded-lg p-6 font-bold hover:-translate-y-1 transition duration-150 hover:bg-opacity-90 hover:shadow-lg flex flex-row justify-center space-x-4 md:w-auto md:px-8 md:py-7">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-300"></div>

          <div className="text-center">
            <p className="text-gray-400 text-sm my-6 font-thin">
              or log in with
            </p>

            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-4">
              <button className="flex items-center justify-center shadow-sm space-x-4 border border-gray-300 rounded-md p-2 hover:-translate-y-0.5 hover:shadow-lg hover:bg-opacity-30 transition duration-150 md:w-full">
                <img className="w-10" src="/facebook.png" alt="" />
                <span className="font-thin">Facebook</span>
              </button>

              <button className="flex items-center justify-center shadow-sm space-x-4 border border-gray-300 rounded-md p-2 hover:-translate-y-0.5 hover:shadow-lg  hover:bg-opacity-30 transition duration-150 md:w-full">
                <img className="w-10" src="/google.png" alt="" />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>
        </div>
        <img src="/image.jpg" alt="" className="hidden w-[430px] md:block" />
      </div>
    </div>
  );
};
