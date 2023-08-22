import './MenuButton.css'

interface Props {
    icon: string,
    theme: string,
    name?: string,
    isActive?: boolean,
    onClick?: () => void
}

function MenuButton(props: Props): JSX.Element {
    return (
        <button className={`menu-button ${props.theme} ${props.isActive? 'board-active': ''}`} onClick={props.onClick}>
            <p className={`fa-solid ${props.icon}`}></p>
            {props.name}
         
        </button>
    )
}

export default MenuButton