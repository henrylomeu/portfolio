import { Grid, Text } from '@nextui-org/react'
import React from 'react'

function Footer() {
  return (
    <Grid css={{
        backgroundColor: '$warning',
        height: '150px',
        color: '$white',
        width: '100vw',
    }}>
    <Text 
        css={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            fontSize: '20px',
            paddingTop: '10px',
            color:'white'
        }}
    >
    Feito por:
    </Text>
    <Text 
        h2
        css={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            color:'white'

        }}>
    Henry Lomeu Souza
           
    </Text>
    <Text 
        css={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            color:'white'
        }}>
    <div>&copy; Portfolio - Todos direitos reservados</div>
           
    </Text>

    </Grid>
  )
}

export default Footer