import Service from "./Service";
import Title from "../Shared/Title/Title";
import { useState } from "react";

export const serviceList = [
  {
    id: "01",
    heading: "Frontend Web Development",
    subHeading: "React / Next.js",
    para: "Develop high-performance web frontends using React.js, Next.js, Tailwind, and modern JavaScript with responsive UI."
  },
  {
    id: "02",
    heading: "Full-Stack Development",
    subHeading: "MERN Stack",
    para: "Build complete web applications including APIs, authentication, dashboards, and database connectivity using MERN stack."
  },
  {
    id: "03",
    heading: "WordPress Development",
    subHeading: "WordPress / Elementor",
    para: "Create and customize SEO-friendly WordPress websites including themes, plugins, forms, and content management."
  },
  {
    id: "04",
    heading: "E-Commerce Solutions",
    subHeading: "WooCommerce / Online Store",
    para: "Build and customize e-commerce stores with WooCommerce, secure checkout, product pages, and payment setup."
  },
  {
    id: "05",
    heading: "UI/UX Design & Modernization",
    subHeading: "UI/UX Design",
    para: "Design user-focused, modern interfaces and convert Figma designs into pixel-perfect, responsive web UI."
  },
  {
    id: "06",
    heading: "Website Performance Optimization",
    subHeading: "Speed & SEO",
    para: "Improve website speed, Core Web Vitals, SEO structure, caching, and performance for better ranking & user experience."
  },
  {
    id: "07",
    heading: "AI Chatbot Integration",
    subHeading: "AI Automation",
    para: "Integrate smart AI chatbots on websites using OpenAI APIs, improving customer support and automation workflows."
  },
  {
    id: "08",
    heading: "API Integration & Automation",
    subHeading: "API / Backend Services",
    para: "Connect third-party APIs, automate workflows, and integrate backend services into web applications."
  },
  {
    id: "09",
    heading: "Website Deployment & Hosting",
    subHeading: "Vercel / Netlify / cPanel",
    para: "Deploy and configure websites on modern hosting platforms, manage domains, DNS, SSL, and optimization settings."
  },
  {
    id: "10",
    heading: "Maintenance & Support",
    subHeading: "Bug Fixing / Updates",
    para: "Provide ongoing support, bug fixing, security checks, updates, and monthly maintenance for websites and apps."
  }
];

const Services = ({ isHeading }) => {
  const [showMore, setShowMore] = useState(false);

  const visibleServices = showMore ? serviceList : serviceList.slice(0, 5);

  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"} pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className="service__uniquewrap">
          {visibleServices.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>

        {/* ✅ Show More Button */}
        {!showMore && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowMore(true)}
              className="cmn--btn"
              style={{ padding: "10px 25px", marginTop: "30px" }}
            >
              <span>Show More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;





















// import Service from "./Service";
// import Title from "../Shared/Title/Title";

// const serviceList = [
//   {
//     id: "01",
//     heading: "Frontend Web Development",
//     subHeading: "React / Next.js",
//     para: "Develop high-performance web frontends using React.js, Next.js, Tailwind, and modern JavaScript with responsive UI."
//   },
//   {
//     id: "02",
//     heading: "Full-Stack Development",
//     subHeading: "MERN Stack",
//     para: "Build complete web applications including APIs, authentication, dashboards, and database connectivity using MERN stack."
//   },
//   {
//     id: "03",
//     heading: "WordPress Development",
//     subHeading: "WordPress / Elementor",
//     para: "Create and customize SEO-friendly WordPress websites including themes, plugins, forms, and content management."
//   },
//   {
//     id: "04",
//     heading: "E-Commerce Solutions",
//     subHeading: "WooCommerce / Online Store",
//     para: "Build and customize e-commerce stores with WooCommerce, secure checkout, product pages, and payment setup."
//   },
//   {
//     id: "05",
//     heading: "UI/UX Design & Modernization",
//     subHeading: "UI/UX Design",
//     para: "Design user-focused, modern interfaces and convert Figma designs into pixel-perfect, responsive web UI."
//   },
//   {
//     id: "06",
//     heading: "Website Performance Optimization",
//     subHeading: "Speed & SEO",
//     para: "Improve website speed, Core Web Vitals, SEO structure, caching, and performance for better ranking & user experience."
//   },
//   {
//     id: "07",
//     heading: "AI Chatbot Integration",
//     subHeading: "AI Automation",
//     para: "Integrate smart AI chatbots on websites using OpenAI APIs, improving customer support and automation workflows."
//   },
//   {
//     id: "08",
//     heading: "API Integration & Automation",
//     subHeading: "API / Backend Services",
//     para: "Connect third-party APIs, automate workflows, and integrate backend services into web applications."
//   },
//   {
//     id: "09",
//     heading: "Website Deployment & Hosting",
//     subHeading: "Vercel / Netlify / cPanel",
//     para: "Deploy and configure websites on modern hosting platforms, manage domains, DNS, SSL, and optimization settings."
//   },
//   {
//     id: "10",
//     heading: "Maintenance & Support",
//     subHeading: "Bug Fixing / Updates",
//     para: "Provide ongoing support, bug fixing, security checks, updates, and monthly maintenance for websites and apps."
//   }
// ];
// const Services = ({ isHeading }) => {
//   return (
//     <section
//       id="services"
//       className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
//     >
//       <div className="container">
//         {isHeading && (
//           <Title
//             mainTitle="My Special Service For Your Business Development"
//             sortTitle="Services That i Provide"
//           />
//         )}

//         <div className={`service__uniquewrap `}>
//           {serviceList.map(({ id, heading, subHeading, para }) => (
//             <Service
//               key={id}
//               id={id}
//               heading={heading}
//               subHeading={subHeading}
//               para={para}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
