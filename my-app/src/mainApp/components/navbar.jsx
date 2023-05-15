import "../style/navbar.css";

import { Button } from 'react-bootstrap';

function Navbar({ updateView }){

    const handleClick = (button) => {
        updateView(button);
    };

    return(
        <nav>
            <Button variant="link" className="button-navbar" onClick={() => handleClick('donaciones')}>Donaciones</Button>
            <Button variant="link" className="button-navbar" onClick={() => handleClick('contacto')}>Contacto</Button>
            <img className="logo-image" src={process.env.PUBLIC_URL + '/mainLogo.png'} alt="Logo" onClick={() => handleClick('inicio')}/>
            <Button variant="link" className="button-navbar" onClick={() => handleClick('tienda')}>Tienda</Button>
            <Button variant="link" className="button-navbar" onClick={() => handleClick('nosotros')}>Nosotros</Button>
        </nav>
    )
}

export default Navbar;
