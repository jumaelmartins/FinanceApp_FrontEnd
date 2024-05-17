import './Button.scss'

const Button = ({modifier, text}) => {
    return (
        <button className={"btn "+modifier}>
            {text}
        </button>
    )
}

export default Button;