import { FooterStyled } from "./styled";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <FooterStyled>
      <h3>Gabriel de Lima | Desenvolvedor</h3>
      <a href="https://github.com/gabriellsbraz">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/gabriel-lima-37a13826a/">
        <FaLinkedin />
      </a>
    </FooterStyled>
  )
}

export {Footer};