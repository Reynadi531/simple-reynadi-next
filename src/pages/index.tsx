import { Box, Text, Image, Stack } from "@chakra-ui/react";

import CTA from "components/CTA";

const Home = () => {
  return (
    <Box
      display="flex"
      minHeight="70vh"
      w="full"
      alignItems="center"
      justifyItems="center"
    >
      <Stack
        flex="1"
        alignItems="center"
        justifyItems="center"
        direction="column"
        h="full"
        spacing="6"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/43875921?v=4"
          alt="Profile Picture"
          boxSize="300px"
          borderRadius="full"
        />
        <Box>
          <Stack direction="column" alignItems="center" spacing="1">
            <Text fontSize="xl" fontWeight="medium">
              Reynadi Andreas Priesley
            </Text>
            <Text fontSize="md">Fullstack Web Developer</Text>
          </Stack>
        </Box>
        <CTA />
      </Stack>
    </Box>
  );
};

export default Home;
