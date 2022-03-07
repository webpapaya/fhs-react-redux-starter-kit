import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { InfoButton } from "./Button";

storiesOf("Button", module).add("primary (default)", () => (
  <Button onClick={action("clicked")}>Click me</Button>
));
storiesOf("Button", module).add("InfoButton", () => (
  <InfoButton onClick={action("clicked")}>Click me</InfoButton>
));
