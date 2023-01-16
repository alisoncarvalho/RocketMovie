import { Container, Profile } from "./styles";
import {Input} from "../Input"
import {Link} from "react-router-dom"


export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input className="input" placeholder="Pesquisar pelo título" type="text"/>
            
            <Profile to="/profile">
                <div>
                    <strong>Alison Carvalho</strong>
                    <span><Link to="/logar">Sair</Link></span>
                
                </div>
                <img src="https://github.com/alisoncarvalho.png" alt="" />
            </Profile>
                
            
            
        </Container>
    );
}