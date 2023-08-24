import './ContentTitle.css'

function ContentTitle(): JSX.Element {
    return (
        <div className='content-title'>
            <h1 className='title'>
                <span className='icon'>
                    <i className='fa-solid fa-home'/>
                </span>
                Home
            </h1>
            <p className='subtitle'>Filipe's Dashboard</p>
        </div>
    )
}

export default ContentTitle