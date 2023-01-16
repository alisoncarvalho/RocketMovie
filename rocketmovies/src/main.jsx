import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import { ThemeProvider} from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from './styles/global'
import {New} from "../../rocketmovies/src/pages/New"
import {SignIn} from "../../rocketmovies/src/pages/SignIn"
import {SignUp} from "../../rocketmovies/src/pages/SignUp"
import {Profile} from "../../rocketmovies/src/pages/Profile"
import {Home} from "../../rocketmovies/src/pages/Home"


import {Routes} from "../../rocketmovies/src/routes"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>

    </ThemeProvider>
    
  </React.StrictMode>,
)
