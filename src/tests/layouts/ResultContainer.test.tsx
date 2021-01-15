import React from "react";
import { shallow } from "enzyme";
import assert from "assert";

import Calculator from "layouts/Calculator";

describe.only("<Calculator />", () => {
  it("renders <Calculator /> component", () => {
    const wrapper = shallow(<Calculator />);
    assert(wrapper.find("div").children().length === 3);
  });
});
