import Header from "../components/Header";
import Head from "next/head";
export const MainLayout = ({ pageTitle, children }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle || "Web Tutor"}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <main className="md:px-8 sm:px-1">
        <Header />
        {children}
      </main>
    </div>
  );
};
