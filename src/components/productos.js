import React from "react";
import { Link } from "react-router-dom";

export const Productos = () => {
    
    return <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">Producto 1</h5>
              <p className="card-text">Descripcion del producto</p>
              <a href="#" className="btn btn-primary">Agregar al Carro</a>
            </div>
          </div>
}