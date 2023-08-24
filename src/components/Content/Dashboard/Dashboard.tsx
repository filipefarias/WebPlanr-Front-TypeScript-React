import './Dashboard.css'
import DashboardItem from './DashboardItem'

function Dashboard(): JSX.Element {
    return (
        <div className="dashboard">
            <h1 className='dash-title'>Tasks</h1>
            <div className="dash-items">
                <DashboardItem color='yellow' icon='fa-clock' value={2} title='Waiting Completion' />
                <DashboardItem color='orange' icon='fa-bell' value={2} title='Important' />
                <DashboardItem color='green' icon='fa-circle-check' value={2} title='Completed' />
            </div>
        </div>
    )
}

export default Dashboard