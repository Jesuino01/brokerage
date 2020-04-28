import React, { useEffect, useState } from 'react'
import { Navbar, Container, Row, Table, Button, Modal } from 'react-bootstrap'
import FormCad from '../../components/FormCad'
import api from '../../services/api'

export default function Dashboard() {
  const [properties, setProperties] = useState([])
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    api.get('imovel').then(response => {
      setProperties(response.data)
    })
  }, []);

  const handleInfomationTable = () => {

    return (
      <>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITULO</th>
            <th>DESCRIÇÃO</th>
            <th>CEP</th>
            <th>LOGRADOURO</th>
            <th>BAIRRO</th>
            <th>METROS</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(propertie => (
            <tr>
              <td>{propertie.id}</td>
              <td>{propertie.titulo}</td>
              <td>{propertie.descricao}</td>
              <td>{propertie.cep}</td>
              <td>{propertie.cidade}</td>
              <td>{`${propertie.logradouro}, ${propertie.nro}`}</td>
              <td>{propertie.bairro}</td>
              <td>{propertie.metros}</td>
              <td>{propertie.preco}</td>
              <td>
                <Button variant="outline-info" size="sm">Editar</Button>
              </td>
              <td>
                <Button variant="outline-danger" size="sm">Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    )  
  }

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastro de Imóveis
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCad />
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          MGA Corretora de Imóveis
        </Navbar.Brand>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      </Navbar>
      <Container>
        <Row>
        <Table responsive>
          {handleInfomationTable()}
        </Table>
        </Row>


        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </>
  )
}