import Head from "next/head";
import { Flex, Text, Divider, Center } from "@chakra-ui/react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { Heading } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

// https://final-project-front-end-undefinedd.vercel.app/

export default function About() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("http://localhost:3000/");
  };

  return (
    <div>
      <div>
        <Head>
          <title>About | Enabled </title>
          <meta name="description" content="About" />
        </Head>

        <Flex
          cursor="pointer"
          object-fit="cover"
          object-position="center"
          align="center"
        >
          <Image
            src={Logo}
            alt={"AccesU Logo"}
            style={{ zIndex: 99 }}
            onClick={handleClick}
          />
        </Flex>

        <Flex
          height="100px"
          align="center"
          justify="space-around"
          bgGradient="linear(to-r, #1773da, #030d96 )"
        >
          <Flex align="center" width="25%">
            <QuestionOutlineIcon color={`white`} w={20} h={16} />

            <Text color="white" fontWeight={"bold"}>
              Do you have to spend ages planning your trip?
            </Text>
          </Flex>

          <Flex align="center" width="25%">
            <QuestionOutlineIcon color={`white`} w={20} h={16} />
            <Text color="white" fontWeight={"bold"}>
              Have you visited somewhere to only find the access wasn't as you
              thought?
            </Text>
          </Flex>
          <Flex align="center" width="25%">
            <QuestionOutlineIcon color={`white`} w={20} h={16} />
            <Text color="white" fontWeight={"bold"}>
              Are you anxious visiting a new place so much so it stopped you
              from making that trip?
            </Text>
          </Flex>
        </Flex>
        <Flex justify="center">
          <Flex width="60%">
            <main>
              <br />
              <Heading color={"#2C2C68"}>Welcome!</Heading>

              <Text>
                Enabled is here to take the stress out of planning. Our aim is
                to provide you with all the accessibility information you need
                in order to plan your trip.
              </Text>
              <br />
              <Center height="10px">
                <Divider
                  borderColor={`#FF9100`}
                  orientation="horizontal"
                  width="90%"
                />
              </Center>
              <Heading color={"#2C2C68"}>Why?</Heading>

              <UnorderedList>
                <ListItem>
                  1 in 4 households are impacted by disability
                </ListItem>
                <ListItem>
                  98% of disabled people look for accessibility information
                  before visiting somewhere for the first time
                </ListItem>
                <ListItem>
                  Over 75% of disabled people don’t visit somewhere they wanted
                  to go because they couldn’t find the accessibility information
                  they needed
                </ListItem>
                <ListItem>
                  This results in disabled people making 26% fewer trips than
                  those without a disability
                </ListItem>
              </UnorderedList>
              <br />

              <Text>
                With Enabled we hope you can be more spontaneous, visit,
                recommend and return!
              </Text>
            </main>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
