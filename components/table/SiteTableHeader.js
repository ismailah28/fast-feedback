import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  Box
} from "@chakra-ui/react";

import AddSiteModal from "../AddSiteModal";

const SiteTableHeader = () => {
  return <Box mx={4}>
    <Flex justifyContent="space-between">
      <Heading mb={8}>My Sites</Heading>
      <AddSiteModal>Add your first site</AddSiteModal>
    </Flex>
  </Box>;
};

export default SiteTableHeader;