import React from "react";
import Helmet from "react-helmet";
import Header from "../pages/dashboard/components/Header";
import TemplateWrapper from "./layout";

const AdminViewTemplate = ({ children }) => (
  <TemplateWrapper>
    <Helmet title="nordkirchen" meta={[{ name: "robots", content: "noindex" }]} />
    <Header />
    <div id="template">
      <div id="content-wrapper">{children}</div>
    </div>
  </TemplateWrapper>
);

export default AdminViewTemplate;
