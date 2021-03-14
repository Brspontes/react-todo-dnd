import Board from '../src/components/board'
import Header from '../src/components/header'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  )
}

export default MyApp