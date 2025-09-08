import React from "react";
import { blogData } from "@/data/blog";
import SecTitle from "../common/SecTitle";
import ItemBlog from "./ItemBlog";

const Blog = ({ navbarStyle = 1 }) => {
  return (
    <section className="blog py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={navbarStyle}
          title={blogData.title}
          subTitle={blogData.subtitle}
          description={blogData.description}
          button={blogData.button}
        />
        <div className="flex flex-wrap -mx-3">
          {blogData.blogs.map((item, index) => (
            <div key={item.title} className="w-full md:w-1/2 lg:w-1/3 px-3">
              <ItemBlog data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
