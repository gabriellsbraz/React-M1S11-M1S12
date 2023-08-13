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
      route: "/portfolio",
      description: "Portfolio"
    },
    {
      route: "/aboutMe",
      description: "About Me"
    }
  ]
  return (
    <HeaderStyled>
      <Link className="logo" to="/">
        <FaTerminal size={30} />
        <h2>GABRIEL</h2>
      </Link>
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