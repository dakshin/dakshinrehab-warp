import React from "react";
import { doctorsDetailsData } from "@/data/doctors";
import Image from "next/image";
import Link from "next/link";
import Skills from "../skills/Skills";
import QuotePeople from "../common/QuotePeople";

const DoctorsDetails = () => {
  return (
    <section className="single-doctors py-100-70">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/3 px-3">
            <div className="doctors-box mr-20">
              <div className="img-box">
                <Image
                  className="img-fluid"
                  src={doctorsDetailsData.doctor.image}
                  alt={doctorsDetailsData.doctor.name}
                  height={800}
                  width={800}
                />
                <div className="img-box-hover">
                  <ul>
                    {doctorsDetailsData.doctor.social_links.facebook && (
                      <li>
                        <Link
                          href={doctorsDetailsData.doctor.social_links.facebook}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                    )}
                    {doctorsDetailsData.doctor.social_links.twitter && (
                      <li>
                        <Link
                          href={doctorsDetailsData.doctor.social_links.twitter}
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                    )}
                    {doctorsDetailsData.doctor.social_links.instagram && (
                      <li>
                        <Link
                          href={
                            doctorsDetailsData.doctor.social_links.instagram
                          }
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    )}
                    {doctorsDetailsData.doctor.social_links.dribbble && (
                      <li>
                        <Link
                          href={doctorsDetailsData.doctor.social_links.dribbble}
                        >
                          <i className="fab fa-dribbble"></i>
                        </Link>
                      </li>
                    )}
                    {doctorsDetailsData.doctor.social_links.behance && (
                      <li>
                        <Link
                          href={doctorsDetailsData.doctor.social_links.behance}
                        >
                          <i className="fab fa-behance"></i>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="text-box text-center">
                <h5>{doctorsDetailsData.doctor.name}</h5>
                <span>{doctorsDetailsData.doctor.specialty}</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 px-3">
            <div className="introduction-doctors">
              <h3>{doctorsDetailsData.doctor.name}</h3>
              <p>{doctorsDetailsData.introduction}</p>
              <p>{doctorsDetailsData.description}</p>
              {doctorsDetailsData.core_features && (
                <ul className="about-core">
                  {doctorsDetailsData.core_features.map((item) => (
                    <li key={item}>
                      <i className="fas fa-check-double"></i>
                      <h4>{item}</h4>
                    </li>
                  ))}
                </ul>
              )}
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h3>More Biography</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h3>doctors skills</h3>
              <Skills data={doctorsDetailsData.skills} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <QuotePeople data={doctorsDetailsData.quote} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
