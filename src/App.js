import React, { useState } from 'react'
import { useFormik } from 'formik'
import { object, string } from 'yup'

const Navigation = ({ user }) => {
  return (<nav>{user.name}</nav>)
}

const App = () => {
  const [user, setUser] = useState({ name: 's' })

  return (
    <div>
        <Navigation user={user} />
        <UserForm user={user} onUpdateUser={setUser} />
    </div>
  )
}

const userSchema = object({
  name: string().min(3)
})

const UserForm = ({ user, onUpdateUser }) => {
  const formik = useFormik({
    initialValues: user,
    validationSchema: userSchema,
    onSubmit: (values) => {
      onUpdateUser({ name: values.name })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      { formik.errors.name }

      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
