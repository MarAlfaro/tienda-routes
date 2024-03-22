import React from "react";
import { useParams } from "react-router-dom";
import { DetailsCont } from "../estilos-componentes/styles-comp";
import dataCelu from "../data/dataCelu";

const CelularDetails = () => {
  const { nameCelular } = useParams();
  const detalles = dataCelu[nameCelular];
  
  return (
    <DetailsCont>
      <h3>Detalles del movil {nameCelular}</h3>
      <img src={detalles.imagen} alt="imagen-celular" />
      <h4>Modelo: <em>{detalles.modelo}</em></h4>
      <h4>Precio: <em>{detalles.precio}</em></h4>
      <h4>Descripción: <em>{detalles.desc}</em></h4>
    </DetailsCont>
  );
};

export default CelularDetails;
