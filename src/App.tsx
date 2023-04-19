import React from 'react'

import './index.css'

import Head from '../src/components/Head'
import Main from '../src/components/Main'
import Foot from '../src/components/Foot'

function App() {
  return (
    <div className=
      'bg-black min-h-screen min-w-screen text-white flex-col'
    >
        <Head />
        <Main />
        <Foot />
    </div>
  )
}

export default App