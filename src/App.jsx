import './App.css'
import Ufjf from './pages/Ufjf'
import Unifesp from './pages/Unifesp.jsx'
import { useState } from 'react'
import { Button, Stack } from '@mui/material'

function App() {
  const [currentPage, setCurrentPage] = useState('ufjf')

  const renderPage = () => {
    switch (currentPage) {
      case 'ufjf':
        return <Ufjf />
      case 'unifesp':
        return <Unifesp />
      default:
        return <Ufjf />
    }
  }

  return (
    <div>
      <h1>Processos Seletivos</h1>
      <h2>Doutorado em História</h2>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        <Button
          variant={currentPage === 'ufjf' ? 'contained' : 'outlined'}
          onClick={() => setCurrentPage('ufjf')}
        >
          UFJF
        </Button>
        <Button
          variant={currentPage === 'unifesp' ? 'contained' : 'outlined'}
          onClick={() => setCurrentPage('unifesp')}
        >
          UNIFESP
        </Button>
      </Stack>

      <section>
        <h2>{currentPage.toUpperCase()}</h2>
        {renderPage()}
      </section>
    </div>
  )
}

export default App
