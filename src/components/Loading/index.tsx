import { Loading } from '@nextui-org/react'
import React from 'react'
import './index.css'

function Loader() {
  return (

    <Loading className="lds-ripple" color="warning" size="xl">
      <div className='loading'>Carregando</div>
    </Loading>
  )
}

export default Loader