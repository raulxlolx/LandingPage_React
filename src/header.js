import "./header.css";
import logo from "./images/logo192.png";
function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo"></img>
            </div>
            <h1>Landing page Realizada Con React</h1>
        </div>
    );
}
export default Header;