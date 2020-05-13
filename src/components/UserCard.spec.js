import React from "react";
import UserCard from "./UserCard";
import { shallow } from "enzyme";

function createMockUser() {
  return {
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
  };
}

describe("UserCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserCard user={createMockUser()} />);
  });

  it("render without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should be expanded to view user content", () => {
    expect(wrapper.find("UserInfo").exists()).toBe(true);
  });

  it("should not should user content is not expanded", () => {
    wrapper.find("#mobile-expand-button").simulate("click");
    expect(wrapper.find("UserInfo").exists()).toBe(false);
  });

  it("should toggle expansion", () => {
    wrapper.find("#mobile-expand-button").simulate("click");
    expect(wrapper.find("UserInfo").exists()).toBe(false);
    wrapper.find("#mobile-expand-button").simulate("click");
    expect(wrapper.find("UserInfo").exists()).toBe(true);
  });
});
