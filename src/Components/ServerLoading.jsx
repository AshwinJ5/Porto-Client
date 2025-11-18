import logo from '../assets/portoDark.svg'

const ServerLoading = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 vh-100 gap-4 loading-container">
            <img src={logo} className="loading-logo" alt="logo" />
            <p className="loading-text">The server is starting up—thanks for your patience!</p>
        </div>

    )
}

export default ServerLoading