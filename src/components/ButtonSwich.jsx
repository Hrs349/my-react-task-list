import Switch from 'react-switch';

export default function ButtonSwich(boton) {
  const {completar} = boton.completa


  return (
    <div>
     <Switch onChange={boton.onChange} checked={completar} />
    </div>
  );
}