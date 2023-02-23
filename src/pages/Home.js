import { Fragment } from "react";
import { FaRegClock, FaStethoscope, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-indigo-50 banner">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-bold mb-2">
                Practically Anywhere, at Anytime
              </h1>
              <p className="text-2xl mb-4">
                Talk to a doctor, therapist, or medical expert anywhere you are
                by phone or video
              </p>
              <a
                href="#"
                className="btn-primary bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
              >
                Talk To a Doctor
              </a>
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full" src="img/header-image.png" alt="header" />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-16">
            <div className="py-9 text-center">
              <span className="text-xl">
                <FaStethoscope className="inline-block mr-4" /> Board-Certified
                Doctors
              </span>
            </div>
            <div className="py-9 text-center">
              <span className="text-xl">
                <FaUsers className="inline-block mr-4" /> 1M+ Users 20k+ Reviews
              </span>
            </div>
            <div className="py-9 text-center">
              <span className="text-xl">
                <FaRegClock className="inline-block mr-4" /> Available 24/7 In
                all States
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
