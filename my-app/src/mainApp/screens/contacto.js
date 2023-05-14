import React from 'react';

function Contacto() {
  return (
    <div id="wrapper" style={{ backgroundColor: '#a35776' }}>
      <aside className="col-3">
        <div className="leftMenuBar">
          <div id="sideBar"></div>
        </div>
      </aside>

      <div className="row col-lg-12 primary-content">
        <div id="upBar"></div>
        <div className="">
          <div className="container formulary">
            <br /><br /><br />
            <h2>Formulario de contacto</h2>
            <form action="/enviar-formulario" method="post">
              <div className="form-group">
                <label htmlFor="nombres">Nombres:</label>
                <input type="text" className="form-control" id="nombres" name="nombres" required />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos:</label>
                <input type="text" className="form-control" id="apellidos" name="apellidos" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" className="form-control" id="telefono" name="telefono" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="ciudad">Ciudad:</label>
                <input type="text" className="form-control" id="ciudad" name="ciudad" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
