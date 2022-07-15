import clientPromise from "../lib/mongodb";
import Head from "next/head";
import Image from "next/image";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export function Home({ users }) {
  return (
    <div className="container">
      <div>
        <Head>
          <title>Posts</title>
        </Head>

        {users.map((user, index) => {
          return (
            <div className="card" key={index}>
              <div>
                <Image
                  priority
                  className="round"
                  src={user.img}
                  height={100}
                  width={100}
                />
                <div className="top">
                  <h2>{user.name} </h2>
                  <div className="text">
                    <p>{user.text}</p>
                  </div>

                  <div className="mail">
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;

  const db = client.db("nextjs-mongodb-atlas-demo");

  let users = await db.collection("users").find().toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}

export default withPageAuthRequired(Home);
