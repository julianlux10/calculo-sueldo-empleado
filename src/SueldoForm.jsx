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

      <label><b>Nombre:</b>
        
      </label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br /> <br />
     
      <label><b>Horas de Trabajo:</b>
      </label>
      <input type="number" value={horasTrabajo} onChange={(e) => setHorasTrabajo(e.target.value)} />
      <br /> <br />

      <label><b>Valor del Pago por Hora:</b>
      </label>
      <input type="number" value={valorPagoHora} onChange={(e) => setValorPagoHora(e.target.value)} />
      <br />
   
      <button type="submit">Calcular Sueldo</button>
    </form>
  );
}
export default SueldoForm;
