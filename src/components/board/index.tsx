import React, { useState } from 'react'
import { loadLists } from '../../services/api'
import List from '../list'
import { Container } from './styles'
import BoardContext from '../contexts/context'
import produce from 'immer'

const data = loadLists()

export default function Board() {

  const [lists, setLists] = useState(data)

  function move(fromList: number, toList: number, from: number, to: number) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]
      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  )
}
