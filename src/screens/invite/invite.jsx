import React from "react";
import Header from "../../app-ui/Header/Header";
import { Checkbox, Col, Popover, Row } from "antd";
import CopyIcon from "../../assets/icons/copy.svg";
import Button from "../../app-ui/Button/Button";
import { QRCodeCanvas } from "qrcode.react";
import { FiTrash } from "react-icons/fi";
import { AiOutlineReload } from "react-icons/ai";
import { toBlob } from "html-to-image";
import { saveAs } from "file-saver";

const Invite = () => {
  const csvPath = "/foodchoo_establishment_invite_sample.csv";

  const data = [
    {
      establishmentName: "Faizu",
      email: "rfaizan383@gmail.com",
      ownerName: "Faizan",
      invitedAt: "06 August 2024",
    },
    {
      establishmentName: "Xavier Barnett",
      email: "rupaqily@mailinator.com",
      ownerName: "Anne Doyle",
      invitedAt: "23 July 2024",
    },
    {
      establishmentName: "Baxter Key",
      email: "pobuge@mailinator.com",
      ownerName: "Jena Baird",
      invitedAt: "23 July 2024",
    },
  ];

  const content = (
    <div>
      <Button
        align="left"
        autoHeight
        padding="py-1"
        theme="light"
        onClick={() => copyTextToClipboard(userData?.referral_url)}
      >
        Copy
      </Button>
      <Button
        align="left"
        autoHeight
        padding="py-1"
        theme="light"
        onClick={() => {
          setInviteModal(true);
        }}
      >
        Send Invite
      </Button>
    </div>
  );

  function downloadQR() {
    const node = document.getElementById("qrCodeEl");

    toBlob(node)
      .then((blob) => {
        saveAs(blob, "qr-code.png");
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  }

  return (
    <div className="flex-grow flex flex-col overflow-hidden">
      <Header title={"Invite Establishment"}></Header>
      <div className="py-10 text-center">
        <h2 className="font-medium">
          We have 3 ways helping you onboard your list contact to Find a
          Recruiter.
        </h2>
      </div>
      <Row className="flex">
        <Col lg={10} md={10} className="flex-1 border-r">
          <div className="p-[10px]">
            <p className="mb-3">
              This is your unique code to share with your Owners of restaurants,
              cafes and other dining establishments.
            </p>
            <p className="mb-3">
              Make sure to tell them to open the link on their Android tablet or
              iPad, as it will take them to the App Store or Google Play to
              install the Find a Recruiter Establishment app.
            </p>
            <b>
              THEY MUST INSTALL THE APP FROM THIS LINK OR THEY WILL NOT BE
              LINKED TO YOU FOR YOU TO RECEIVE ONGOING COMMISSIONS.
            </b>
            <div className="shadow-theme-1 p-2 w-max mt-4 ml-2">
              <div className="bg-gray-100 p-4 flex far-gap-sm">
                <span className="text-xs">
                  https://establishment.findarecruiter.com/wJeWCMto6tGHsBbT7
                </span>
                <Popover
                  className="cursor-pointer"
                  trigger={["click"]}
                  placement="bottom"
                  content={content}
                >
                  <img src={CopyIcon} alt="copy" />
                </Popover>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4}>
          <div className="col-center">
            <div id="qrCodeEl" className="w-max mb-6">
              <QRCodeCanvas value={"^^BOOM^^"} />
            </div>
            <Button onClick={downloadQR}>Download QR</Button>
          </div>
        </Col>
        <Col lg={10} md={10} className="flex-1 border-l">
          <div className="p-[10px]">
            <p className="mb-3">
              {" "}
              You can upload a CSV of your Establishments and mass-invite them
              with a personalised email.
            </p>
            <p className="mb-3">
              Once you upload them, you'll get a chance to review the email with
              a test send to yourself, before allowing Find a Recruiter to email
              them all at once.
            </p>
            <p className="mb-3">
              The CSV JUST needs their first name, email and Establishment name,
              nothing more.
            </p>

            <div className="flex w-max m-auto far-gap-md mt-4">
              <Button>Upload CSV +</Button>
              <a href={csvPath} download>
                <Button theme="tertiary">Download Sample CSV</Button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-4">
        {/* Table Header */}
        <div className="flex bg-gray-200 p-2">
          <div className="flex-1 max-w-[160px]"></div>
          <div className="flex-1">Establishment Name</div>
          <div className="flex-1">Email</div>
          <div className="flex-1">Owner's Name</div>
          <div className="flex-1">Invited At</div>
          <div className="flex-1 max-w-[160px]"></div>
        </div>
        {/* Table Body */}
        {data.map((item, index) => (
          <div key={index} className="flex border-b p-2 items-center">
            <div className="flex-1 max-w-[160px]">
              <Checkbox className="mr-2" />
            </div>
            <div className="flex-1">{item.establishmentName}</div>
            <div className="flex-1">{item.email}</div>
            <div className="flex-1">{item.ownerName}</div>
            <div className="flex-1">{item.invitedAt}</div>
            <div className="flex-1 flex justify-center far-gap-sm max-w-[160px]">
              <Button theme="success" rounded="rounded-full" iconStyle>
                <AiOutlineReload className="text-xl" />
              </Button>
              <Button theme="danger" rounded="rounded-full" iconStyle>
                <FiTrash className="text-xl" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invite;
