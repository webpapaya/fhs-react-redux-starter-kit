import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styles from "./InputField.module.css";

export const EmailInput = (idField) => {
    return (
        <input type="text" id={idField} class={`${styles.inputField}`}></input>
        )
}

export const PasswordInput = (idField) => {
    return (
        <input type="password" id={idField} class={`${styles.inputField}`}></input>
        )
}

export const TextInput = (idField) => {
    return (
        <input type="text" id={idField} class={`${styles.inputField}`}></input>
        )
}

export const DecimalInput = (idField) => {
    return (
        <input type="number" id={idField} class={`${styles.inputField}`}></input>
        )
}

