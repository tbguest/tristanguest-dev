import Head from "next/head";
import Social from "../components/Social";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DarkMode from "../components/DarkMode";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tristan Guest</title>
        <meta
          name="Developer landing page"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DarkMode />
        <Header />
        <Social />
        <Footer />
      </main>
    </div>
  );
}
