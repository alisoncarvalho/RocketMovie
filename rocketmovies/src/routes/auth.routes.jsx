import {Routes , Route} from "react-router-dom"

import {SignIn} from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/cadastrar" element={<SignUp/>}/>
            <Route path="/logar" element={<SignIn/>}/>
            
        </Routes>
    )
}