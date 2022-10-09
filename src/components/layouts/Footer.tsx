import { nanoid } from "nanoid";
import styled from "styled-components";
import { socialLinks } from "../../data/links";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <Wrapper>
      <footer className="footer">
        <ul className="social-icons">
          {socialLinks.map((social) => {
            const { icon, url, styleClass } = social;
            return (
              <li key={nanoid()}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className={styleClass}>{icon}</div>
                </a>
              </li>
            );
          })}
        </ul>
        <p>
          <span>{date}&copy;</span> Open source APIs by
          <span>
            <a
              href="https://kironimmanuelbaier.netlify.app/"
              target="_blank"
              rel="noreferrer">
              {" "}
              Kironimmanuel
            </a>
          </span>
        </p>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  .footer {
    margin-top: -0.1rem;
    padding-bottom: 0.5rem;
    background: transparent;
    display: grid;
    place-items: center;
    height: auto;
    font-size: 0.8rem;
  }
  .footer p {
    color: var(--primary-900);
    opacity: 0.5;
    padding: 0 0.5rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-weight: 500;
    a {
      color: var(--primary-800);
    }
  }
  @media screen and (min-width: 992px) {
    .footer p {
      font-size: 0.9rem;
    }
  }
`;
