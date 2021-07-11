
import { useAuth } from "@/lib/auth";
import { createSite } from "@/lib/db";
import fetcher from "@/utils/fetcher";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";

export default function AddSiteModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const toast = useToast();

  const auth = useAuth();

  const { data } = useSWR('/api/sites', fetcher);

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    };

    // update the local data immediately, but disable the revalidation
    mutate('/api/sites', { sites: [ ...data.sites, newSite ] }, false);
    await createSite(newSite);

    toast({
      title: 'Success',
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true
    });

    // trigger a revalidation (refetch) to make sure our local data is correct
    mutate('api/site');
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {children}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input {...register("name")} ref={initialRef} name="name" placeholder="My site"

              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input {...register("url")}
                name="url" placeholder="https://website.com"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit(onSubmit)} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
