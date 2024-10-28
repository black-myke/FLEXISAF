React styled component is a CSS within JS styling solution created to easily style components in React and React Native.
It is a library that is adopted by a large number of companies.
The library automatically keeps track of the rendered components on the screen and inject only thier styles
The library also generates unique className for every style (no need to worry about duplication or overlapping classNames)
The library makes sure that every style is tied to a specific componenet
The library also makes styling props much easier.
The library makes it easy to organize styles.

------------------------------
To use the styled component in a react project, it should be installed by using 'npm install styled-component'
Then it should be imported into the project using "import styled from 'styled-components'"
It is now ready to be used in the project.
For example, if a button element needs to be styled, it be can be done using "styled.button``" which 
can be stored as a component in a variable like "const StyledButton = styled.button``"

Another feature of Styled Component is Polymorphic props where you can specify other tags within a styled component using the "as=' '" attribute.

To use psuedo styling, make use of "&:" e.g &:hover {}


Another cool feature of the Styled Component is the Attribute Constructor which can be used by adding ".attrs({type: ""})" to the styled component. 