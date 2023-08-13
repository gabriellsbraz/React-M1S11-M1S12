import { HomeStyled } from "./styled"
import { FaDownload } from "react-icons/fa6";
import Button from "../../components/button"

function Home() {
    return(
        <HomeStyled>
            <p>
                Hi 👋, <span> I'm Gabriel.</span>
            </p>
            <p>
                At the moment I'm a Full Stack student, I intend to specialize in Back-end. I'm studying Computer Science, and I'm looking for my first opportunity.
            </p> 
            <Button>
                Download CV <FaDownload />
            </Button>
        </HomeStyled>
    )
}

export { Home };