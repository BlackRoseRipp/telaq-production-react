import { Fragment } from "react";

const PageNotFound = () => {
  return (
    <Fragment>
      <div className="min-h-screen banner bg-indigo-50 flex flex-col justify-center items-center">
        <h1 className="text-blue-600 font-bold text-6xl lg:text-[240px] text-center mb-8">
          404
        </h1>
        <p className="text-center font-bold text-4xl mb-4">
          This page is not available at this time.
        </p>
        <a
          href="/home"
          className="btn-primary bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
        >
          Return Home
        </a>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
