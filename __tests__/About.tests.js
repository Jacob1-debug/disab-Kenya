import React from "react";
import { shallow } from "enzyme";
import About from "../pages/About";

describe("About component", () => {
  it("should render a heading", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("h2").text()).toBe("About:Heading");
  });

  it("should render two cards", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(".bg-[#F7FAFD]").length).toBe(2);
  });

  it("should render an image in each card", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("img").length).toBe(2);
  });

  it("should render the correct text in each card", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(".AllertaStencil_font").at(0).text()).toBe("About:cardHeading1");
    expect(wrapper.find(".AllertaStencil_font").at(1).text()).toBe("About:cardHeading");
    expect(wrapper.find(".Actor_font").at(0).text()).toBe("About:cardText2");
    expect(wrapper.find(".Actor_font").at(1).text()).toBe("About:cardText");
  });
});

// describe("getStaticProps function", () => {
//   it("should return the correct props", async () => {
//     const props = await About.getStaticProps({ locale: "en" });
//     expect(props).toEqual({
//       props: {
//         common: {...},
//         Header: {...},
//         About: {...},
//         footer: {...},
//         navbar: {...}
//       }
//     });
//   });
// });

