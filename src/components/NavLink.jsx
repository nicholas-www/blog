import './NavLink.css';

const NavLink = (props) => {
    return (
        <a href={props.href} className={props.state}><li>{props.text}</li></a>
    );
}

export default NavLink;