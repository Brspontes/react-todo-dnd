import React from 'react'
import { MdAdd } from 'react-icons/md'

import Card from '../card'
import { Container } from './styles'


export default function List() {
  return (
    <Container>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd size="24px" color="#FFF" />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  )
}
