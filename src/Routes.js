import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { createPortal } from 'react-dom'

const SignIn = React.lazy(() => import('./sign-in'))
const SignUp = React.lazy(() => import('./sign-up'))

export const Routes = () => {
    return (
        <Router>
            <Route path="sign-in" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SignIn />
                </Suspense>
            }/>
            <Route path="sign-up" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <SignIn />
                </Suspense>
            }/>
        </Router>
    )
}
