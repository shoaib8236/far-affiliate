import React from "react";
import Header from "../../app-ui/Header/Header";
import Button from "../../app-ui/Button/Button";

const Dashboard = () => {
  return (
    <div>
      <Header title={"Affiliate Dashboard"}>
        <div className="flex far-gap-md">
          <div>
            <h3 className="mb-0 text-base font-semibold">Eligible earning</h3>
            <h3 className="mb-0 text-base font-semibold text-primary">0.00</h3>
          </div>
          <Button padding="px-8">Payout request</Button>
        </div>
      </Header>
    </div>
  );
};

export default Dashboard;
