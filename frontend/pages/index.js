import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchBar from "../Components/SearchBar/SearchBar.js";
import dynamic from 'next/dynamic'
const Map = dynamic(() => import("../Components/Map/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <Map/>
    </div>
    )
}




