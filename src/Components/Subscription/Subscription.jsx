import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7402 2.44299L5.58917 10.9116L1.88416 7.06261"
        stroke="#377DFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Subscription() {
  const subscript = [
    {
      id: 1,
      package: "Base",
      desc: "Free start for your project on our platform.",
      price: {
        monthly: 0,
        yearly: 0,
      },
      subscription: {
        monthly: "Per User / Per Month",
        yearly: "Per User / Per Year",
      },
      promotion: "Try for Free",
      suggestion: false,
      features: [
        "Access to editing all blocks",
        "Editing blocks together",
        "Access to all premium icons",
        "A dedicated domain",
        "Ability to integrate with CMS",
      ],
    },
    {
      id: 2,
      package: "Standard",
      desc: "For a small company that wants to show what it's worth.",
      price: {
        monthly: 30,
        yearly: 300,
      },
      subscription: {
        monthly: "Per User / Per Month",
        yearly: "Per User / Per Year",
      },
      promotion: "Start 14 Days Free Trial",
      suggestion: true,
      features: [
        "Access to editing all blocks",
        "Editing blocks together",
        "Access to all premium icons",
        "A dedicated domain",
        "Ability to integrate with CMS",
      ],
    },
    {
      id: 3,
      package: "Unlimited",
      desc: "For a large company that wants to achieve maximum returns",
      price: {
        monthly: 60,
        yearly: 600,
      },
      subscription: {
        monthly: "Per User / Per Month",
        yearly: "Per User / Per Year",
      },
      promotion: "Start 14 Days Free Trial",
      suggestion: false,
      features: [
        "Access to editing all blocks",
        "Editing blocks together",
        "Access to all premium icons",
        "A dedicated domain",
        "Ability to integrate with CMS",
      ],
    },
  ];

  const subscripts = [
    [
      {
        id: 1,
        package: "Base",
        desc: "Free start for your project on our platform.",
        price: {
          monthly: 0,
          yearly: 0,
        },
        subscription: {
          monthly: "Per User / Per Month",
          yearly: "Per User / Per Year",
        },
        promotion: "Try for Free",
        suggestion: false,
        features: [
          "Access to editing all blocks",
          "Editing blocks together",
          "Access to all premium icons",
          "A dedicated domain",
          "Ability to integrate with CMS",
        ],
      },
    ],
    [
      {
        id: 2,
        package: "Standard",
        desc: "For a small company that wants to show what it's worth.",
        price: {
          monthly: 30,
          yearly: 300,
        },
        subscription: {
          monthly: "Per User / Per Month",
          yearly: "Per User / Per Year",
        },
        promotion: "Start 14 Days Free Trial",
        suggestion: true,
        features: [
          "Access to editing all blocks",
          "Editing blocks together",
          "Access to all premium icons",
          "A dedicated domain",
          "Ability to integrate with CMS",
        ],
      },
    ],
    [
      {
        id: 3,
        package: "Unlimited",
        desc: "For a large company that wants to achieve maximum returns",
        price: {
          monthly: 60,
          yearly: 600,
        },
        subscription: {
          monthly: "Per User / Per Month",
          yearly: "Per User / Per Year",
        },
        promotion: "Start 14 Days Free Trial",
        suggestion: false,
        features: [
          "Access to editing all blocks",
          "Editing blocks together",
          "Access to all premium icons",
          "A dedicated domain",
          "Ability to integrate with CMS",
        ],
      },
    ],
  ];
  const [yearly, setYearly] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [optionSub, setOptionSub] = useState(1);
  const open = Boolean(anchorEl);

  const handleOnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setOptionSub(index);
    setAnchorEl(null);
  };

  const handleCancelClick = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mx-4 md:py-32 py-16">
        {/* pricing toggle */}
        <div>
          <h2 className="md:text-3xl text-2xl font-semibold text-center  text-[#090F4E]">
            Expand your option with a subscription
          </h2>
          <p className="text-[#63657E] text-lg text-center md:max-w-3xl mx-auto sm:my-8 my-6 ">
            Graphs displaying your performance for metrics like follower
            evolution, average rate per post and reach and impressions to give
            you the insights.
          </p>
          <div className="flex flex-cols justify-center items-center">
            <span className="me-3 md:text-lg text-base font-medium text-[#63657E] ">
              Bill Monthly
            </span>
            <label className="">
              <input type="checkbox" className="sr-only peer" />
              <div
                onClick={() => {
                  setYearly(!yearly);
                }}
                className="relative w-14 h-7 bg-grey-200 
               rounded-full peer-checked:after:translate-x-full
                rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:start-[4px] 
              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all after:duration-300
               peer-checked:bg-[#2DCA8C]"
              ></div>
            </label>
            <span className="ms-3 md:text-lg text-base font-medium text-[#63657E] ">
              Bill Anually
            </span>
          </div>
        </div>

        {/* pricing tab*/}
        <div className="md:pt-16 pt-12  ">
          <div className="hidden  md:grid gap-2 grid-cols-3 justify-items-center">
            {subscript.map((subData) =>
              // Code for best seller

              subData.suggestion ? (
                <Card
                  aria-checked={yearly}
                  key={subData.id}
                  color="white"
                  variant="gradient"
                  className="w-full max-w-[350px] lg:p-8 p-6 shadow-2xl flex justify-center border-2 border-[#F5F6FA]"
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10  "
                  >
                    <h2 className="lg:text-[28px] text-2xl text-[#090F4E] font-semibold ">
                      {subData.package}
                    </h2>
                    <p className="lg:text-base md:text-sm text-[#63657E] lg:py-5 py-3 lg:pr-7 pr-3 ">
                      {subData.desc}
                    </p>
                    <div className=" flex items-baseline lg:gap-4 gap-2 border-b-2 pb-4">
                      <span className="lg:text-[42px] text-3xl font-semibold text-[#090F4E]">
                        ${yearly ? subData.price.yearly : subData.price.monthly}
                      </span>{" "}
                      <span className="lg:text-base md:text-sm font-medium">
                        {yearly
                          ? subData.subscription.yearly
                          : subData.subscription.monthly}
                      </span>
                    </div>
                  </CardHeader>

                  <CardBody className="p-0">
                    <ul className="flex flex-col lg:gap-4 gap-2">
                      {subData.features.map((feature, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center lg:gap-4 gap-3"
                          >
                            <span className="rounded-full border  border-white/20 bg-[#E5F1FF]  p-1">
                              <CheckIcon />
                            </span>
                            <span className="font-normal lg:text-base text-sm">
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardBody>

                  <CardFooter className="mt-12 p-0">
                  {subData.suggestion ? (
                    <Button
                      size="lg"
                      color="white"
                      className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 normal-case bg-[#293FCC] text-[#ffff] text-[20px] font-medium p-5"
                      ripple={false}
                      fullWidth={true}
                    >
                      <p>{subData.promotion}</p>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      color="white"
                      className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 normal-case bg-[#E5F1FF] text-[#293FCC] text-[20px] font-medium  p-5"
                      ripple={false}
                      fullWidth={true}
                    >
                      <p>{subData.promotion}</p>
                    </Button>
                  )}
                </CardFooter>
                </Card>
              ) : (
                <Card
                  shadow={false}
                  aria-checked={yearly}
                  key={subData.id}
                  color="white"
                  variant="gradient"
                  className="w-full max-w-[350px] lg:p-8 p-6 flex justify-center border-2 border-[#F5F6FA] "
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10  "
                  >
                    <h2 className="lg:text-[28px] text-2xl text-[#090F4E] font-semibold ">
                      {subData.package}
                    </h2>
                    <p className="lg:text-base md:text-sm text-[#63657E] lg:py-5 py-3 lg:pr-7 pr-3 ">
                      {subData.desc}
                    </p>
                    <div className=" flex items-baseline lg:gap-4 gap-2 border-b-2 pb-4">
                      <span className="lg:text-[42px] text-3xl font-semibold text-[#090F4E]">
                        ${yearly ? subData.price.yearly : subData.price.monthly}
                      </span>{" "}
                      <span className="lg:text-base md:text-sm font-medium">
                        {yearly
                          ? subData.subscription.yearly
                          : subData.subscription.monthly}
                      </span>
                    </div>
                  </CardHeader>

                  <CardBody className="p-0">
                    <ul className="flex flex-col lg:gap-4 gap-2">
                      {subData.features.map((feature, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center lg:gap-4 gap-3"
                          >
                            <span className="rounded-full border  border-white/20 bg-[#E5F1FF]  p-1">
                              <CheckIcon />
                            </span>
                            <span className="font-normal lg:text-base text-sm">
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardBody>

                  <CardFooter className="mt-12 p-0">
                  {subData.suggestion ? (
                    <Button
                      size="lg"
                      color="white"
                      className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 normal-case bg-[#293FCC] text-[#ffff] text-[20px] font-medium p-5"
                      ripple={false}
                      fullWidth={true}
                    >
                      <p>{subData.promotion}</p>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      color="white"
                      className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 normal-case bg-[#E5F1FF] text-[#293FCC] text-[20px] font-medium  p-5"
                      ripple={false}
                      fullWidth={true}
                    >
                      <p>{subData.promotion}</p>
                    </Button>
                  )}
                </CardFooter>
                </Card>
              )
            )}
          </div>

          <div className="md:hidden flex justify-center">
            {subscripts[optionSub].map((subDatas) => (
              <Card
                aria-checked={yearly}
                key={subDatas.id}
                color="white"
                variant="gradient"
                className=" max-w-[350px] p-8 border-2 border-[#F5F6FA] "
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 mb-8 rounded-none border-b border-white/10 "
                >
                  <h2 className="text-[28px] text-[#090F4E] font-semibold ">
                    {subDatas.package}
                    <IconButton
                      onClick={handleOnClick}
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                    >
                      <ArrowDropDownIcon />
                    </IconButton>

                    <Menu
                      id="lock-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleCancelClick}
                      MenuListProps={{
                        "aria-labelledby": "lock-button",
                        role: "listbox",
                      }}
                    >
                      {subscript.map((option, index) => {
                        return (
                          <MenuItem
                            key={option.id}
                            selected={index === optionSub}
                            onClick={(e) => handleMenuItemClick(e, index)}
                          >
                            {option.package}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </h2>

                  <p className="text-base text-[#63657E] py-5 ">
                    {subDatas.desc}
                  </p>
                  <div className=" flex  items-center  gap-5 border-b-2 pb-4">
                    <span className=" text-[42px] font-semibold text-[#090F4E]">
                      ${yearly ? subDatas.price.yearly : subDatas.price.monthly}
                    </span>{" "}
                    <span className="self-end text-base font-medium">
                      {yearly
                        ? subDatas.subscription.yearly
                        : subDatas.subscription.monthly}
                    </span>
                  </div>
                </CardHeader>

                <CardBody className="p-0">
                  <ul className="flex flex-col gap-4">
                    {subDatas.features.map((feature, index) => {
                      return (
                        <li key={index} className="flex items-center gap-4">
                          <span className="rounded-full border  border-white/20 bg-[#E5F1FF]  p-1">
                            <CheckIcon />
                          </span>
                          <span className="font-normal">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>

                <CardFooter className="mt-12 p-0">
                  {subDatas.suggestion ? (
                    <Button
                      size="lg"
                      color="white"
                      className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 normal-case bg-[#293FCC] text-[#ffff] text-[20px] font-medium p-5"
                      ripple={false}
                      fullWidth={true}
                    >
                      <p>{subDatas.promotion}</p>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      color="white"
                      className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 normal-case bg-[#E5F1FF] text-[#293FCC] text-[20px] font-medium  p-5"
                      ripple={false}
                      fullWidth={true}
                    >
                      <p>{subDatas.promotion}</p>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
