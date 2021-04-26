import React from 'react';
import { Row, Col } from 'react-bootstrap';

/** Bloque de una materia individual **/
export default function Materia ({ nums, materia, tec21, clickMateria }) {
  const {numSemestre, numMateria} = nums

  return (
    <Row className={`p-0 m-0 materia labelMateria bg-${materia.color}`} onClick={() => clickMateria(numSemestre, numMateria)}>
      <Col className="p-0 m-0">
        <Row className="nombre-materia p-0 m-0">
          <Col className="p-0 m-0">
            <label>{materia.nombre}</label>
          </Col>
        </Row>
        {tec21 && (
          <Row className="tec21 p-0 m-0">
            <Col className={`bloque-tec21-${(materia?.periodos[0]) ? '' : 'no-'}seleccionado p-0 m-0`}></Col>
            <Col className={`bloque-tec21-${(materia?.periodos[1]) ? '' : 'no-'}seleccionado p-0 m-0`}></Col>
            <Col className={`bloque-tec21-${(materia?.periodos[2]) ? '' : 'no-'}seleccionado p-0 m-0`}></Col>
          </Row>
        )}
      </Col>
    </Row>
  )
}