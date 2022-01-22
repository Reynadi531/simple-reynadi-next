import { Box, Stack, IconButton } from "@chakra-ui/react";
import {
  RiInstagramLine,
  RiTwitterFill,
  RiGithubFill,
  RiMailLine,
} from "react-icons/ri";

const CTA: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" spacing="6">
        <IconButton
          as="a"
          target="_blank"
          aria-label="Github"
          href="https://github.com/Reynadi531"
          icon={<RiGithubFill />}
          fontSize="30px"
          size="lg"
        />
        <IconButton
          as="a"
          target="_blank"
          aria-label="Twitter"
          href="https://twitter.com/reynadi17"
          icon={<RiTwitterFill />}
          fontSize="30px"
          size="lg"
        />
        <IconButton
          as="a"
          target="_blank"
          aria-label="Instagram"
          href="https://instagram.com/reynadiap"
          icon={<RiInstagramLine />}
          fontSize="30px"
          size="lg"
        />
        <IconButton
          as="a"
          aria-label="Email"
          href="mailto:rey@reynadi.com"
          icon={<RiMailLine />}
          fontSize="30px"
          size="lg"
        />
      </Stack>
    </Box>
  );
};

export default CTA;
