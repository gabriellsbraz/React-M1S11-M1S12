import { NotFoundStyled } from "./styled"
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button"

function NotFound() {
    const navigate = useNavigate();
    
    return (
        <NotFoundStyled>
            <h1>
                404
            </h1>
            <span>
                NOT FOUND
            </span>
            <Button handleClick={() => navigate(-1)}>
                <span>BACK</span>
            </Button>
        </NotFoundStyled>
    )
}
 

export { NotFound }