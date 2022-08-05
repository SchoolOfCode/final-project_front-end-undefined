import Logo from "./Logo"


const Layout = ({ children }) => {
    return (
        <div className="content">
            <Logo />
            { children }
        </div>
    );
}

export default Layout;