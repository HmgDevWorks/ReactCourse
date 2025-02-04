function TabButton(props) {
    return (
        <li><button onClick={props.onClick}>{props.children}</button></li>
    );
}

export default TabButton;