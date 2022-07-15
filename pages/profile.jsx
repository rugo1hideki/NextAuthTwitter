import React from "react";

import Image from "next/image";
import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export function Profile({ lin }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const res = [];

  for (var i = 0; i < lin.length; i++) {
    if (lin[i].email == user.name) {
      res.push(lin[i]);
    }
  }

  return (
    <div>
      {user ? (
        <div className="container">
          <Head>
            <title>Profile</title>
          </Head>

          {res.map((res, index) => {
            return (
              <div className="card" key={index}>
                <Image
                  priority
                  className="round"
                  src={res.img}
                  height={100}
                  width={100}
                />
                <div className="top">
                  <h2>{res.name} </h2>
                  <div className="text">
                    <p>{res.text}</p>
                  </div>

                  <div className="mail">
                    <p>{res.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Head>
            <title>Profile</title>
          </Head>
        </div>
      )}
    </div>
  );
}

export default withPageAuthRequired(Profile);

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-atlas-demo");
  let lin = await db.collection("users").find().toArray();
  lin = JSON.parse(JSON.stringify(lin));

  return {
    props: { lin },
  };
}
