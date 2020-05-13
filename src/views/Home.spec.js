import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

jest.mock("@api", () => {
  const mockUsers = [
    {
      id: 6,
      firstName: "Harmonie",
      lastName: "Loisi",
      email: "hloisi5@trellian.com",
      gender: "Female",
      appVersion: "6.5.0",
      profilePhotoUrl:
        "https://robohash.org/dolorquisaut.jpg?size=50x50&set=set1",
      location: {
        city: null,
        company: "UK Ministry of Defence",
        continentCode: "EU",
        countryName: "United Kingdom",
        countryCode: "GB",
        isp: "UK Ministry of Defence",
        lat: 51.4964,
        lng: -0.1224,
      },
      fullName: "Harmonie Loisi",
      meta: {
        address: "Barnett",
        ipAddress: "25.35.214.138",
        bio: "Suspendisse potenti.",
      },
    },
  ];

  return {
    users: {
      getUsers: jest.fn().mockResolvedValue(mockUsers),
      getUser: jest.fn().mockResolvedValue(mockUsers[0]),
    },
  };
});

const mockUseEffect = () => {
  React.useEffect.mockImplementationOnce((f) => f());
};

describe("Home", () => {
  let wrapper;
  let useEffect;
  let didRenderMock = jest.fn();

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    wrapper = shallow(<Home didRender={didRenderMock} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should call didRender on initial load", () => {
    expect(didRenderMock).toHaveBeenCalledTimes(1);
  });
});
