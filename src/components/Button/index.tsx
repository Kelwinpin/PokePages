import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren{
    children?: React.ReactNode
    onClick: () => void
}

export default function Button({children, onClick}: ButtonProps) {
    return(
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}