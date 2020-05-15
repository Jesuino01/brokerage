import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

import api from '../../services/api'


export default function FormCad({ modalClose }) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [metros, setMetros] = useState('')
  const [preco, setPreco] = useState('')
  

  const handleSave = (e) => {
    e.preventDefault()
    
    const data = {
      titulo,
      descricao,
      "fotos": [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplantapronta.com.br%2Fprojeto%2F140A%2Fplanta-de-casa-clean&psig=AOvVaw2x00go_GKNP2Oz6iJnieAn&ust=1587920242296000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjF3ICGhOkCFQAAAAAdAAAAABAD",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcasa.abril.com.br%2Farquitetura%2Fcasa-em-angra-dos-reis-e-um-refugio-entre-montanha-e-mar%2F&psig=AOvVaw2x00go_GKNP2Oz6iJnieAn&ust=1587920242296000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjF3ICGhOkCFQAAAAAdAAAAABAJ"
      ],
      logradouro,
      cidade,
      bairro,
      "nro": numero,
      cep,
      metros,
      preco,
    }

    api.post('imovel', data).then(response => {
      window.location = '/dashboard'
    }, []);
    
  }

  return ( 
    <Form onSubmit={handleSave}>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Título</Form.Label>
          <Form.Control onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group md="9" as={Col}>
          <Form.Label>Logradouro</Form.Label>
          <Form.Control onChange={(e) => setLogradouro(e.target.value)} placeholder="Logradouro" />
        </Form.Group>

        <Form.Group md="3" as={Col}>
          <Form.Label>Número</Form.Label>
          <Form.Control onChange={(e) => setNumero(e.target.value)} placeholder="Número" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Bairro</Form.Label>
          <Form.Control onChange={(e) => setBairro(e.target.value)} placeholder="Bairro" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Cidade</Form.Label>
          <Form.Control onChange={(e) => setCidade(e.target.value)} placeholder="Cidade" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>CEP</Form.Label>
          <Form.Control onChange={(e) => setCep(e.target.value)} placeholder="Ex: 38444444" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Metros</Form.Label>
          <Form.Control onChange={(e) => setMetros(e.target.value)} placeholder="Ex: 59" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Preço</Form.Label>
          <Form.Control onChange={(e) => setPreco(e.target.value)} placeholder="Ex: R$ 300.00,00" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group>
          <Form.Label>Descrição</Form.Label>
          <Form.Control onChange={(e) => setDescricao(e.target.value)} style={{ minWidth: 400, minHeight: 120, resize: 'none' }} as="textarea" rows="3" />
        </Form.Group>
      </Form.Row>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="primary" type="submit">
          Salvar
          </Button>

    
        <Button onClick={() => modalClose()} variant="danger">
          Cancelar
        </Button>

      </div>
    </Form>
  )
}