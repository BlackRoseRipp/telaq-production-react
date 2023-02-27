import { Fragment } from "react";
import {
  FaQuoteLeft,
  FaRegClock,
  FaStethoscope,
  FaUsers,
} from "react-icons/fa";

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
                Talk To a Doctor Now
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
      <section className="container mx-auto 2xl:px-32 my-12">
        <div className="py-12 text-center mx-auto xl:w-1/2 md:w-2/3">
          <p className="font-bold mb-2 text-green-500">Features</p>
          <p className="font-bold mb-2 text-3xl">We're here to help.</p>
        </div>
        <div className="grid grid-cols-5 w-full gap-8">
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-amber-50 py-9 h-64 rounded-2xl w-5/6 mx-auto">
              <div className="flex flex-col justify-center items-center p-4">
                <img
                  className="rounded-full bg-white p-2 mb-6 w-24"
                  src="img/pill-icon.png"
                  alt="pill-icon"
                />
                <h4 className="text-xl mb-2 text-center">General Medical</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-sky-50 py-9 h-64 rounded-2xl w-5/6 mx-auto">
              <div className="flex flex-col justify-center items-center p-4">
                <img
                  className="rounded-full bg-white p-2 mb-6 w-24"
                  src="img/primary-360.png"
                  alt="primary-360-icon"
                />
                <h4 className="text-xl mb-2 text-center">Primary360</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-red-50 py-9 h-64 rounded-2xl w-5/6 mx-auto">
              <div className="flex flex-col justify-center items-center p-4">
                <img
                  className="rounded-full bg-white p-2 mb-6 w-24"
                  src="img/mental-health.png"
                  alt="pill-icon"
                />
                <h4 className="text-xl mb-2 text-center">Mental Health</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-green-50 py-9 h-64 rounded-2xl w-5/6 mx-auto">
              <div className="flex flex-col justify-center items-center p-4">
                <img
                  className="rounded-full bg-white p-2 mb-6 w-24"
                  src="img/specialist.png"
                  alt="specialist-opinion-icon"
                />
                <h4 className="text-xl mb-2 text-center">Specialist Opinion</h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center bg-violet-50 py-9 h-64 rounded-2xl w-5/6 mx-auto">
              <div className="flex flex-col justify-center items-center p-4">
                <img
                  className="rounded-full bg-white p-2 mb-6 w-24"
                  src="img/wellness-care.png"
                  alt="wellness-care-icon"
                />
                <h4 className="text-xl mb-2 text-center">Wellness Care</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto 2xl:px-32 my-12">
        <div className="xl:w-1/2 md:w-2/3 mb-12 mx-auto">
          <h2 className="text-center text-3xl mb-2">
            Do healthcare differently with TelaQ.
          </h2>
          <p className="mb-4 text-center">
            Curae hendrerit donec commodo hendrerit egestas tempus, turpis
            facilisis nostra nunc. Vestibulum dui eget ultrices.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-y-6">
          <div className="flex flex-col justify-start items-center">
            <img className="h-[90px]" src="img/bills.png" alt="bills-icon" />
            <div className="px-6 text-center">
              <h4 className="text-2xl mb-2">Ditch The Crazy Bills</h4>
              <p className="mb-4">
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img
              className="h-[90px]"
              src="img/mobile-chat.png"
              alt="mobile-chat-icon"
            />
            <div className="px-6 text-center">
              <h4 className="text-2xl mb-2">Care on your schedule, 24/7</h4>
              <p className="mb-4">
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <img
              className="h-[90px]"
              src="img/treat-yourself.png"
              alt="treat-yourself-icon"
            />
            <div className="px-6 text-center">
              <h4 className="text-2xl mb-2">
                Treat yourself - not your condition
              </h4>
              <p className="mb-4">
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto 2xl:px-32 my-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <img
            className="w-full"
            src="img/symptoms-section.png"
            alt="check-symptoms"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl mb-2">
              Check your symptoms the smarter way
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac sollicitudin mi. Pellentesque lectus orci, vulputate vitae
              consectetur nec, imperdiet in nunc. Integer at felis id mauris
              porttitor bibendum. Fusce massa massa, sagittis non mattis ac,
              consequat et elit. Phasellus suscipit ac purus et tincidunt. Sed
              id nunc non augue auctor sodales. Integer nec eleifend felis.
              Maecenas vel sapien ut mauris porta maximus. Donec risus erat,
              dapibus eget nunc non, interdum sodales quam. Integer in congue
              ex. Morbi sem velit, mollis vitae orci vehicula, vestibulum
              consectetur felis. Curabitur eget felis sodales, aliquet mauris
              in, pellentesque massa. Sed dictum enim nec ultricies mattis.
              Curabitur et nibh elit. Suspendisse luctus finibus turpis, sed
              sagittis lorem pulvinar at.
            </p>
            <a
              href="#"
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
            >
              Get Started Now
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="md:order-first order-last flex flex-col justify-center">
            <h2 className="text-5xl mb-2">Don't wait to talk to a doctor</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac sollicitudin mi. Pellentesque lectus orci, vulputate vitae
              consectetur nec, imperdiet in nunc. Integer at felis id mauris
              porttitor bibendum. Fusce massa massa, sagittis non mattis ac,
              consequat et elit. Phasellus suscipit ac purus et tincidunt. Sed
              id nunc non augue auctor sodales. Integer nec eleifend felis.
              Maecenas vel sapien ut mauris porta maximus. Donec risus erat,
              dapibus eget nunc non, interdum sodales quam. Integer in congue
              ex. Morbi sem velit, mollis vitae orci vehicula, vestibulum
              consectetur felis. Curabitur eget felis sodales, aliquet mauris
              in, pellentesque massa. Sed dictum enim nec ultricies mattis.
              Curabitur et nibh elit. Suspendisse luctus finibus turpis, sed
              sagittis lorem pulvinar at.
            </p>
            <a
              href="#"
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
            >
              Get Started Now
            </a>
          </div>
          <div className="md:order-last order-first">
            <img
              className="w-full"
              src="img/talk-to-a-doctor-section.png"
              alt="talk-to-a-doctor"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#1D2959] py-12 my-12">
        <div className="container mx-auto 2xl:px-32 py-12">
          <div className="xl:w-1/2 md:w-2/3 mb-12 mx-auto">
            <h2 className="text-center text-3xl font-bold text-white mb-2">
              Thousands of customers love us
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            <div className="">
              <div className="bg-white rounded-2xl flex flex-col p-4">
                <FaQuoteLeft className="text-orange-400 mb-1" />
                <p className="mb-4">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
                <div className="flex justify-start">
                  <img
                    className="w-[50px] h-[50px] rounded-full object-cover mr-4"
                    src="img/team/avatar2.jpg"
                    alt="Avatar"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <p className="font-bold text-blue-600">John Smith</p>
                    <p className="text-slate-600">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="bg-white rounded-2xl flex flex-col p-4">
                <FaQuoteLeft className="text-orange-400 mb-1" />
                <p className="mb-4">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
                <div className="flex justify-start">
                  <img
                    className="w-[50px] h-[50px] rounded-full object-cover mr-4"
                    src="img/team/avatar4.jpg"
                    alt="Avatar"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <p className="font-bold text-blue-600">John Smith</p>
                    <p className="text-slate-600">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 sm:col-span-2 lg:w-full w-full sm:w-1/2 mx-auto">
              <div className="bg-white rounded-2xl flex flex-col p-4">
                <FaQuoteLeft className="text-orange-400 mb-1" />
                <p className="mb-4">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Donec
                  id elit non mi porta gravida at eget metus.
                </p>
                <div className="flex justify-start">
                  <img
                    className="w-[50px] h-[50px] rounded-full object-cover mr-4"
                    src="img/team/avatar5.jpg"
                    alt="Avatar"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <p className="font-bold text-blue-600">John Smith</p>
                    <p className="text-slate-600">Erat netus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto 2xl:px-32 mt-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <img
            className="w-full"
            src="img/doctors-dedicated-section.png"
            alt="doctors-dedicated-section"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl mb-2">
              Doctors dedicated to getting you the care you deserve.
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac sollicitudin mi. Pellentesque lectus orci, vulputate vitae
              consectetur nec, imperdiet in nunc. Integer at felis id mauris
              porttitor bibendum. Fusce massa massa, sagittis non mattis ac,
              consequat et elit. Phasellus suscipit ac purus et tincidunt. Sed
              id nunc non augue auctor sodales. Integer nec eleifend felis.
              Maecenas vel sapien ut mauris porta maximus. Donec risus erat,
              dapibus eget nunc non, interdum sodales quam. Integer in congue
              ex. Morbi sem velit, mollis vitae orci vehicula, vestibulum
              consectetur felis. Curabitur eget felis sodales, aliquet mauris
              in, pellentesque massa. Sed dictum enim nec ultricies mattis.
              Curabitur et nibh elit. Suspendisse luctus finibus turpis, sed
              sagittis lorem pulvinar at.
            </p>
            <a
              href="#"
              className="btn-primary bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
            >
              Get Started Now
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="md:order-first order-last flex flex-col justify-center">
            <h2 className="text-5xl mb-5">Why TelaQ</h2>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-8">
                <img
                  src="img/clock.png"
                  className="w-[77px] h-[77px] mr-6"
                  alt="accessible"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="mb-2 text-2xl">Accessible</h4>
                  <p>
                    No wait time. Schedule an appointment based on your
                    availablility
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <img
                  src="img/fem-doc.png"
                  className="w-[77px] h-[77px] mr-6"
                  alt="accessible"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="mb-2 text-2xl">Balanced</h4>
                  <p>
                    Certified physicians will curate your treatment based on
                    your specific needs
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <img
                  src="img/green-shield.png"
                  className="w-[77px] h-[77px] mr-6"
                  alt="accessible"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="mb-2 text-2xl">Confidential</h4>
                  <p>
                    Your privacy is our upmost concern. TelaQ maintains all
                    GIPAA compliance
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <img
                  src="img/heart-in-hand.png"
                  className="w-[77px] h-[77px] mr-6"
                  alt="accessible"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="mb-2 text-2xl">Dedicated</h4>
                  <p>
                    Individualized care centered around achieving the best
                    results for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:order-last order-first">
            <img
              className="w-full"
              src="img/why-tela-q-graphic.png"
              alt="why-tela-q"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
