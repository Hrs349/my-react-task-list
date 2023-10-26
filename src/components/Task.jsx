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
          color: completado ? "rgb(85, 244, 85)" : "white",
        }}
      >
        {taskName}
      </h2>
        < Switch className="hola"
          onChange={handleChange}
          checked={completado}
        />
      
    </div>
  );
}
