import React from 'react'
import styles from './SignUp.module.css'
import { InputField } from './InputField'
import { Button } from './Button'

export const SignUp = () => (
    <div className={styles.formularWrapper}>
        <form className={styles.signinformular}>
            <InputField type="email" name="email" title="Email"/>
            <InputField type="password" name="password" title="Password"/>
            <Button isPrimary={true}>
                Sign Up
            </Button>
            <Button isPrimary={false}> Sign In </Button>
        </form>
    </div>
)
