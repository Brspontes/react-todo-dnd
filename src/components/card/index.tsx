import React, { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Container, Label } from './styles'
import BoardContext from '../contexts/context'

export default function Card({ data, index, listIndex }: any) {

  const ref = useRef()

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const { move } = useContext(BoardContext)

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover: (item, monitor) => {
      const draggedIndex = item.index
      const targetIndex = index

      const draggedListIndex = item.listIndex
      const targetListIndex  = listIndex

      console.log(`TARGET CARD: ${targetIndex} | TARGET LIST: ${listIndex}`)

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return
      }

      //returns size component
      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top) / 2

      const draggedOffSet = monitor.getClientOffset();
      const draggedTop = draggedOffSet.y - targetSize.top

      if(draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex)

      item.index = targetIndex
      item.listIndex = targetListIndex
    }
  })

  dragRef(dropRef(ref))

  return (
    // @ts-ignore
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  )
}
