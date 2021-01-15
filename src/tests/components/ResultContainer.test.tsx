import React from "react";
import { shallow } from "enzyme";
import assert from "assert";

import ResultContainer from "components/Result/ResultContainer";

describe("<ResultContainer />", () => {
  it("renders <ResultContainer /> component", () => {
    const wrapper = shallow(<ResultContainer />);
  });
});
