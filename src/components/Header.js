import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AUTH_TOKEN } from "./constants";

const Header = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  console.log(authToken);
  return (
    <div>
      <div>
        <div>Manage-tool</div>
        {/* <Link to="/">new</Link>
        <div>|</div>
        <Link to="/top">top</Link>
        <div>|</div>
        <Link to="/search">search</Link> */}
        {authToken && (
          <div>
            <div>|</div>
            <Link to="/create">submit</Link>
          </div>
        )}
      </div>
      <div>
        {authToken ? (
          <div
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              history.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
