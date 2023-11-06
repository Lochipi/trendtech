import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #121A29;
  min-width: 300px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;


.footer-wrapper {
  display: flex;
  background: var(--footer-background);
  flex-direction: column;
  max-width: 1320px;
  padding: 16px;
}


/* top section */
.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  padding: 16px 0px;
  justify-content: space-between;
}

.footer-line {
  display: block;
  width: 100%;
  height: 8px;
}

/* footer subscribe */
.footer-subscribe {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-subscribe > input {
  border: 1px solid gray;
  color: whitesmoke;
  outline: none;
  min-height: 30px;
  background-color: var(--footer-background);
  font-size: 1.1rem;
  flex: 1 0 120px;
  padding: 8px 12px;
  border-radius: 8px;
}

.footer-subscribe > input::placeholder {
  color: gray;
}

.footer-subscribe > button {
  cursor: pointer;
  background-color: slate;
  border-radius: 8px;
  color: white;
  font-size: 1.25rem;
  min-width: 120px;
  min-height: 36px;
  flex: 1 0 80px;
  white-space: nowrap;
  padding: 8px 12px;
  border: 0px;
  outline: none;
  border: 1px solid gray;
}

/* footer columns */
.footer-columns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  flex: 2 0 140px;
  width: 100%;
  gap: 16px;
  padding: 24px 8px 16px 8px;
  margin: 0 auto;
}

.footer-columns ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-columns ul a {
  color: var(--text-color);
  text-decoration: none;
}

.footer-columns ul a:hover{
  text-decoration: underline;
}

.footer-columns ul li {
  margin-bottom: 16px;
}

.footer-columns h3 {
  color: var(--text-primary);
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 1.125rem;
}

.footer-centering {
  margin: 0 auto;
}

.footer-columns > section {
  min-width: 150px;
}

.footer-logo {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 16px;
  color: var(--text-color);
  margin-bottom: 60px;
}

.footer-logo svg {
  stroke: var(--text-color);
  stroke-width: 8px;
  width: 50px;
  height: 50px;
}


/* Footer bottom */

.footer-bottom {
  text-align: center;
  margin-top: 48px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 16px 0px;
  flex-wrap: wrap;
  justify-content: space-between;
  color: var(--text-gray);
}

.footer-bottom > small {
  font-size: 16px;
  margin: 0 4px;
}

.footer-headline > h2 {
  margin: 0px;
  color: var(--text-primary);
}

.footer-headline > p {
  color: var(--text-gray);
  margin: 4px 0px 20px 0px;
}

.footer-line {
  display: block;
  min-width: 40px;
  height: 2px;
  background-color: var(--text-gray);
}

/*? socials */

.social-links {
  display: flex;
  gap: 8px;
  align-items: center;
}

.social-text {
  display: flex;
  align-items: center;
  gap: 8px;
}

.social-links img {
  width: 24px;
  height: 24px;
  transition: all 0.2s ease-in-out;
}

.social-links img:hover {
  transform: scale(1.1);
}

.social-links ul {
  display: flex;
  gap: 12px;
  list-style-type: none;
}

/* mobile */

@media (max-width: 800px) {
  .footer-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px 8px 32px 8px;
  }

  .footer-bottom {
      display: flex;
      flex-direction: column-reverse;
      align-items: space-between;
      justify-content: center;
      margin: 0 auto;
  }
`;
