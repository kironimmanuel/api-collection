import { nanoid } from 'nanoid'
import styled from 'styled-components'
import Card from './components/Card'
import Footer from './components/Footer'
import apis from './data/apis'

function App() {
  return (
    <Wrapper>
      <header>
        <h1>API Library</h1>
        <div className="underline" />
      </header>
      <section className="section api-section">
        <div className="section-center container">
          {apis.map(link => {
            return <Card key={nanoid()} {...link} />
          })}
        </div>
      </section>
      <Footer />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.main`
  header {
    h1 {
      text-align: center;
      margin: 2rem;
    }
  }
  .container {
    display: grid;
  }
  .skill-text {
    text-align: center;
  }
  @media screen and (min-width: 676px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1178px) {
    .container {
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 1rem;
    }
  }
`
