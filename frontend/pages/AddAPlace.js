import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Logo from "../public/logo_new_resized.png";
import Image from "next/image";
import { useRouter } from "next/router";
// import AddAPlace from '../components/AddAPlace/Place/AddAPlace.js'
import AddAPlaceForm from "../components/AddAPlaceForm";

export default function AddANewPlace() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>Add A Place | AccessU </title>
        <meta name="description" content="Add A Place" />
      </Head>

      <Flex cursor="pointer" object-fit="cover" object-position="center">
        <Image
          src={Logo}
          alt={"AccessU logo"}
          style={{ zIndex: 99 }}
          onClick={handleClick}
        />
      </Flex>
      <AddAPlaceForm />
    </div>
  );
}
