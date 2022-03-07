import React from "react";
import styles from "./SignIn.module.css";
import { EmailInput } from "./InputField";
import { PasswordInput } from "./InputField";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { InfoButton } from "./Button";

export const SignIn = () => {
  return (
    <form className={`${styles.form}`}>
      <label for="email">Email:</label>
      <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <Button onClick={action("clicked")}>Sign up</Button>
      <InfoButton onClick={action("clicked")}>Sign in</InfoButton>
    </form>
  )
}

export const SignUp = () => {
  return (
    <form className={`${styles.form}`}>
      <label for="email">Email:</label>
      <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <Button onClick={action("clicked")}>Sign in</Button>
      <InfoButton onClick={action("clicked")}>Sign up</InfoButton>
    </form>
  )
}
