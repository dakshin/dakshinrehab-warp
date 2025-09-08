import Link from "next/link";
import React from "react";

const CopyrightFooter = () => {
  return (
    <div className="copyright">
      <div className="container mx-auto px-4">
        <p className="wow fadeInUp" data-wow-delay="0.3s">
          © 2025 DakshinRehab. All rights reserved.
          <Link href="https://www.dakshinrehab.com">
            DakshinRehab
          </Link>
        </p>
        <ul className="wow fadeInUp" data-wow-delay="0.5s">
          <li>
            <Link href="#">Terms &amp; Conditions </Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Sitemap</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CopyrightFooter;
