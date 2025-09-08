export const navBar = {
  logo: {
    src: "/assets/images/logo/01_logo.webp",
    alt: "01 Logo",
    link: "/",
  },
  menu: [
    {
      title: "Home",
      link: "#",
      subMenu: [
        { title: "Home Main", link: "/" },
        { title: "Home Modern", link: "/home-2" },
        { title: "Home Classic", link: "/home-3" },
      ],
    },
    {
      title: "About Us",
      link: "#",
      subMenu: [
        { title: "About Us 1", link: "/about" },
        { title: "About Us 2", link: "/about-2" },
        { title: "About Us 3", link: "/about-3" },
        { title: "Doctors 1", link: "/doctors" },
        { title: "Doctors 2", link: "/doctors-2" },
        { title: "Doctors Details", link: "/doctors/1" },
        { title: "Testimonial 1", link: "/testimonial" },
        { title: "Testimonial 2", link: "/testimonial-2" },
        { title: "Testimonial 3", link: "/testimonial-3" },
      ],
    },
    {
      title: "Department",
      link: "#",
      subMenu: [
        { title: "Department 1", link: "/department" },
        { title: "Department 2", link: "/department-2" },
        { title: "Department 3", link: "/department-3" },
        { title: "Department Details", link: "/department/1" },
      ],
    },
    {
      title: "Blog",
      link: "#",
      subMenu: [
        { title: "Blog Grid", link: "/blog" },
        { title: "Blog Grid Sidebar", link: "/blog-2" },
        { title: "Blog Standard", link: "/blog-3" },
        { title: "Single Blog", link: "/blog/1" },
      ],
    },
    {
      title: "Page",
      link: "#",
      subMenu: [
        { title: "Doctors Timetable", link: "/doctors-timetable" },
        { title: "Appointment 1", link: "/appointment" },
        { title: "Appointment 2", link: "/appointment-2" },
        { title: "Gallery 1", link: "/gallery" },
        { title: "Gallery 2", link: "/gallery-2" },
        { title: "Gallery 3", link: "/gallery-3" },
        { title: "Gallery Details", link: "/gallery/1" },
        { title: "Careers", link: "/careers" },
        { title: "FAQs", link: "/faqs" },
        { title: "Shop", link: "/shop" },
        { title: "Product Details", link: "/shop/1" },
        { title: "Error Page", link: "/error-page" },
      ],
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ],
  tools: {
  content: {
    label: "Call Us",
    phone: "8019299888",
    telLink: "tel:+918019299888",
  },
    cartPopup: {
      items: [
        {
          image: {
            src: "/assets/images/shop/01_shop.webp",
            alt: "01 Shop",
          },
          name: "Syringe",
          quantity: 2,
          price: 38.0,
        },
        {
          image: {
            src: "/assets/images/shop/02_shop.webp",
            alt: "02 Shop",
          },
          name: "Box AID",
          quantity: 1,
          price: 28.0,
        },
      ],
      subtotal: 88.0,
    },
  },
};
