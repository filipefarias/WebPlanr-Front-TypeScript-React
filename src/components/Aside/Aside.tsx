import './Aside.css'
import MenuButton from './MenuButton/MenuButton'
import SideMenu from './SideMenu/SideMenu'

interface Props {
    state: boolean,
    setState: () => void
}

function Aside(props: Props): JSX.Element {
    return (
        <aside className={`site-aside ${props.state ? 'opened-aside' : 'collapsed-aside'}`}>
            <SideMenu />
            <MenuButton icon={props.state ? 'fa-angles-left' : 'fa-angles-right'} theme='toggle-aside' onClick={() => props.setState()}/>
        </aside>
    )
}

export default Aside