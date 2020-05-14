import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'
import { Card, Button } from 'react-bootstrap'

import api from '../../services/api'

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api.get('imovel').then(response => {
      setProperties(response.data)
    })
  }, []);
  
  return (
    <>
    <div style={{ 
      height: '100vh',
      width: '100%',
      backgroundColor: '#E4F3FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#4F5F6A'
    }}>
      <h1>MGA Corretagem</h1>
      <p><h2>(34) 9 9195-7411</h2></p>

      <div style={{
        position: 'absolute',
        bottom: 50
      }}><FaAngleDown size={40} /></div>
    </div>
    <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column  '}}>
      <h3>Imóveis</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {properties.map(imovel => {
          console.log(imovel)
          return (
            <Card style={{ padding: 10, margin: '0 20px', width: '18rem' }}>
              <Card.Img variant="top" src={imovel.fotos} />
              <Card.Body>
                <Card.Title>{imovel.title}</Card.Title>
                <Card.Text>
                  {imovel.descricao}
                </Card.Text>
                <Button variant="primary">Ver Detalhes</Button>
              </Card.Body>
            </Card>
          )})
        }
      </div>
    </div>
    </>
  )
}