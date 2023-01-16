import { Container , Form , Avatar } from "./styles"
import {FiUser , FiMail, FiLock , FiArrowLeft , FiCamera} from "react-icons/fi"
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {Link} from "react-router-dom"

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/> Voltar</Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/alisoncarvalho.png" alt="foto do usuário"/>
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"></input>
                    </label>
                </Avatar>
                <Input placeholder="Nome"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha atual "/>
                <Input placeholder=" Nova senha"/>
                <Button title="Salvar"/>

            </Form>
            
        </Container>
    )
}
