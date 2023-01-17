import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows:105px auto;
grid-template-areas: 
"header"
"content";

>main{
    grid-area: content;
    overflow-y: auto;
    padding: 0 123px;
}
`;

export const Content = styled.div`
    
    margin: 0 38px;

    >header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 40px 0 ;
            
            
            >h1{
                font-weight: 400;
                font-size: 42px;
            }
            

            
            

        }
    
    
    .filmeUm{
        padding: 32px;
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
        border-radius: 10px;
        margin-bottom: 24px;
        

        h1{
            font-size: 24px;
            margin-bottom: 8px;
        }

        >span{
            display: flex;
            gap: 6px;
        }

        >p{
            margin: 15px 0 30px;
        }

        .tag{
            background-color:${({theme})=>theme.COLORS.GRAY_100};
        }

        a{
            text-decoration: none;
            color: ${({theme})=>theme.COLORS.WHITE};
        }
        
        
    }


`;

export const NewNote = styled(Link)`
grid-area: newnote;
background: ${({theme}) => theme.COLORS.PINK};
border: none;
display: flex;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.COLORS.BLACK};
padding: 0 32px;
border-radius: 8px;
height: 48px;
font-size: 16px;
>svg{
    margin-right: 8px;
    height: 20px;
    width: auto;

}`;