import { useEffect } from "react";
import PropTypes from "prop-types";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active" : ""}`}>
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
              <h2 className="h2-head mb-3">My Experience</h2>
              <p className="p-descrip mb-4">
                A passionate software engineer focused on creating efficient,
                scalable, and visually engaging web applications.
              </p>

              <div className="exprience__box mt-20">
                {/* === Experience Item 1 === */}
                <div className="exri__item" data-aos="fade-up">
                  <span className="fz-18 fw-500 base">2023 – Present</span>
                  <div className="expri__cont">
                    <h4 className="mb-10 text-white">Software Engineer</h4>
                    <p className="fz-18 pra d-block mb-1">DevPanda</p>
                    <p className="fz-16 pra">
                      Building interactive apps using React, Next.js & Tailwind.
                    </p>
                  </div>
                </div>

                {/* === Experience Item 2 === */}
                <div className="exri__item" data-aos="fade-up" data-aos-delay="100">
                  <span className="fz-18 fw-500 base">2021 – 2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-10 text-white">Frontend Developer</h4>
                    <p className="fz-18 pra d-block mb-1">Freelance Platforms</p>
                    <p className="fz-16 pra">
                      Delivered responsive websites for clients on Fiverr & Upwork.
                    </p>
                  </div>
                </div>

                {/* === Experience Item 3 === */}
                <div className="exri__item" data-aos="fade-up" data-aos-delay="200">
                  <span className="fz-18 fw-500 base">2019 – 2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-10 text-white">Web Developer Intern</h4>
                    <p className="fz-18 pra d-block mb-1">Tech Solutions, Lahore</p>
                    <p className="fz-16 pra">
                      Assisted in UI/UX projects & backend integration.
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

Experience.propTypes = {
  isTabActive: PropTypes.string.isRequired,
};

export default Experience;



























// import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

// const Experience = ({isTabActive}) => {
//   return (
//     <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
//       <div className="about__v1wrap">
//         <div className="row g-4 align-items-lg-start align-items-center">
//           <div className="col-lg-5">
//             <div className="about__onethumb">
//               <img src={personalInfothumb} alt="img" />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="about__onecontent">
//               <h2>My Experience</h2>
//               <p>
//                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//                 consectetur, aliquam quaerats voluptatem. Ut enim ad minima
//                 veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
//                 velit esse quam nihil
//               </p>
//               <div className="exprience__box mt-30">
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">In 2011</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">Software Engineer</h4>
//                     <p className="fz-18 pra d-block">UI Head & Manager</p>
//                   </div>
//                 </div>
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">In 2016</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">Product Designer</h4>
//                     <p className="fz-18 pra d-block">Head of Department</p>
//                   </div>
//                 </div>
//                 <div className="exri__item">
//                   <span className="fz-18 fw-500 base">In 2023</span>
//                   <div className="expri__cont">
//                     <h4 className="mb-15 text-white">Senior UI Designer</h4>
//                     <p className="fz-18 pra d-block">Fiverr.com</p>
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

// export default Experience;
