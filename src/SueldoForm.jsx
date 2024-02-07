import React, { useState } from 'react';


function SueldoForm({ onSueldoCalculado }) {

  const [nombre, setNombre] = useState('');
  const [horasTrabajo, setHorasTrabajo] = useState('');
  const [valorPagoHora, setValorPagoHora] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); 

    onSueldoCalculado(nombre, parseFloat(horasTrabajo), parseFloat(valorPagoHora));
  };


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
export default SueldoForm;
