import DashboardShell from "./DashboardShell";
import { Button, Heading, Text } from "@chakra-ui/react";
import AddSiteModal from "@/components/AddSiteModal";

export default function EmptyState() {
  return (
    <>
      <Heading size="md" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Let’s get started.</Text>
      <AddSiteModal />
    </>
  );
}
