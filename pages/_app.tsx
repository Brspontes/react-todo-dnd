import Header from '../src/components/header'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}

export default MyApp