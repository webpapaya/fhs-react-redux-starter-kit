import React from "react";
import { storiesOf } from "@storybook/react";
import { EmailInput } from "./InputField";

storiesOf("InputField", module).add("primary", () => (
    <EmailInput id="newField"></EmailInput>
  ));