
import NextLink from 'next/link';
import { Box, Link, Table, Tr, Td, Th, Thead, Tbody } from '@chakra-ui/react';
import { format, parseISO } from "date-fns";

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="auto">
      <Table w="full">
        <Thead bg="gray.50">
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{''}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sites.map(site => (
            <Box as="tr" key={site.url}>
              <Td>{site.name}</Td>
              <Td>{site.url}</Td>
              <Td><NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                <Link>View Feedback</Link>
              </NextLink></Td>
              <Td> {format(parseISO(site.createdAt), 'PPpp')}</Td>
              <Td>{' '}</Td>
            </Box>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
