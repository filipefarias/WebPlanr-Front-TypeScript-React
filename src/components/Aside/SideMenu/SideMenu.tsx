import MenuButton from '../MenuButton/MenuButton'
import './SideMenu.css'

function SideMenu(): JSX.Element {
    return (
        <div className='side-menu'>
            <MenuButton icon='fa-pen-to-square' theme='create-task' name='Create Task'/>
            <MenuButton icon='fa-house' theme='board' name='Home'/>
            <MenuButton icon='fa-list-check' theme='board' name='Tasks'/>
            <MenuButton icon='fa-clipboard-list' theme='board' name='Boards'/>
            <MenuButton icon='fa-user' theme='board' name='User'/>
        </div>
    )
}

export default SideMenu