import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

// === Personal Information Data ===
const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "49ahmadhassan@gmail.com",
    link: "mailto:49ahmadhassan@gmail.com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "(+92) 303-085-3614",
    link: "tel:+923030853614",
  },
  {
    id: 3,
    system: "Location",
    contact: "Lahore, Pakistan",
    link: "https://www.google.com/maps/place/Lahore",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      {
        id: "fb",
        icon: <Facebook />,
        link: "https://facebook.com/",
      },
      {
        id: "tw",
        icon: <Twitter />,
        link: "https://twitter.com/",
      },
      {
        id: "ln",
        icon: <Linkedin />,
        link: "https://www.linkedin.com/in/ahmad-hassan-developer/",
      },
      {
        id: "gl",
        icon: <Globe />,
        link: "https://ahmadhassanportfolio.com/",
      },
      {
        id: "ig",
        icon: <Instagram />,
        link: "https://instagram.com/",
      },
    ],
  },
];

const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          {/* === Left Image === */}
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="Ahmad Hassan" />
            </div>
          </div>

          {/* === Right Content === */}
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>

              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Hello! I&apos;m <strong>Ahmad Hassan</strong>, a passionate{" "}
                <strong>Software Engineer</strong> and{" "}
                <strong>Frontend Developer</strong> from Lahore, Pakistan. I
                specialize in building responsive, fast, and visually stunning
                websites using modern technologies like <strong>React.js</strong>,
                <strong> Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
                <strong>WordPress</strong>. I love crafting digital experiences
                that blend creativity with performance.
              </p>

              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, system, contact, link, socalContact }) => (
                    <div
                      key={id}
                      className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                      data-aos="zoom-in"
                    >
                      <div className="abox">
                        <div className="about__contbox__item">
                          <span className="ptext fz-18 mb-20 d-block">
                            {system}
                          </span>

                          {/* Regular contact info */}
                          {contact && (
                            <Link
                              to={link || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact}
                            </Link>
                          )}

                          {/* Social links */}
                          {socalContact && (
                            <ul className="d-flex align-items-center gap-2 gap-xl-4">
                              {socalContact.map(({ id, icon, link }) => (
                                <li key={id}>
                                  <Link
                                    to={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {icon}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
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

// ✅ Add Prop Validation
AboutMe.propTypes = {
  isTabActive: PropTypes.string.isRequired,
};

export default AboutMe;











// import  { useEffect } from "react";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Globe,
//   Instagram,
// } from "react-bootstrap-icons";

// import { Link } from "react-router-dom";
// import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const contactInfo = [
//   {
//     id: 1,
//     system: "Email",
//     contact: "Matias999@Gmail.Com",
//   },
//   {
//     id: 2,
//     system: "Phone",
//     contact: "+(2) 871 382 023",
//   },
//   {
//     id: 3,
//     system: "Phone",
//     contact: "Victoria Street London,",
//   },
//   {
//     id: 4,
//     system: "Follow",
//     socalContact: [
//       <Facebook />,
//       <Twitter />,
//       <Linkedin />,
//       <Globe />,
//       <Instagram />,
//     ],
//   },
// ];
// const AboutMe = ({ isTabActive }) => {
//   useEffect(() => {
//     AOS.init();
//   }, []);
//   return (
//     <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
//       <div className="about__v1wrap">
//         <div className="row g-4 align-items-lg-start align-items-center">
//           <div className="col-lg-5">
//             <div
//               className="about__onethumb"
//               data-aos="zoom-in"
//               data-aos-duration="500"
//             >
//               <img src={personalInfoThumb} alt="img" />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="about__onecontent">
//               <h2
//                 className="h2-head"
//                 data-aos="fade-up"
//                 data-aos-duration="500"
//               >
//                 Personal Info
//               </h2>
//               <p
//                 className="p-descrip"
//                 data-aos="fade-up"
//                 data-aos-duration="500"
//               >
//                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//                 consectetur, aliquam quaerats voluptatem. Ut enim ad minima
//                 veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
//                 velit esse quam nihil
//               </p>
//               <div className="about__contactwrap">
//                 <div className="row g-4">
//                   {contactInfo.map(({ id, contact, socalContact, system }) => {
//                     return (
//                       <div
//                         key={id}
//                         className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
//                         data-aos="zoom-in"
//                       >
//                         <div className="abox">
//                           <div className="about__contbox__item">
//                             <span className="ptext fz-18 mb-20 d-block">
//                               {system}
//                             </span>
//                             <Link to={""}>{contact}</Link>
//                             {socalContact && (
//                               <ul className="d-flex align-items-center gap-2 gap-xl-4">
//                                 {socalContact.map((info, index) => (
//                                   <li key={index}>
//                                     <Link to={""}>{info} </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
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

// export default AboutMe;
