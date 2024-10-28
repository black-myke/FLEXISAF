import styled from 'styled-components';


export const StyledButton = styled.button`
    border: 2px solid #009922;
    background-color: ${(props) => props.variant === 'outline' ? '#fff' : '#009922'}; // Using props for conditional styling
    color: ${(props) => props.variant === 'outline' ? '#000000' : '#FFFFFF'};
    padding: 15px 32px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 0ms.15s all ease-out;

    // Psuedo STylying with Styled Components
    &:hover{
        background-color: ${(props) => props.variant !== 'outline' ? '#fff' : '#009922'};
        color: ${(props) => props.variant !== 'outline' ? '#000000' : '#FFFFFF'};
    }
`

// Extending Styles: Using the same styling component but change few properties
export const UniqueButton = styled(StyledButton)` //Extending the StyledButton to use in UniqueButton
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`

// HTML Attribute props with Styled Components

export const SubmitButton =styled(StyledButton).attrs({
    type: "submit"
})`
    box-shadow: 0 9px #999;
    &:active{
        background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY()4px;
    }
`

