import { FC } from "react";
import { Link } from "react-router-dom";

export const Test : FC = () => {
  return (
    <div>
      <h1>Top Page</h1>
      <p>
        <Link to="/page1">Page 1</Link>
      </p>
    </div>
  );
};

export default Test;