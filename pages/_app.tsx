import Board from '../src/components/board'
import Header from '../src/components/header'
import GlobalStyle from '../styles/global'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function MyApp({ Component, pageProps }: any) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  )
}

export default MyApp