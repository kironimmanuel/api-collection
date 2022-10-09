import { nanoid } from "nanoid";
import styled from "styled-components";
import { Footer } from "./components/layouts";
import { Card } from "./components/modules";
import apis from "./data/apis";

function App() {
  return (
    <Wrapper>
      <header>
        <h1>API Collection</h1>
        <div className="underline" />
        <p>
          RESTful APIs with added security packages including:{" "}
          <strong>xss-clean, cors, helmet</strong>
        </p>
      </header>
      <section className="section api-section">
        <div className="section-center container">
          {apis.map((link) => {
            return <Card key={nanoid()} {...link} />;
          })}
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  header {
    h1 {
      text-align: center;
      margin: 1.5rem;
    }
    p {
      text-align: center;
      margin: 1rem 2rem;
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
`;
