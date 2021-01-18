import React from "react";
import { shallow } from "enzyme";
import assert from "assert";

import MathKeyboard from "components/MathKeyboard";

describe("<MathKeyboard />", () => {
  it("should render 25 button options", () => {
    const wrapper = shallow(
      <MathKeyboard
        isDisplayed={true}
        onSubmit={() => {}}
        onKeyEnter={(key: string) => {}}
        moveCursorLeft={() => {}}
        moveCursorRight={() => {}}
        deleteKey={() => {}}
        deleteAll={() => {}}
      />
    );
    assert(wrapper.find("button").length === 25);
  });
});
