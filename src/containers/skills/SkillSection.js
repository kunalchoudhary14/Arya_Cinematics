import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
// import DataScienceImg from "./DataScienceImg";
// import FullStackImg from "./FullStackImg";
// import CloudInfraImg from "./CloudInfraImg";
// import DesignImg from "./DesignImg";
import "./data_science.svg";
import "./ayushinsta.png";

function GetSkillSvg(props) {
  if (props.fileName === "socialmedia")
    return <img
  alt="ayush instagram page results"
  src={require("../../assests/images/ayushinsta.png")}
></img>;
  else if (props.fileName === "drone")
    return <img
  alt="drone"
  src={require("../../assests/images/drone.png")}
></img>;
else if (props.fileName === "webdev")
  return <img
alt="saad sitting on table"
src={require("../../assests/images/webdev.png")}
></img>;
  else if (props.fileName === "graphidesign")
    return <img
  alt="saad sitting on table"
  src={require("../../assests/images/graphicdesign.png")}
></img>;
  return <img
  alt="saad sitting on table"
  src={require("../../assests/images/videoediting.png")}
></img>;
}
// function GetSkillSvg(props) {
//   const { fileName, theme } = props;

//   let imgSrc;
//   switch (fileName) {
//     case "DataScienceImg":
//       imgSrc = "/ayushinsta.png";
//       break;
//     case "FullStackImg":
//       imgSrc = "/path/to/FullStackImg.png";
//       break;
//     case "CloudInfraImg":
//       imgSrc = "/path/to/CloudInfraImg.png";
//       break;
//     default:
//       imgSrc = "/path/to/DesignImg.png";
//   }

//   return <img src={imgSrc} alt={fileName} className={`theme-${theme}`} />;
// }


class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
