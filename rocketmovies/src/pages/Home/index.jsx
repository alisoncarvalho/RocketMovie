import { Container , Content , NewNote } from "./styles";
import {Button} from "../../components/Button"
import { FiStar, FiPlus } from "react-icons/fi";
import {Tag} from "../../components/Tag"
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Content>
                    <header>
                        <h1>Meus filmes</h1>
                        <NewNote to="/New">
                            <FiPlus/>
                            Adicionar filme
                        </NewNote>
                    </header>
                    <div className="filmeUm">
                        <h1><Link to="/details/1">Interstellar</Link></h1>
                        <span><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></span>
                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
                        <div className="tags">
                            <Tag className="tag" title="Ficção Científica"/>
                            <Tag className="tag" title="Drama"/>
                            <Tag className="tag" title="Família"/>
                        </div>
                        
                    </div>
                    <div className="filmeUm">
                        <h1><Link to="/details/1">Interstellar</Link></h1>
                        <span><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></span>
                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
                        <div className="tags">
                            <Tag className="tag" title="Ficção Científica"/>
                            <Tag className="tag" title="Drama"/>
                            <Tag className="tag" title="Família"/>
                        </div>
                        
                    </div>
                    <div className="filmeUm">
                        <h1><Link to="/details/1">Interstellar</Link></h1>
                        <span><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></span>
                        <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
                        <div className="tags">
                            <Tag className="tag" title="Ficção Científica"/>
                            <Tag className="tag" title="Drama"/>
                            <Tag className="tag" title="Família"/>
                        </div>
                        
                    </div>
                    
                    
                
                </Content>
                            
            </main>
        </Container>
    )
}