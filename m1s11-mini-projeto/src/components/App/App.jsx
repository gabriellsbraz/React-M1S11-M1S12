import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Container } from './styled'
import { RoutesApp } from '../../Routes'

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
