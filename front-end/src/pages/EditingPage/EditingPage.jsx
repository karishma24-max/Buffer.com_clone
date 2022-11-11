import React from "react";
import { Button, Collapse, Box, useDisclosure, Input } from "@chakra-ui/react";
const EditingPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box p="40px" mt="4" rounded="md" shadow="md" width="400px">
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
          <Input type="file" />
        </Box>
      </Collapse>
      <br />
      <label>Label</label>
      <Input type="text" />
      <label>Link</label>
      <Input type="text" />
      <label>Text</label>
      <Input type="text" />
      <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
        <Input type="file" />
        <label>Enter description for image</label>
        <Input type="text" />
      </Box>
      <label>Text</label>
      <Input type="text" />
      <label>YouTube Video URL</label>
      <Input type="text" />
    </Box>
  );
};

export default EditingPage;
