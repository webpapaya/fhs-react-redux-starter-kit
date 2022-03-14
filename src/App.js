import React, { useState } from 'react'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Navigation = ({ user }) => {
  return (
    <nav>
      Navigation: {user.name}
      <Link to='/'>Home</Link>
      <Link to='/user'>User</Link>
    </nav>
  )
}

const App = () => {
  const [user, setUser] = useState({ name: 'test' })

  return (
    <Router>
      <Navigation user={user} />
      <Routes>
        <Route
          path='/user'
          element={<UserForm user={user} onUpdateUser={setUser} />}
        />
        <Route path='/' element={<div>Home</div>} />
      </Routes>
    </Router>
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
