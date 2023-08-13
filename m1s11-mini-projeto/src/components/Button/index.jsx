import { ButtonStyled } from "./styled";

function Button({children}) {
    return(
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}

export default Button