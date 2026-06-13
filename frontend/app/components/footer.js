import React from "react";

const Footer = () => {
  const inputClasses =
    "w-full p-2.5 mb-2.5 bg-transparent border border-gray-400 text-gray-200 text-sm";
  const headingClasses = "uppercase text-xs font-bold tracking-wider mb-5";

  return (
    <footer className="bg-slate-800 text-gray-200 py-16 px-5 font-sans relative">
      <div className="flex justify-center gap-10 flex-wrap max-w-6xl mx-auto text-left">
        {/* Left Section */}
        <div className="flex-1 min-w-[320px]">
          <h2 className={`${headingClasses} mb-1`}>
            To contact our rental or sales team
          </h2>
          <h3 className={headingClasses}>please call or email us:</h3>
          <p className="my-1 text-sm">Tel: 9390826312</p>
          <p className="my-1 text-sm">Email: bkedhar10@gmail.com</p>
          <p className="my-1 text-sm">Shop NO: 8977589611</p>
          <div className="mt-8">
            <p className="my-1 text-sm">Secunderabad</p>
            <p className="my-1 text-sm">Hyderabad</p>
          </div>
          <p className="text-xs mt-8">
            © Sri Badrinath Enterprises. Powered and secured by{" "}
            <a href="#" className="text-gray-200 underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-[1.5] min-w-[320px]">
          <h2 className={headingClasses}>
            Alternatively you can fill in the following contact form:
          </h2>
          <form>
            <div className="flex gap-5">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Name"
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className={inputClasses}
                />
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Message"
                  className={`${inputClasses} h-36 resize-none`}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-transparent border-none text-gray-200 cursor-pointer uppercase tracking-wider mt-2.5 p-0 ml-auto block font-bold text-xs"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
