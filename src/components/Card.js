import { nanoid } from 'nanoid'
import styled from 'styled-components'

const Api = ({ title, description, icon, url, features, disabled }) => {
  return (
    <Wrapper>
      <article
        className="card"
        style={disabled ? { pointerEvents: 'none', opacity: '0.5' } : {}}
        target="_blank"
        onClick={() => window.open(url)}>
        <div className="flex-box">
          <div className="icon">{icon}</div>
          <h4>{title}</h4>
        </div>
        {/* <div className="underline" /> */}
        <p>{description}</p>
        <div className="features">
          {features.map(feature => {
            return (
              <span key={nanoid()} className="feature-icon">
                {feature}
              </span>
            )
          })}
        </div>
      </article>
    </Wrapper>
  )
}

export default Api

const Wrapper = styled.div`
  .card {
    box-shadow: var(--light-shadow);
    background: var(--clr-white);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    cursor: pointer;
    padding: 1rem;
    &:hover {
      box-shadow: var(--shadow-4);
      background: var(--primary-3);
    }
    .flex-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .underline {
      width: 3rem;
      height: 0.12rem;
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    p {
      -webkit-transition: var(--transition);
      transition: var(--transition);
      text-align: center;
      font-size: 0.85rem;
    }
  }
  .icon {
    font-size: 2rem;
  }
  .features {
    margin-bottom: 0.5rem;
  }
  .features span {
    display: inline-block;
    background: var(--primary-5);
    color: var(--clr-white);
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.7rem;
  }
`
