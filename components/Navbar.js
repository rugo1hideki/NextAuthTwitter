import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

export const Navbar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <ul>
      {user ? (
        <div>
          <a className="log" href="/api/auth/logout">
            <button className="button">Logout</button>
          </a>
          <a className="profile" href="/profile">
            <button className="button">Main</button>
          </a>
          <a className="posts" href="/posts">
            <button className="button">Posts</button>
          </a>
        </div>
      ) : (
        <a className="log" href="/api/auth/login">
          <button className="button">Login</button>
        </a>
      )}

      <div>
        {user ? (
          <img src={user.picture} alt={user.name} className="round" />
        ) : (
          <></>
        )}
      </div>
    </ul>
  );
};

export default Navbar;
