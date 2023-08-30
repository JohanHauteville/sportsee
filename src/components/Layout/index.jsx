import Header from "../Header";
import NavBar from "../NavBar";
import './style.scss'

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="nav-main">
                <NavBar />

                {children}

            </div>
        </>
    )
}

export default Layout