import './DashboardItem.css'

interface Props {
    icon: string,
    title: string,
    color: string,
    value: number,
}

function DashboardItem(props: Props): JSX.Element {
    return (
        <div className='dash-item'>
            <div className={`item-shape ${props.color}`}>
                <div className="item-count">
                    <i className={`item-icon fa-regular ${props.icon}`} />
                    <h1>{props.value}</h1>
                </div>
                <p className="item-title">{props.title}</p>
                <div className="item-fade"></div>
            </div>
        </div>
    )
}

export default DashboardItem