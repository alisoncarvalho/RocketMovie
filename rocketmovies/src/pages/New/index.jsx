import { Container , Form } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import {TextArea} from "../../components/TextArea"
import {Section} from "../../components/Section"
import {NoteItem} from "../../components/NoteItem"
import {Button} from "../../components/Button"
import {Link} from "react-router-dom"


export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <Link to="/"> <FiArrowLeft/> Voltar</Link>
                        <h1>Novo Filme</h1>
                    </header>
                    <div className="inputs">
                    <Input className="input" placeholder="Titúlo" type="text" />
                    <Input className="input" placeholder=" Sua nota (0 a 5)" type="text"/>
                    </div>
                    
                    <TextArea className="textarea" placeholder="Observações" type="text"/>
                    <Section title="Marcadores">
                        <div className="background">
                            <div className="tags">
                                <NoteItem  value="React"/>
                                <NoteItem  placeholder="Novo marcador" isNew/>
                            </div>
                        </div>
                        

                        
                    </Section>
                    <div className="buttons">
                    <Button title="Excluir filme"/>
                    <Button  title="Salvar alterações"/>
                    </div>
                    

                    
                </Form>
            </main>

        </Container>
    )
}