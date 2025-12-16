import React from "react";

const RenewableEnergies = ({ title, subtitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>

            {/* Crear colleccion de tarjetas con paquetes de energía solar 
            todo en uno listos para comprar, seleccionar si se requiere instalación 
            para adicionar valor a la compra. 
            sistemas off-grid o sin conexión a la red
            sistemas on-grid o con conexión a la red
            principales elementos de este tipo de sistemas fotovoltaicos son los 
            paneles solares, estructuras para los módulos, inversores cargadores, 
            controladores de carga (MPPT y PWM), las baterías solares (Baterías AGM, 
            Baterías GEL, Baterías estacionarias, Baterías litio) y el material de 
            cableado eléctrico.
            El rol que los Inversores Cumplen en el Kit Solar de Aislada es convertir 
            la energía producida por los paneles solares en el tipo de corriente apta 
            para el consumo doméstico, al convertir corriente continua, producida los 
            paneles solares, en corriente alterna apta para el hogar. A la vez, 
            tiene la capacidad de activar su función cargador para dar paso al grupo 
            electrógeno o a la red eléctrica.             
            */}
        </div>
    );
};

export default RenewableEnergies;