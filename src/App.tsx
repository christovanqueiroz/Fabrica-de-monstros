import React from 'react'

import Head from '../src/components/Head'
import Main from '../src/components/Main'
import Foot from '../src/components/Foot'


function App() {
  return (
    <div className='bg-black min-h-screen text-white flex-col'>
        <Head />
        <Main />
        <Foot />
    </div>
  )
}

export default App
