import styled from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.header`
grid-area: header;
height: 105px;
width: 100%;
border-bottom-width:1px;
border-bottom-style: solid ;
color:${({theme})=> theme.COLORS.GRAY};




display: flex;
justify-content: space-between;
padding: 0 174px;
align-items: center;
gap: 64px;


h1{
    color:${({theme})=>theme.COLORS.PINK} ;
    font-size: 24px;
}
a{
    text-decoration: none;
    color: ${({theme})=>theme.COLORS.GRAY};
}

img {
    height: 64px;
    border-radius: 50%;
    border: solid 1px ${({theme})=>theme.COLORS.GRAY};
}

.input{
    
    height: 56px;
    margin: 0 auto;
    
}


`;

export const Profile = styled(Link)`
display: flex;
align-items: center;
gap: 16px;
>div{
    display: flex;
    flex-direction: column;
    
    line-height: 24px;
    width: 150px;

    span{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-left: 110px;
        

    }

    strong{
        font-size: 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
        

    }
}
`;

