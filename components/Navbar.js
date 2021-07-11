import React from 'react';
import { Avatar, Button, Flex, Stack } from "@chakra-ui/react";
import MenuItem from "@/components/MenuItem";
import { Logo } from "@/styles/icons";
import { useAuth } from "@/lib/auth";

export default function Navbar() {
  const auth = useAuth();
  return (
    <Flex as="nav" bg="white" w="100%" p={4} align="center" justify="space-between" >
      <Stack spacing={8} align="center" justify="center" direction="row">
        <Logo fontSize="32px" color="black" />
        <MenuItem>Feedback</MenuItem>
        <MenuItem>Sites</MenuItem>
      </Stack>
      <Stack spacing={8} align="center" justify="center" direction="row">
        <MenuItem>
          {
            auth.user ?
              (<Button variant="ghost" onClick={() => auth.signout()}>Log Out</Button>) :
              (<Button variant="solid" onClick={() => auth.signinWithGithub()}>Login</Button>)
          }
        </MenuItem>
        <Avatar size="sm" src={auth?.user?.photoUrl} />
      </Stack>
    </Flex>
  );
}
