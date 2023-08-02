import './Header.css'
import Logo from './Logo'
import UserInfoBox from './UserInfo/UserInfoBox'

function Header(): JSX.Element {
    return (
        <header className='site-header'>
            <Logo />
            <UserInfoBox />
        </header>
    )
}

export default Header