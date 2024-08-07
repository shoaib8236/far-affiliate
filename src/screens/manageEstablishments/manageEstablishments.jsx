import React from "react";
import Header from "../../app-ui/Header/Header";
import RoundedSearchInput from "../../app-ui/RoundedSearchInput/RoundedSearchInput";
import { Select } from "antd";
import AffiliateEstablishmentCard from "../../app-ui/AffiliateEstablishmentCard/AffiliateEstablishmentCard";

const ManageEstablishments = () => {
  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      <Header title={"Manage Establishments"}></Header>
      <div className="pt-[20px] pb-[10px] px-[15px] flex far-gap-lg items-center">
        <RoundedSearchInput />{" "}
        <Select placeholder="View by" className="styled-select max-w-[280px]">
          <Select.Option>Most Commission</Select.Option>
          <Select.Option>Least Commission</Select.Option>
          <Select.Option>Most Refund</Select.Option>
          <Select.Option>Most Chargeback</Select.Option>
        </Select>
      </div>
      <div className="p-[15px]">
        <AffiliateEstablishmentCard page="establishments" />
      </div>
    </div>
  );
};

export default ManageEstablishments;
