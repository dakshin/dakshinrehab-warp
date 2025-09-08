import React, { Fragment } from "react";
import { blogData, blogDetailsData } from "@/data/blog";
import Widget from "../widget/Widget";
import Image from "next/image";
import Link from "next/link";
import IconFollow from "../common/IconFollow";
import QuotePeople from "../common/QuotePeople";
import AddComments from "../common/AddComments";

const BlogDetails = () => {
  return (
    <section className="single-bolg py-100-70">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-2/3 px-3">
            <div className="blog-item">
              <div className="img-box">
                <Image
                  className="img-fluid"
                  src={blogDetailsData.blog.image}
                  alt="03 Blog"
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "auto" }}
                />
                {blogDetailsData.blog.categories && (
                  <>
                    <ul>
                      {blogDetailsData.blog.categories.map((cat, index) => (
                        <Fragment key={cat}>
                          <li>
                            <Link href={`#${cat}`} aria-label={cat}>
                              {cat}
                            </Link>
                          </li>
                          {index !==
                            blogDetailsData.blog.categories.length - 1 && (
                            <li>
                              <Link href="/" aria-label=",">
                                ,
                              </Link>
                            </li>
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="text-box">
                <span className="blog-date">{blogDetailsData.blog.date}</span>
                <h5>{blogDetailsData.blog.title}</h5>
                {blogDetailsData.blog.content.map((item) => (
                  <p key={item}>{item}</p>
                ))}
                {blogDetailsData.blog.share_post && (
                  <div className="share-post">
                    <span>Share Post :</span>
                    <IconFollow
                      className=" "
                      followData={blogDetailsData.blog.share_post}
                    />
                  </div>
                )}
              </div>
            </div>
            <QuotePeople data={blogDetailsData.quote} />
            {blogDetailsData.comments && (
              <>
                <div className="item-comments">
                  <div className="title">
                    <h4>Comments</h4>
                  </div>
                  <div className="inner-comments">
                    {blogDetailsData.comments.map((comment) => (
                      <Fragment key={comment.name}>
                        <div className="comments-box">
                          <div className="img-box">
                            <Image
                              className="img-fluid"
                              src={comment.image}
                              alt={comment.name}
                              width={70}
                              height={70}
                            />
                          </div>
                          <div className="text-box">
                            <h5>{comment.name}</h5>
                            <div className="time">{comment.date}</div>
                            <p>{comment.message}</p>
                            <Link href="#Reply">Reply</Link>
                          </div>
                        </div>
                        {comment.reply && (
                          <>
                            {comment.reply.map((item) => (
                              <div
                                key={item.name}
                                className="comments-box reply"
                              >
                                <div className="img-box">
                                  <Image
                                    className="img-fluid"
                                    src={item.image}
                                    alt={item.name}
                                    width={70}
                                    height={70}
                                  />
                                </div>
                                <div className="text-box">
                                  <h5>{item.name}</h5>
                                  <div className="time">{item.date}</div>
                                  <p>{item.message}</p>
                                  <Link href="#Reply">Reply</Link>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </>
            )}
            <AddComments />
          </div>
          <div className="w-full lg:w-1/3 px-3">
            <div className="sidebar-blog ml-20">
              <Widget style="search" />
              <Widget style="instagram" data={blogData.widgets} />
              <Widget style="categories" data={blogData.widgets} />
              <Widget style="follow" data={blogData.widgets} />
              <Widget style="blogs" data={blogData} />
              <Widget style="tags" data={blogData.widgets} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
