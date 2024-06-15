//import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import PropTypes from "prop-types";

export default function BreadCrumbs({path}) {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
    {path.map((item, index) => (
      <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
    ))}
    </Breadcrumbs>
  );
}

//props validation
BreadCrumbs.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string).isRequired,
};

