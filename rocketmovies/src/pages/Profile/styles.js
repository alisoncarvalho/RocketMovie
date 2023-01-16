import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    >header{
        width: 100%;
        height: 144px;
        background: ${({theme})=>theme.COLORS.BACKGROUND_700};
        display: flex;
        padding: 0 124px;
        
        >a{
            text-decoration:none;
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({theme})=>theme.COLORS.PINK};
        }

        >svg{
            color: ${({theme})=>theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: -80px auto ;

    >div:nth-child(4){
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin:0 auto 32px;
    width: 186px;
    height: 186px;

    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
        margin: 0 auto;
    }

    label{
        width: 48px;
        height: 48px;
        background-color: ${({theme})=>theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        >input{
            display: none;
        }

        >svg{
            height: 20px;
            width: 20px;
            color: ${({theme})=>theme.COLORS.BLACK};
        }

    }
`;
