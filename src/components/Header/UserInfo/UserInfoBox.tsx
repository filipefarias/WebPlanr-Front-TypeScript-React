import Greetings from './Greetings'
import './UserInfoBox.css'

function UserInfoBox(): JSX.Element {
    return (
        <div className='user-box'>
            <Greetings name='Filipe' isLogged={true} />
        </div>
    )
}

export default UserInfoBox