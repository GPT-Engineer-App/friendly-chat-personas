import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Stack, Text, VStack, Image, useColorModeValue, IconButton, Avatar } from "@chakra-ui/react";
import { FaPaperPlane, FaRobot, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((messages) => [...messages, { text: "Hello! I'm an AI trained to chat with you.", sender: "ai" }]);
      }, 1000);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          AI Chat App
        </Heading>
        <Text>Select a persona and start chatting:</Text>
        <Flex gap="20px">
          <Button leftIcon={<FaRobot />} colorScheme="teal">
            Tech Bot
          </Button>
          <Button leftIcon={<FaUserCircle />} colorScheme="pink">
            Friendly Bot
          </Button>
        </Flex>
        <Box bg={useColorModeValue("gray.50", "gray.700")} w="full" p={4} borderRadius="lg" boxShadow="base" overflowY="auto" height="400px">
          {messages.map((message, index) => (
            <Flex key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} bg={message.sender === "user" ? "blue.100" : "green.100"} borderRadius="lg" p={2} m={1}>
              <Text>{message.text}</Text>
            </Flex>
          ))}
        </Box>
        <Flex w="full">
          <Input placeholder="Type your message here..." value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} flexGrow={1} />
          <IconButton aria-label="Send message" icon={<FaPaperPlane />} onClick={handleSendMessage} colorScheme="blue" ml={2} />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
