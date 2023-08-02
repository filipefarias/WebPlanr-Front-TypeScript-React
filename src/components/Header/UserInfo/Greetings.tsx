import './Greetings.css'

interface Props {
    name: string
    isLogged: boolean
}

function Greetings(props: Props): JSX.Element {
    return (
        props.isLogged ? <h2 className="user-greetings">Hi {props.name}, let's plan togheter!</h2> : <></>
    )
}

export default Greetings
