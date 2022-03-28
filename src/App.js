import React from "react";
import "rapidoc";
import "./styles.css";

export default function App() {
  return (
    <rapi-doc
      style={{ height: "100vh", width: "100%" }}
      spec-url="https://petstore.swagger.io/v2/swagger.json"
      render-style="read"
    />
  );
}
