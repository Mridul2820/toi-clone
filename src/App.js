import { Container } from '@material-ui/core'
import React from 'react'
import Header from './Sections/Header'
import LiveNews from './Sections/LiveNews'
import './styles/app.scss'

// const baseURL = 'https://content.guardianapis.com/'
// const apiKey = `api-key=${process.env.REACT_APP_API_KEY}`

const App = () => {
    return (
        <div>
            <Header />
            <Container>
                <LiveNews />
            </Container>
        </div>
    )
}

export default App

