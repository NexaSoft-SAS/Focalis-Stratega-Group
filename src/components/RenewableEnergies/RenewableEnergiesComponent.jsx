import React from "react";

const RenewableEnergies = ({ title, subtitle }) => {
    return (
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">            
                <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-8 rounded-t-2xl">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>                    
                    <p className="text-gray-700 text-xl max-w-3xl leading-relaxed">{subtitle}</p>
                </div>
                <div className="p-6">
                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        sistemas off-grid o sin conexión a la red
                        sistemas on-grid o con conexión a la red
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
                    </p>                    
                </div>
        </div>
    );
};

export default RenewableEnergies;