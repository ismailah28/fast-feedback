import DashboardShell from "./DashboardShell";
import { Button, Heading, Text } from "@chakra-ui/react";

export default function FreePlanEmptyState() {
  return (
    <DashboardShell>
      <Heading size="md" mb={2}>
        Get feedback on your site instantly
      </Heading>
      <Text mb={4}>Start today. Grow with us 🌱</Text>
      <Button>Upgrade to Starter</Button>
    </DashboardShell>
  );
}


