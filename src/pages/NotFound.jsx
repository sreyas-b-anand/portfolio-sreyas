import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-bg w-screen h-screen text-primary text-center flex items-center justify-center">
      Oops!!! You are lost....Go back to{" "}
      <u>
        <Link className="p-1" to={"/"}>
          {" "}
          Home
        </Link>
      </u>
    </div>
  );
}

export default NotFound;
