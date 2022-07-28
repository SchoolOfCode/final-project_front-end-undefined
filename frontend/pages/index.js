import Head from "next/head";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import dynamic from 'next/dynamic'
const Map = dynamic(() => import("../Components/Map/Map"), {
  loading: () => "Loading...",
  ssr: false,
});


export default function Home() {
  return (
   <Map/>
  );
}
