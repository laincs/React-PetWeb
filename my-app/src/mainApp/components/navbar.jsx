import "./navbar.css";

import { Button } from 'react-bootstrap';

function Navbar({ updateView }){

    const handleClick = () => {
        updateView();
    };

    return(
        <>
            <nav>
                {/* <h1>This is a navbar</h1> */}

                <div>
                    <Button variant="primary" onClick={handleClick}>Formulario</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
