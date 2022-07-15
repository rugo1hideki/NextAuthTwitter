import Head from "next/head";
import Image from "next/image";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <div>
          <Head>
            <title>Main</title>
          </Head>
          <h2>
            <span class="tab"></span>Project
          </h2>
          <div>
            <p>
              <span class="tab"></span>Now you can review all the posts by
              clicking on the Posts button and yours by clicking on Main
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Head>
            <title>Main</title>
          </Head>
          <h2>
            <span class="tab"></span>Begin
          </h2>
          <p>
            <span class="tab"></span>You are on the home page . In order to
            access the posts you need to automate using the Login button. After
            entering the data from the pass.txt.
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
