import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import PaginationArea from "@/components/common/PaginationArea";
import SecTitle from "@/components/common/SecTitle";
import React from "react";
import { blogData } from "@/data/blog";
import ItemBlog from "@/components/blog/ItemBlog";

const BlogPage = ({ searchParams }) => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Blog 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog 1" }]}
      />
      <section className="blog py-100-70">
        <div className="container mx-auto px-4">
          <SecTitle
            title="Read All News"
            subTitle="Recent News"
            description="MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field."
          />
          {blogData.blogs && (
            <>
              <div className="flex flex-wrap -mx-3">
                {Array(3).fill().flatMap((_, repeatIndex) =>
                  blogData.blogs.map((item, itemIndex) => (
                    <div
                      key={`${repeatIndex}-${item.title}-${itemIndex}`}
                      className="w-full md:w-1/2 lg:w-1/3 px-3"
                    >
                      <ItemBlog data={item} />
                    </div>
                  ))
                )}
              </div>
            </>
          )}
          <div className="flex flex-wrap -mx-3">
            <div className="flex-1 px-3">
              <PaginationArea searchParams={searchParams} />
            </div>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default BlogPage;
