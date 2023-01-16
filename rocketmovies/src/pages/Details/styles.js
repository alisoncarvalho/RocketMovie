import styled from 'styled-components'


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
    padding: 40px 170px;
}
`;

export const Content = styled.div`

a{
    color: ${({theme})=> theme.COLORS.PINK};

    display: flex;
    flex-direction: row;
    align-items: center;
    
    gap:8px;
    margin-bottom: 24px;
    
};
h1{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    
    >svg{
        
        color:${({theme})=>theme.COLORS.BACKGROUND_900};
        fill:${({theme})=>theme.COLORS.PINK};


    }
    >svg:nth-child(1){
        margin-left:19px;
    }
};

h3 img{
    height: 20px;
    border-radius:50% ;
}
    
.tags{
    margin-bottom: 40px;
    display: flex;
    gap: 8px;
    font-size: 12px;
}

h3{
   
    display: flex;
    align-items: center;
    gap:8px;

    margin-bottom: 40px;
    >svg{
    color: ${({theme})=>theme.COLORS.PINK};

    
    

};



p{
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    



}


 

 




}
`;



