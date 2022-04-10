import * as React from "react"
import { StyledLoginBox } from "./login-box.styles"
import Input from "./Input/Input"
import Label from "./Label/Label"
import Button from "./Button/Button"

const LoginBox = ({ ...props }) => {
  return (
    <StyledLoginBox {...props}>
      <div>
        <div className='login-box--field-wrapper'>
          <Label>Correo Electronico</Label>
          <Input type='text' />
        </div>
        <div className='login-box--field-wrapper'>
          <Label>Contraseña</Label>
          <Input type='password' />
        </div>
      </div>
      <div className='login-box--forgot-password'>
        <span>Olvidé mi contraseña</span>
      </div>
      <div className='login-box--submit'>
        <Button buttonType='submit'>Iniciar Sesión</Button>
      </div>
    </StyledLoginBox>
  )
}

export default LoginBox