import React,
{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Card, Row, Form, Button } from 'react-bootstrap';
import api from '../../services/api'

export default function Logon() {
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const history = useHistory();
  
  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('sessions', {login, pass})

      localStorage.setItem('userInfo', response.data)

      history.push('/dashboard')
    } catch (err) {
      alert('Falha no login, tente novamente!')
    }
  }

  return (
    <>
      <Container>
        <Row 
          style={{ 
            display: 'flex', 
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center' 
          }} 
          className="justify-content-md-center"
        >
          <Card style={{ width: 500, marginTop: 100 }}>
            <Card.Title 
              style={{ 
                marginTop: 20,
                fontSize: 30,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              MGA Corretora
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Login</Form.Label>
                  <Form.Control onChange={e => setLogin(e.target.value)} type="login" placeholder="Login" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control onChange={e => setPass(e.target.value)} type="password" placeholder="Senha" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}