import { TestimonialCardStyled } from "./styles/TestimonialCard.styled";
import testData from "../assets/testimonialData";

function TestimonialCard() {
  return (
    <>
      {Object.keys(testData).map((test) => {
        return (
          <>
            <TestimonialCardStyled>
              <div className="icon-svg">
                <svg
                  fill="#dfd9c9"
                  width="70px"
                  height="70px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>quote</title>
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
                </svg>
              </div>
              <div>
                <p>{testData[test].testimonial}</p>
              </div>
              <div className="testi-profile">
                <h4>{testData[test].name}</h4>
                <h5>{testData[test].Company}</h5>
              </div>
            </TestimonialCardStyled>
          </>
        );
      })}
    </>
  );
}

export default TestimonialCard;