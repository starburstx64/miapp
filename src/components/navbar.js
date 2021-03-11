import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Bienvenido</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nosotros">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/faq">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/registro">Registro</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
}