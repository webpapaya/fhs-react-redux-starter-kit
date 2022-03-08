import React from 'react'
import { Button } from './Button'
import { InputField } from './InputField'
import styles from './SignIn.module.css'

export const SignIn = () => (
    <div className={styles.formularWrapper}>
        <form className={styles.signinformular}>
            <InputField type="email" name="email" title="Email"/>
            <InputField type="password" name="password" title="Password"/>
            <Button isPrimary={true}>
                Sign In
            </Button>
            <Button isPrimary={false}> Sign Up </ Button>
        </form>
    </div>
)
