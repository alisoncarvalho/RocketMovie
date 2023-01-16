import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;

    grid-template-areas: "header" "content";

    >main{
        grid-area: content;
        overflow: auto;
    }

    
    
`;

export const Form = styled.form`
    max-width: 1150px ;
    margin: 40px auto;

    >header{
        a{
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({theme})=>theme.COLORS.PINK};
            margin-bottom: 24px;

        }
    }


    .background{
        background-color: ${({theme})=>theme.COLORS.BLACK};
        height: 88px;
        border-radius: 10px;
    }
    .tags{
        display: flex;
        gap:24px;
        flex-wrap: wrap;
        padding: 13.5px 16px;

        
        
        
        
    }
    .inputs{
        display: flex;
        gap: 40px;
        margin-bottom: 40px;


    }
    

    .textarea{
        height: 270px;

    }

    .buttons{
        display: flex;
        gap:40px;
        
        >button:nth-child(1){
            background-color: ${({theme})=> theme.COLORS.BLACK};
            color: ${({theme})=> theme.COLORS.PINK};
        }

        

            
        
    }

    
    
`;