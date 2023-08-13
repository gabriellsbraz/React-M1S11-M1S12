import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../footer'
import { Header } from '../header'
import { Container } from './styled'
import { RoutesApp } from '../../routes'

function App() {
  
  return (
    <BrowserRouter>
      <Header />
        <Container>
          <RoutesApp />
        </ Container>
      <Footer />
    </ BrowserRouter>
  )
}

export default App
