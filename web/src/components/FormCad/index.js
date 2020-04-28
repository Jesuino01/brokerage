import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

export default function FormCad() {

  const handleSave = (e) => {
    e.preventDefault();

    console.log(e.target.value)
  }

  return (
    <Form onSubmit={handleSave}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Título</Form.Label>
          <Form.Control placeholder="Título" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group>
          <Form.Label>Descrição</Form.Label>
          <Form.Control style={{ minWidth: 400, minHeight: 120, resize: 'none' }} as="textarea" rows="3" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group md="6" as={Col}>
          <Form.Label>Logradouro</Form.Label>
          <Form.Control placeholder="Logradouro" />
        </Form.Group>

        <Form.Group md="3" as={Col}>
          <Form.Label>Número</Form.Label>
          <Form.Control placeholder="Número" />
        </Form.Group>

        <Form.Group md="3" as={Col}>
          <Form.Label>Complemento</Form.Label>
          <Form.Control placeholder="Complemento" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Estado</Form.Label>
          <Form.Control as="select" value="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>CEP</Form.Label>
          <Form.Control placeholder="Ex: 38444444" />
        </Form.Group>
      </Form.Row>

      <Form.Row>

        <Form.Group as={Col}>
          <Form.Label>Metros</Form.Label>
          <Form.Control placeholder="Ex: 59" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Preço</Form.Label>
          <Form.Control placeholder="Ex: R$ 300.00,00" />
        </Form.Group>

      </Form.Row>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="primary" type="submit">
          Salvar
          </Button>

        <Button variant="danger">
          Cancelar
        </Button>

      </div>
    </Form>
  )
}