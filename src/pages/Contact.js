import { Fragment } from "react";
import { BsEnvelope, BsPin, BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <Fragment>
      <div className="py-[100px] container mx-auto 2xl:px-32">
        <div className="py-12 text-center mx-auto xl:w-1/2 md:w-2/3 mb-12">
          <p className="font-bold mb-2 text-green-500">Contacts</p>
          <p className="font-bold mb-2 text-3xl">How you can reach us</p>
        </div>
        <div className="grid md:grid-cols-2 xl:w-2/3 mx-auto">
          <div className="flex flex-col items-center xl:p-6 p-4">
            <form method="post">
              <input
                type="name"
                className="px-6 py-3 rounded-2xl !border mb-4 w-full border-slate-300 focus-visible:outline-none focus-visible:border"
                id="contactNameInput"
                placeholder="Name"
                required
              ></input>
              <input
                type="email"
                className="px-6 py-3 rounded-2xl !border mb-4 w-full border-slate-300 focus-visible:outline-none focus-visible:border"
                id="contactEmailInput"
                placeholder="Email"
                required
              ></input>
              <textarea
                className="px-6 py-3 rounded-2xl !border mb-4 w-full border-slate-300 focus-visible:outline-none focus-visible:border"
                id="contactMessageInput"
                placeholder="Message"
                rows="6"
                required
              ></textarea>
              <button
                type="submit"
                disabled={false}
                className="btn-primary !w-full !text-base bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex flex-col lg:justify-start justify-center">
            <div className="flex items-center p-4">
              <div className="rounded-full bg-blue-600 p-3 shadow-[0_8px_16px_0_rgba(55,99,244,0.15)]">
                <BsTelephone className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center items-start px-2">
                <h6 className="font-bold">Phone</h6>
                <p className="text-slate-600">+12345678910</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <div className="rounded-full bg-blue-600 p-3 shadow-[0_8px_16px_0_rgba(55,99,244,0.15)]">
                <BsEnvelope className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center items-start px-2">
                <h6 className="font-bold">Email</h6>
                <p className="text-slate-600">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <div className="rounded-full bg-blue-600 p-3 shadow-[0_8px_16px_0_rgba(55,99,244,0.15)]">
                <BsPin className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center items-start px-2">
                <h6 className="font-bold">Location</h6>
                <p className="text-slate-600">12 Example Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
