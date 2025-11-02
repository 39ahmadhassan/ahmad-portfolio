import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>

      <div className="sub__contact__wrapper d-grid">

        {/* ✅ Logo */}
        <Link to={"/"} className="side-logo">
          <img src={logo} alt="img" className="w-100 h-100" />
        </Link>

        {/* ✅ Updated Description */}
        <p>
          I&apos;m Ahmad Hassan, a passionate Software Engineer and React.js & Frontend Developer from Pakistan. I specialize in building high-performance, responsive web applications using React.js, Next.js, and WordPress.
        </p>

        {/* ✅ Contact Info */}
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block">Address</span>
              <span className="textp">Lahore, Pakistan</span>
            </div>
          </div>

          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block">Email</span>
              <Link className="textp" to="mailto:49ahmadhassan@gmail.com">
                49ahmadhassan@gmail.com
              </Link>
            </div>
          </div>

          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block">Call Now</span>
              <Link className="textp" to="tel:+923030853614">
                +92 303 0853614
              </Link>
            </div>
          </div>
        </div>

        {/* ✅ Social Icons — unchanged */}
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socialIcons.map(({ icon, id }) => (
              <li key={id}>
                <Link to="#">
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Button */}
        <Link
          to="/contact"
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let&apos;s Talk </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;




















// import React from "react";
// import { XLg, ChevronRight } from "react-bootstrap-icons";
// import logo from "../../../assets/img/logo/logo.png";
// import { socialIcons } from "../../../Utlits/socilIcons";
// import { Link } from "react-router-dom";

// const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
//   return (
//     <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
//       <div
//         onClick={() => setIsSidebarActive(false)}
//         className="remove__click d-flex justify-content-center align-items-center"
//       >
//         <i>
//           <XLg />
//         </i>
//       </div>
//       <div className="sub__contact__wrapper d-grid">
//         <Link to={""} className="side-logo">
//           <img src={logo} alt="img" className="w-100 h-100"/>
//         </Link>
//         <p>
//           Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//           consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
//           exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam
//           nihil
//         </p>
//         <div className="sub__contact-left d-grid">
//           <div className="sub__contac-item">
//             <div className="content">
//               <span className="address d-block"> address </span>
//               <span className="textp"> Victoria Street London, </span>
//             </div>
//           </div>
//           <div className="sub__contac-item">
//             <div className="content">
//               <span className="address d-block"> email </span>
//               <Link className="textp"> matias999@.com </Link>
//             </div>
//           </div>
//           <div className="sub__contac-item">
//             <div className="content">
//               <span className="address d-block"> call now </span>
//               <Link className="textp"> +98 4758 2154 021 </Link>
//             </div>
//           </div>
//         </div>
//         <div className="sub__contact-right mb-80 position-relative">
//           <ul className="social d-flex gap-3">
//             {socialIcons.map(({ icon, id }) => (
//               <li key={id}>
//                 <Link>
//                   <i>{icon}</i>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <Link
//           to={""}
//           className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
//         >
//           <span>
//             <i>
//               <ChevronRight />
//             </i>
//           </span>
//           <span className="get__text"> Let's Talk </span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Drawer;
