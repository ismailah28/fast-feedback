import { Avatar, Box, Button, Code, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Head from 'next/head';
import { useAuth } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import DashboardShell from "@/components/DashboardShell";
import FreePlanEmptyState from "@/components/FreePlanEmptyState";
import EmptyState from "@/components/EmptyState";


export default function Home() {
  const auth = useAuth();
  return (
    <Flex direction="column">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        auth?.user ?
          (<Button onClick={() => auth.signout()}>Signout</Button>) :
          (<Button marginTop={4} variant="link" size="sm" onClick={() => auth.signinWithGithub()}>Sign In</Button>)
      }
    </Flex>
  );
}
