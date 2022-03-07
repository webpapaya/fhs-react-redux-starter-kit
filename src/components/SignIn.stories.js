import React from "react";
import { storiesOf } from "@storybook/react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignIn";

storiesOf("Forms", module).add("SignIn Form", () => (
    <SignIn />
  ));


  storiesOf("Forms", module).add("SignUp Form", () => (
    <SignUp />
  ));