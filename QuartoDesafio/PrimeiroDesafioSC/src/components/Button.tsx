import { ButtonHTMLAttributes } from 'react'
import './ComponentsStyle/button.scss'

// isso e uma snipet de codigo que eu ja tinha so estou editando e reusando , voce pode encontrar no primeiro repositorio que aparece no meu perfil
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    primary?: boolean
};

export function Button({ primary = false, ...props }: ButtonProps) {
    return (
        <button
            className={`button ${primary ? 'outlined' : ''}`}
            {...props} />
    )
}