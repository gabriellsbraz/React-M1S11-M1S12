import { Link } from "react-router-dom";
import { HeaderStyled, NavStyled } from "./styled";
import { FaTerminal } from 'react-icons/fa';


function Header() {
  const pages = [
    {
      route: "/",
      description: "Home"
    },
    {
      route: "/",
      description: "Skils"
    },
    {
      route: "/aboutMe",
      description: "About Me"
    }
  ]
  return (
    <HeaderStyled>
      <div className="logo">
        <FaTerminal />
        <h2>Gabriel de Lima</h2>
      </div>
      <NavStyled>
        {
          pages.map(({route, description}) => {
            return (
              <Link key={route} to={route}>{description}</Link>
            )
          })
        }
      </NavStyled>
    </HeaderStyled>
  );
}

export { Header };