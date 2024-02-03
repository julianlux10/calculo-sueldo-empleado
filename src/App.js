import React, { useState } from "react";
import SueldoForm from "./SueldoForm";
import "./App.css";

function App() {
  const [sueldo, setSueldo] = useState(null);

  const CalculoSueldo = (nombre, horasTrabajo, valorPagoHora) => {
    // Validar que las horas de trabajo y el valor del pago por hora sean mayores a 0
    if (horasTrabajo <= 0 || valorPagoHora < 5300) {
      alert("Por favor, ingrese números mayores a 0 para Horas de Trabajo y Valor del Pago por Hora que minimo sean 5300.");
      return;
    }
    const sueldoCalculado = horasTrabajo * valorPagoHora;
    setSueldo({
      nombre,
      horasTrabajo,
      valorPagoHora,
      sueldoCalculado,
    });
  };

  return (
    <div className="App" style={{ margin: '10px' }}>
      <h1>Calculadora de Sueldo</h1>
      <p>
        Bienvenido a la Calculadora de Sueldo. Esta herramienta te permite
        calcular tu sueldo de manera rápida y sencilla. Solo ingresa tu nombre,
        las horas de trabajo que has realizado y el valor del pago por hora, ¡y
        obtendrás el resultado al instante!
      </p>
      <SueldoForm onSueldoCalculado={CalculoSueldo} />

      {sueldo && (
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Horas de Trabajo</th>
                <th>Valor del Pago por Hora</th>
                <th>Sueldo Calculado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{sueldo.nombre}</td>
                <td>{sueldo.horasTrabajo}</td>
                <td>{sueldo.valorPagoHora}</td>
                <td>{sueldo.sueldoCalculado}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
