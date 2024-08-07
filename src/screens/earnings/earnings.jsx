import React from "react";
import Header from "../../app-ui/Header/Header";
import Avatar from "../../app-ui/Avatar/Avatar";
import Button from "../../app-ui/Button/Button";

const Earnings = () => {
  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      <Header title={"Earnings"}></Header>
      <div className="flex-grow flex overflow-hidden">
        <div className="flex-1 min-w-[350px] max-w-[350px] border-r p-[10px] rounded-lg">
          {[1, 2, 3]?.map((item) => (
            <div key={item} className="shadow-theme-1 p-[10px]">
              <div class="flex mb-4 items-center far-gap-md">
                <Avatar />
                <div className="flex-1">
                  <h3 className="text-success font-medium text-base">
                    Australia
                  </h3>
                  <div class="flex justify-between items-center">
                    <p className="text-sm">Commission Earned</p>
                    <p class="text-success text-sm font-medium">AU$14.28</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button size="sm">Withdraw</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 overflow-auto p-[10px]">
          <div class="px-[15px] border-b">
            <div class="flex justify-between mb-[10px]">
              <span>Ref. transaction ID: 66b11f886b8182693d39920c</span>
              <span>Mon Aug 2024 11:52 PM</span>
            </div>
            <div class="flex justify-between mb-[24px]">
              <h3 className={`text-danger font-medium`}>Refund</h3>
              <h3 className={`text-danger font-medium`}>AU$0.18</h3>
            </div>
          </div>
          <div class="px-[15px] border-b">
            <div class="flex justify-between mb-[10px]">
              <span>Ref. transaction ID: 66b11f886b8182693d39920c</span>
              <span>Mon Aug 2024 11:52 PM</span>
            </div>
            <div class="flex justify-between mb-[24px]">
              <h3 className={`text-success font-medium`}>Referral Bonus</h3>
              <h3 className={`text-success font-medium`}>AU$0.18</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
