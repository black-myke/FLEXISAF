import React from 'react'
import Button from './Button'
import Input from './Input'

const LoginForm = (props) => {
  return (
    <div className='container'>
        <h1>Hello</h1>

        <form action="get" className='form'>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegistered ? <Input type="password" placeholder="Confirm Password" /> : null}
            <Button type="submit" option={props.isRegistered ? "Login" : "Register"} />
        </form>
    </div>
  )
}

export default LoginForm