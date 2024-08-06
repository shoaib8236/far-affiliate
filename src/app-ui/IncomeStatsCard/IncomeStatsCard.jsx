import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/plots";
import GreenArrowUp from "../../assets/icons/green_arrow_up.svg";
import RedArrowDown from "../../assets/icons/red_arrow_down.svg";

const IncomeStatsCard = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [{ type: "filter", callback: (d) => d.symbol === "GOOG" }],
    },
    xField: (d) => new Date(d.date),
    yField: "price",
    style: {
      fill: "#C71920a6",
    },
    axis: {
      y: false,
      x: false,
    },
    line: {
      style: {
        stroke: "#C71920",
        strokeWidth: 2,
      },
    },
  };

  //   const config = {
  //     data,
  //     xField: "timePeriod",
  //     yField: "value",
  //     // xAxis: {
  //     //   range: [0, 1],
  //     // },
  //     xAxis: false,
  //     yAxis: false,
  //     height: 80,
  //     width: 240,
  //     color: "#C71920",
  //   };

  // Dummy data for display
  const currencyIcon = "$";
  const todayEarning = 0.0;
  const paidPercentage = 0.0;
  const weekEarning = 0.0;
  const monthEarning = 0.0;

  return (
    <div className="p-4 mb-4 bg-white shadow-md rounded-lg">
      <div className="flex far-gap-lg">
        <div className="w-max">
          <p className="text-sm">Today Income</p>
          <h1 className="text-2xl text-danger font-semibold mb-2">
            {currencyIcon}
            {todayEarning.toFixed(2)}
          </h1>
          <p className="text-sm">Percentage</p>
          <h1 className="text-xl text-danger font-semibold mb-2">
            {paidPercentage.toFixed(2)}%
          </h1>
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <div className="flex-1">
              <p className="text-sm">This week</p>
              <h3 className="text-danger text-sm font-semibold">
                {currencyIcon}
                {weekEarning.toFixed(2)}
                <img
                  src={GreenArrowUp}
                  alt="Up Arrow"
                  className="inline-block ml-1"
                />
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-sm">Last Month</p>
              <h3 className="text-danger text-sm font-semibold">
                {currencyIcon}
                {monthEarning.toFixed(2)}
                <img
                  src={RedArrowDown}
                  alt="Down Arrow"
                  className="inline-block ml-1"
                />
              </h3>
            </div>
          </div>
          <div className="h-20 w-full">
            <Area {...config} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(IncomeStatsCard);
