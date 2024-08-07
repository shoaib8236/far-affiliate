import React from "react";
import { BsFillChatSquareTextFill, BsFillEyeFill } from "react-icons/bs";
import GreenArrowUp from "../../assets/icons/green_arrow_up.svg";
import RedArrowDown from "../../assets/icons/red_arrow_down.svg";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import { Rate } from "antd";

const AffiliateEstablishmentCard = (props) => {
  const { page } = props;

  const data = {
    _id: "1",
    currency_icon: "AU$",
    today_profit: 123.45,
    this_week_profit: 789.01,
    this_week_order: 456.78,
    last_week_order: 123.45,
    today_order: 67.89,
    this_week_refunded: 12.34,
  };

  const currencyIcon = data.currency_icon;

  return (
    <div className="p-[10px] rounded-md bg-white shadow-theme-1 mb-4">
      <div className="flex mb-7">
        <div className="flex-1">
          <div>
            <div className="flex far-gap-md">
              <Avatar size="w-[70px] h-[70px]" rounded="rounded-md" />
              <div>
                <div className="flex gap-1 items-center">
                  <h3 className="text-base mb-0 font-medium">
                    Bob’s Fish Imporium!
                  </h3>
                  <Button iconStyle autoHeight size="sm" theme="light">
                    <BsFillEyeFill className="text-lg" />
                  </Button>
                </div>
                <p className="text-gray-500 mb-2">Sydney NSW, Australia</p>
                <span className="mt-2">
                  <Rate value={0} disabled={true} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {page === "establishments" && (
            <div className="flex justify-end">
              <Button padding="px-6 py-2" autoHeight className="mr-2">
                <BsFillChatSquareTextFill /> Chat Now
              </Button>
            </div>
          )}

          {page !== "establishments" && (
            <div className="text-right">
              <p className="text-sm">Today Profit</p>
              <h1 className="text-xl text-primary font-semibold">
                {currencyIcon}
                {data.today_profit.toFixed(2)}
              </h1>
            </div>
          )}
          {page !== "establishments" && (
            <div className="flex items-end justify-end text-right mt-4">
              <Button padding="px-6 py-2" autoHeight className="mr-2">
                <BsFillChatSquareTextFill /> Chat Now
              </Button>
              <div>
                <p className="text-sm">Last Week</p>
                <h1 className="text-xl text-primary font-semibold">
                  {currencyIcon}
                  {data.this_week_profit.toFixed(2)}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex px-2 border-t items-center border-gray-200 mt-2 pt-2">
        <div className="flex-1 border-r border-gray-200 px-2">
          <p className="text-sm mb-1">Sold This Week</p>
          <div className="flex items-center">
            <p className="text-green-500 text-[14px] mr-2 mb-0">
              {currencyIcon}
              {data.this_week_order.toFixed(2)}
            </p>
            <img src={GreenArrowUp} alt="Up Arrow" className="h-5 w-5" />
          </div>
        </div>
        <div className="flex-1 border-r border-gray-200 px-2">
          <p className="text-sm mb-1">Sold Last Week</p>
          <div className="flex items-center">
            <p className="text-danger text-[14px] mr-2 mb-0">
              {currencyIcon}
              {data.last_week_order.toFixed(2)}
            </p>
            <img src={RedArrowDown} alt="Down Arrow" className="h-5 w-5" />
          </div>
        </div>
        <div className="flex-1 border-r border-gray-200 px-2">
          <p className="text-sm mb-1">Today</p>
          <div className="flex items-center">
            <p className="text-[14px] mr-2 mb-0">
              {currencyIcon}
              {data.today_order.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex-1 p-2">
          <p className="text-sm mb-1">RR This Week</p>
          <div className="flex items-center">
            <p className="text-danger text-[14px] mr-2 mb-0">
              {currencyIcon}
              {data.this_week_refunded.toFixed(2)}
            </p>
            <img src={RedArrowDown} alt="Down Arrow" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateEstablishmentCard;
