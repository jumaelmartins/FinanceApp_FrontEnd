import { Link } from 'react-router-dom'
import './Button.scss'

const Button = ({modifier, text, to}) => {
    return (
        <Link to={to} className={"btn "+modifier}>
            {text}
        </Link>
    )
}

export default Button;