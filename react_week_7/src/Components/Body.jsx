import React from 'react'
import { StyledButton, UniqueButton, SubmitButton } from './Button_Component/Button.style';
import Header, {Footer} from './Heading_Components/Heading';
import { Container } from './Container';
import Image from './Gallery_Component/Image';


const Body = () => {

    const date = new Date().getFullYear();
    

  return (
    <div>
        <Header>React Styled Components</Header>


        <Container>
        <StyledButton>StyledButton</StyledButton>
        <StyledButton variant="outline">StyledButton</StyledButton>
        <UniqueButton as="a">Unique Button</UniqueButton> {/* Polymorphic props was used here */}
        <SubmitButton>Submit</SubmitButton> {/* This Button is differentiated from the other buttons because its attribute is set to submit right from the styled component submit */}
        </Container>

        <Image />


        <Footer>Copyright &copy; {date} </Footer>
    </div>
  )
}

export default Body