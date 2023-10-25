import { useState } from "react";
import Switch from "react-switch";

export default function Task({ taskName, completar }) {
  const [completado, setCompletado] = useState(completar);

  const handleChange = (checked) => {
    setCompletado(checked);
  };

  return (
    <div className="task">
      <h2
        style={{
          textDecoration: completado ? "line-through" : "none",
          color: completado ? "green" : "red",
        }}
      >
        {taskName}
      </h2>
      <div className="boton">
      <Switch className="buton" onChange={handleChange} checked={completado} />
      </div>
      
    </div>
  );
}
