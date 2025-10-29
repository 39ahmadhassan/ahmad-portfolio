import { useEffect } from "react";
import PropTypes from "prop-types";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import figma from "../../assets/img/about/figma.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";
import AOS from "aos";
import "aos/dist/aos.css";

// === Skills Data (from your resume) ===
const skillsList = [
  {
    id: 1,
    skill: "React.js",
    percentage: "95%",
    image: html,
  },
  {
    id: 2,
    skill: "Next.js",
    percentage: "90%",
    image: boot,
  },
  {
    id: 3,
    skill: "Tailwind CSS",
    percentage: "92%",
    image: figma,
  },
  {
    id: 4,
    skill: "WordPress",
    percentage: "88%",
    image: word,
  },
];

const Skills = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          {/* === Left Image === */}
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <img src={personalInfothumb} alt="Ahmad Hassan" />
            </div>
          </div>

          {/* === Right Content === */}
          <div className="col-lg-7">
            <div
              className="about__onecontent"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <h2 className="h2-head mb-3">My Skills</h2>
              <p className="p-descrip mb-4">
                I specialize in crafting modern, responsive, and high-performance
                websites using the latest frontend frameworks and CMS platforms.
              </p>

              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, image, percentage }) => (
                    <div
                      key={id}
                      className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={id * 100}
                    >
                      <div className="abox myskill__item">
                        <div className="thumb">
                          <img src={image} alt={skill} />
                        </div>
                        <div className="mys">
                          <span className="ptext fz-18 mb-15 d-block">
                            {skill}
                          </span>
                          <h1 className="fw-600">{percentage}</h1>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  isTabActive: PropTypes.string.isRequired,
};

export default Skills;




















// import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
// import figma from "../../assets/img/about/figma.png";
// import word from "../../assets/img/about/word.png";
// import html from "../../assets/img/about/html.png";
// import boot from "../../assets/img/about/boot.png";

// const skillsList = [
//   {
//     id: 1,
//     skill: "Figma",
//     percentage: "90%",
//     image: figma,
//   },
//   {
//     id: 2,
//     skill: "Wordpress",
//     percentage: "95%",
//     image: word,
//   },
//   {
//     id: 3,
//     skill: "Figma",
//     percentage: "85%",
//     image: html,
//   },
//   {
//     id: 4,
//     skill: "Bootstrap",
//     percentage: "97%",
//     image: boot,
//   },
// ];
// const Skills = ({ isTabActive }) => {
//   return (
//     <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
//       <div className="about__v1wrap">
//         <div className="row g-4 align-items-lg-start align-items-center">
//           <div className="col-lg-5">
//             <div className="about__onethumb">
//               <img src={personalInfothumb} alt="img" />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="about__onecontent">
//               <h2>My Skills</h2>
//               <p>
//                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//                 consectetur, aliquam quaerats voluptatem. Ut enim ad minima
//                 veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
//                 velit esse quam nihil
//               </p>
//               <div className="about__contactwrap">
//                 <div className="row g-4">
//                   {skillsList.map(({id, skill, image, percentage}) => {
//                     return (
//                       <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
//                         <div className="abox myskill__item">
//                           <div className="thumb">
//                             <img src={image} alt="img" />
//                           </div>
//                           <div className="mys">
//                             <span className="ptext fz-18 mb-15 d-block">{skill}</span>
//                             <h1 className="fw-600">{percentage}</h1>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
