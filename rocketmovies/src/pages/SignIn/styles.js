import styled from "styled-components"
import backgroundImg from '../../assets/something-magical-SdjA-_Xzuxg-unsplash.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    >h1{
        font-size: 48px;
        color: ${({theme})=>theme.COLORS.PINK};
        align-items: center;
    text-align: center;

    }
    >p{
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY};
        align-items: center;
        text-align: center;

    }

    >h2{
        font-size: 24px;
        margin: 48px 0;

        
    }

    >a{
        text-decoration: none;
        text-align: center;
        margin-top: 42px;
        color:${({theme})=>theme.COLORS.PINK};
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.7;

`;

