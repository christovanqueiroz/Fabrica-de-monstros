import React from 'react'

import Head from '../src/components/Head'
import Main from '../src/components/Main'
import Foot from '../src/components/Foot'
import './index.css'

function App() {
  return (
    <div className='bg-teal-700 min-h-screen min-w-screen text-white flex-col'>
        <Head />
        <Main />
        <Foot />
    </div>
  )
}

export default App