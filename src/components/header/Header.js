import "./Header.css";

const Header = (props)=>{
    return(
        <div>
            <h1 className="main-header">{props.headerText}</h1>
        </div>
    )
}

export default Header;