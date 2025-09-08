"use client";
import React from "react";
import Widget from "../widget/Widget";
import { departmentsDetailsData } from "@/data/departments";
import { useShareData } from "@/context/ShareDataContext";
import FAQs from "../common/FAQs";
import ItemBlog from "../blog/ItemBlog";

const DepartmentDetails = () => {
  const { showYoutubeVideoUrlHandel } = useShareData();
  return (
    <section className="single-department py-100-70">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/3 px-3">
            <div className="sidebar-department mr-20">
              <Widget style="department" data={departmentsDetailsData.widgets} />
              <Widget style="search" />
              <Widget style="instagram" data={departmentsDetailsData.widgets} />
              <Widget style="tags" data={departmentsDetailsData.widgets} />
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-3">
            <div className="single-department-box">
              <h2>{departmentsDetailsData.title}</h2>
              <p>{departmentsDetailsData.description}</p>
              {departmentsDetailsData.benefits && (
                <>
                  <h3>benfits</h3>
                  <ul className="about-core">
                    {departmentsDetailsData.benefits.map((item) => (
                      <li key={item}>
                        <i className="fas fa-check-double"></i>
                        <h4>{item}</h4>
                      </li>
                    ))}
                  </ul>
                </>
              )}
             {departmentsDetailsData.videoPresentationUrl && (
               <>
                 <h3>Video Presentation</h3>
                 <p>
                   Learn about DakshinRehab’s specialized services, including physiotherapy, neuro rehab, pediatric rehabilitation, vascular therapy, and prosthetics & orthotics. Watch how our expert team helps patients regain mobility, strength, and confidence.
                 </p>
                 <div className="video-presentation">
                   <div className="overlay"></div>
                   <div className="presentation-box">
                     <button
                       aria-label="pulse-2"
                       className="pulse"
                       onClick={() =>
                         showYoutubeVideoUrlHandel(
                           "https://www.youtube.com/embed/TKnufs85hXk?si=28-Wg09VkcMw2l_I"
                         )
                       }
                     >
                       <i className="fas fa-play"></i>
                     </button>
                   </div>
                 </div>
               </>
             )}
              {departmentsDetailsData.faqs && (
                <>
                  <h3>General Ask</h3>
                  <FAQs data={departmentsDetailsData.faqs} />
                </>
              )}
              {departmentsDetailsData.blogs && (
                <>
                  <div className="flex flex-wrap -mx-3">
                    {departmentsDetailsData.blogs.map((item) => (
                      <div key={item.title} className="w-full md:w-1/2 px-3">
                        <ItemBlog data={item} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetails;
