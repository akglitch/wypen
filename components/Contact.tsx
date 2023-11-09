import React from 'react';

function Contact() {
  return (
    <section id='contact'>
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold  capitalize  lg:text-3xl">
              Contact us for <br /> more info
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <i className="fa fa-location-arrow text-blue-400"></i>
                <span className="mx-2  truncate w-72 dark:text-gray-400">
                amoah street kumasi, ahodwo
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <i className="fa fa-phone text-blue-400" ></i>
                <span className="mx-2  truncate w-72 dark:text-gray-400"> +233 209742331</span>
              </p>

              <p className="flex items-start -mx-2">
                <i className="fa fa-envelope-o text-blue-400" ></i>
                <span className="mx-2  truncate w-72 dark:text-gray-400">ntirianinakwa@gmail.com</span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className=" dark:text-gray-300">Follow us</h3>

              <div className="flex mt-4 -mx-1.5">
                <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <i className="fa fa-twitter text-blue-400" ></i>
                </a>

                <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <i className="fa fa-linkedin text-blue-400" ></i>
                </a>

                <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <i className="fa fa-facebook text-blue-400"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg   lg:max-w-xl  ">
              <h1 className="text-lg font-medium ">What do you want to ask</h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label htmlFor="fullName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2  placeholder-gray-400  rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2  placeholder-gray-400  rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="block w-full h-32 px-5 py-3 mt-2  placeholder-gray-400  rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
