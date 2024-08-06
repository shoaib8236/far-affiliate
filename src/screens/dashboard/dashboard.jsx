import React from "react";
import Header from "../../app-ui/Header/Header";
import Button from "../../app-ui/Button/Button";
import AffiliateEstablishmentCard from "../../app-ui/AffiliateEstablishmentCard/AffiliateEstablishmentCard";
import IncomeStatsCard from "../../app-ui/IncomeStatsCard/IncomeStatsCard";

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
      <div className="p-2 flex">
        <div className="flex-1 p-[10px]">
          <AffiliateEstablishmentCard />
        </div>
        <div className="flex-1 max-w-[400px] p-[10px]">
          <IncomeStatsCard />
          <div className="py-1">
            <h3 className="text-lg font-medium">
              Top Performing Establishments
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
