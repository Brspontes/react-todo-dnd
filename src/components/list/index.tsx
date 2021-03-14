import React from 'react'
import { MdAdd } from 'react-icons/md'

import Card from '../card'
import { Container } from './styles'


export default function List({ data, index: listIndex }: any) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size="24px" color="#FFF" />
          </button>
        )}
      </header>
      <ul>
        { data.cards.map((card, index) => <Card key={card.id} listIndex={listIndex} index={index} data={card} />) }
      </ul>
    </Container>
  )
}
