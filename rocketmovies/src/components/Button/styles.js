import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color:${({theme})=> theme.COLORS.PINK};
color: ${({theme})=> theme.COLORS.BLACK};

height: 56px;
border: 0;
border-radius: 10px;
padding: 0 16px;
margin-top: 16px;
font-weight: 500;


&:disabled{
    opacity: calc(.5);

}
`;