import React, { useState } from 'react';
// Importa React y el hook de estado 'useState' desde la biblioteca 'react'

function SueldoForm({ onSueldoCalculado }) {
  // Declara estados para manejar los valores del formulario
  const [nombre, setNombre] = useState('');
  const [horasTrabajo, setHorasTrabajo] = useState('');
  const [valorPagoHora, setValorPagoHora] = useState('');

  // Declara una función llamada handleSubmit que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    // Llama a la función proporcionada por la prop 'onSueldoCalculado' con los valores ingresados
    onSueldoCalculado(nombre, parseFloat(horasTrabajo), parseFloat(valorPagoHora));
  };

  // Devuelve un bloque de JSX que representa el formulario
  return (
    <form className='form' onSubmit={handleSubmit}>
      {/* Etiqueta y campo de entrada para el nombre */}
      <label><b>Nombre:</b>
        
      </label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br /> <br />
      {/* Etiqueta y campo de entrada para las horas de trabajo */}
      <label><b>Horas de Trabajo:</b>
      </label>
      <input type="number" value={horasTrabajo} onChange={(e) => setHorasTrabajo(e.target.value)} />
      <br /> <br />
      {/* Etiqueta y campo de entrada para el valor del pago por hora */}
      <label><b>Valor del Pago por Hora:</b>
      </label>
      <input type="number" value={valorPagoHora} onChange={(e) => setValorPagoHora(e.target.value)} />
      <br />
      {/* Botón para enviar el formulario */}
      <button type="submit">Calcular Sueldo</button>
    </form>
  );
}

// Exporta el componente SueldoForm para su uso en otros archivos
export default SueldoForm;
