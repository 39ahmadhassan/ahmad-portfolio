import { useEffect } from "react";
import PropTypes from "prop-types";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`tabitem ${isTabActive === "education" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          {/* ==== Left Image ==== */}
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <img src={personalInfothumb} alt="Ahmad Hassan" />
            </div>
          </div>

          {/* ==== Right Content ==== */}
          <div className="col-lg-7">
            <div
              className="about__onecontent"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <h2 className="h2-head mb-3">My Education</h2>
              <p className="p-descrip mb-4">
                A strong foundation in computer science and software engineering
                helped me build modern, efficient, and user-focused digital
                solutions.
              </p>

              <div className="exprience__box mt-20">
                {/* === Education Item 1 === */}
                <div className="exri__item" data-aos="fade-up">
                  <span className="fz-18 fw-500 base">2018 – 2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-10 text-white">
                      BS Software Engineering
                    </h4>
                    <p className="fz-18 pra d-block mb-1">
                      University of Central Punjab, Lahore
                    </p>
                    <p className="fz-16 pra">
                      Focused on web development, UI design, and backend
                      integration.
                    </p>
                  </div>
                </div>

                {/* === Education Item 2 === */}
                <div
                  className="exri__item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="fz-18 fw-500 base">2016 – 2018</span>
                  <div className="expri__cont">
                    <h4 className="mb-10 text-white">Intermediate in ICS</h4>
                    <p className="fz-18 pra d-block mb-1">
                      Punjab Group of Colleges, Lahore
                    </p>
                    <p className="fz-16 pra">
                      Built core concepts in computer science and logic design.
                    </p>
                  </div>
                </div>

                {/* === Education Item 3 === */}
                <div
                  className="exri__item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="fz-18 fw-500 base">2014 – 2016</span>
                  <div className="expri__cont">
                    <h4 className="mb-10 text-white">Matriculation (Science)</h4>
                    <p className="fz-18 pra d-block mb-1">
                      Allied School, Lahore
                    </p>
                    <p className="fz-16 pra">
                      Developed interest in technology and creative problem
                      solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Education.propTypes = {
  isTabActive: PropTypes.string.isRequired,
};

export default Education;




















// import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

// const Education = ({isTabActive}) => {
//   return (
//     <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
//       <div className="about__v1wrap">
//         <div className="row g-4 align-items-lg-start align-items-center">
//           <div className="col-lg-5">
//             <div className="about__onethumb">
//               <img src={personalInfothumb} alt="img" />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="about__onecontent">
//               <h2>My Education</h2>
//               <p>
//                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//                 consectetur, aliquam quaerats voluptatem. Ut enim ad minima
//                 veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
//                 velit esse quam nihil
//               </p>
//               <div className="exprience__box mt-30">
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">2011-2013</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">Programming Course</h4>
//                     <p className="fz-18 pra d-block">New York University</p>
//                   </div>
//                 </div>
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">2013-2016</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">University of Design</h4>
//                     <p className="fz-18 pra d-block">Kingston, United States</p>
//                   </div>
//                 </div>
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">2016-2018</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">Web Design Course</h4>
//                     <p className="fz-18 pra d-block">New York University</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;
