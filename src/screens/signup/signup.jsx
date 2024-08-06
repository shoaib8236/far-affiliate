import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Logo from "../../assets/app.svg?react";
import HandShake from "../../assets/images/view-professional-handshake-business-people.jpg";

const Signup = () => {
  const location = useLocation();

  const signupData = {
    ...location.state,
    step: 2,
  };

  const getSvgStepColor = (currentStep) => {
    return currentStep <= signupData.step ? "#4620ED" : "#E0E0E0";
  };

  return (
    <div className="h-full fc-style-placeholder ">
      <div className="px-22 h-full">
        <div className="flex h-full">
          <div className="flex-1 px-24 flex flex-col overflow-hidden">
            <div className="col-center far-gap-sm py-6">
              <img className="mb-4 w-[150px]" src={Logo} alt="logo" />
              <h3 className="">
                {signupData?.step === 1 && "Signup"}
                {signupData?.step === 2 && "Signup / Account Info"}
                {signupData?.step === 3 && "Signup / Business Info"}
              </h3>
              <div>
                <svg
                  width="420"
                  height="32"
                  viewBox="0 0 420 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 16H202"
                    stroke={getSvgStepColor(1)}
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                  />
                  <path
                    d="M222 16H392"
                    stroke={getSvgStepColor(2)}
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                  />

                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke={getSvgStepColor(1)}
                    strokeWidth="2"
                  />
                  <circle cx="16" cy="16" r="8" fill={getSvgStepColor(1)} />
                  <circle
                    cx="212"
                    cy="16"
                    r="14"
                    stroke={getSvgStepColor(2)}
                    strokeWidth="2"
                  />
                  <circle cx="212" cy="16" r="8" fill={getSvgStepColor(2)} />
                  <circle
                    cx="392"
                    cy="16"
                    r="14"
                    stroke={getSvgStepColor(3)}
                    strokeWidth="2"
                  />
                  <circle cx="392" cy="16" r="8" fill={getSvgStepColor(3)} />
                </svg>
              </div>
            </div>
            <Outlet />
          </div>
          <div className="flex-1 max-w-[500px] relative text-white">
            <div className="w-full h-full absolute inset-0 z-10 bg-primary opacity-50"></div>
            <img
              className="h-full w-full object-cover"
              src={HandShake}
              alt="view-professional-handshake-business-people"
            />
            <div className="absolute inset-0 z-10">
              <div className="flex flex-col justify-between p-6 h-full">
                <div>
                  <h1 className="text-[16px] leading-none mb-3 font-semibold">
                    Become our
                  </h1>
                  <h1 className="text-[40px] leading-none mb-3 font-semibold">
                    Affiliate
                  </h1>
                  <h1 className="text-[16px] leading-none mb-3 font-semibold">
                    and earn on every
                  </h1>
                  <h1 className="text-[22px] leading-none mb-3 font-semibold">
                    single order
                  </h1>
                </div>
                <p className="font-medium">
                  There's Terms and Conditions in becoming a FoodChoo Affiliate
                  that you must agree to. But essentially; Every restaurant
                  Establishment you signup on your unique link, you'll earn a
                  micropayment on every transaction performed through FoodChoo's
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
