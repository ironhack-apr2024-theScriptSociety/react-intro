
function Footer(props){

    return (
        <footer>
            <h5>This is the footer</h5>
            {props.children}
        </footer>
    );
}

export default Footer;