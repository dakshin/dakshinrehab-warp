import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

const ErrorPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="404 Error"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "404 Error" }]}
      />
      <section className="page-404-area">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-2/3 md:mx-auto px-3 text-center">
              <h2>404</h2>
              <p>
                The page you are looking for is not available. DakshinRehab provides expert physiotherapy, rehabilitation, and prosthetics services to help patients regain mobility, strength, and confidence. Explore our services or return to the homepage.
              </p>
              <Link href="/" className="btn-1">
                Go Back To Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default ErrorPage;