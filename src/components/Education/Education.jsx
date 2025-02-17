import "../Education/Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <div
      className="education-section"
      style={{
        backgroundColor: "white",
        marginBottom: "200px",
      }}
      id="edu"
    >
      <h2 className="edu mont-font text-primary">My Education</h2>
      <VerticalTimeline className="mont-font-light" lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f3f4f6", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
          date="2020 - 2024"
          iconStyle={{ background: "#4caf50", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Panimalar Engineering College
          </h4>
          <p>Electronics & Communication Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f3f4f6", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
          date="2018 - 2020"
          iconStyle={{ background: "#ff9800", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Higher Secondary Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            P.A.K. Palanisamy Higher Secondary School, Oldwashermenpet, Chennai
          </h4>
          <p>Computer Science Stream</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f3f4f6", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
          date="2018"
          iconStyle={{ background: "#ff9800", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">SSLC</h3>
          <h4 className="vertical-timeline-element-subtitle">
            P.A.K. Palanisamy Higher Secondary School, Oldwashermenpet, Chennai
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
