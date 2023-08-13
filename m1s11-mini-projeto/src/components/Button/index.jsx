import { ButtonStyled } from "./styled";

function Button({children, handleClick}) {
    return(
        <ButtonStyled onClick={handleClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button