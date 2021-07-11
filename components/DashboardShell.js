import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";


export default function DashboardShell({ children }) {
  return (
    <Flex mt={8} h="80vh" mx={4} maxWidth="1250px" px={[ 0, 8, 8 ]} direction="column" >
      <Flex direction="column" >
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink fontSize="sm" color="gray.700">Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box mb={4}>
          <Flex align="center" justifyContent="space-between">
            <Heading>My Sites</Heading>
            <AddSiteModal>Add Site</AddSiteModal>
          </Flex>
        </Box>
      </Flex>
      <Box p={16} bg="white" w="100%" borderRadius="8px" >
        {children}
      </Box>
    </Flex>
  );
}
