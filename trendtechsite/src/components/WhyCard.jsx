import { StyledWhyUs } from "./styles/WhyUs.styled";
import { UilChartLine } from "@iconscout/react-unicons";
import { UilUsersAlt } from "@iconscout/react-unicons";
import { UilComment } from "@iconscout/react-unicons";


export default function App() {
  const icons = {
    "<UilChartLine />": <UilChartLine />,
    "<UilUsersAlt />": <UilUsersAlt />,
    "<UilComment />": <UilComment />,
  };

  const jsonIconData = {
    behance: {
      icon: "<UilChartLine />",
      id: "1",
      rate: 158,
      desc: "Increase in users in the 3 years, there has been a remarkable and noteworthy increase in the number of users.",
    },
    devcommunity: {
      icon: "<UilUsersAlt />",
      id: "2",
      rate: 377,
      desc: "The impressive number of corporate clients we have successfully served consistently.",
    },
    github: {
      icon: "<UilComment />",
      id: "3",
      rate: 453,
      desc: "There are multiple Work Team teams that are currently active on the platform.",
    },
  };

  return (
    <StyledWhyUs>
      {Object.keys(jsonIconData).map((el) => {
        return (
          <>
            <StyledWhyUs>
              <div key={jsonIconData[el].id} className="icon-item">
                <div className="icon--div">
                  <div className="icon">{icons[jsonIconData[el].icon]}</div>
                </div>
                <div className="why--content">
                  <h2>{jsonIconData[el].rate}</h2>
                  <p>{jsonIconData[el].desc}</p>
                </div>
              </div>
            </StyledWhyUs>
          </>
        );
      })}
    </StyledWhyUs>
  );
}
