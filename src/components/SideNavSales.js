import React from "react";
import { Link } from "react-router-dom";

const sideNavLinks = [
  {
    title: "Sales",
    path: "/products/skyz-sales/sales/",
  },
  {
    title: "Lead management",
    path: "/products/skyz-sales/lead-management/",
  },
  {
    title: "Opportunity management",
    path: "/products/skyz-sales/opportunity-management/",
  },
  {
    title: "Sales management",
    path: "/products/skyz-sales/sales-management/",
  },
  {
    title: "Contact management",
    path: "/products/skyz-sales/contact-management/",
  },
  {
    title: "Meetings management",
    path: "/products/skyz-sales/meetings-management/",
  },
  {
    title: "Performance management",
    path: "/products/skyz-sales/performance-management/",
  },
  {
    title: "Skyz Sales Cloud",
    path: "/products/skyz-sales/skyz-sales-cloud/",
  },
  {
    title: "Skyz Sales Mobile",
    path: "/products/skyz-sales/skyz-sales-mobile/",
  },
  {
    title: "Sales Workflow",
    path: "/products/skyz-sales/sales-workflow/",
  },
  {
    title: "Email integration",
    path: "/products/skyz-sales/email-integration/",
  },
  {
    title: "Information sharing",
    path: "/products/skyz-sales/information-sharing/",
  },
  {
    title: "Calendar sharing",
    path: "/products/skyz-sales/calendar-sharing/",
  },
  {
    title: "Social sharing",
    path: "/products/skyz-sales/social-sharing/",
  },
  {
    title: "Forecast sales",
    path: "/products/skyz-sales/forecast-sales/",
  },
  {
    title: "Reports and Dashboards",
    path: "/products/skyz-sales/reports-and-dashboards/",
  },
];

const SideNavSales = () => {
  return (
    <div className="side-nav">
      <div className="header">
        <span>Sales</span>
        <span class="material-symbols-outlined icon">remove</span>
      </div>
      <div className="links">
        {sideNavLinks.map((link, index) => (
          <Link key={index} to={link.path} className="link">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavSales;
