import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import Header from "../Header";
import Insert from "../Insert";
import Todos from "../Todos";

function Container() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "#fff" ? "#EFEAD8" : "#fff");
  };
  return (
    <div className={`${theme === "#fff" ? "light" : "pastel"}`}>
      <div className="Container">
        <Flex flexDirection={"row-reverse"}>
          <Button
            colorScheme={`${theme === "#fff" ? "teal" : "blackAlpha"}`}
            variant={`${theme === "#fff" ? "ghost" : "solid"}`}
            onClick={changeTheme}
          >
            Change Theme
          </Button>
        </Flex>
        <Header />
        <Insert />
        <Todos />
        <Flex h={"10vh"} />
      </div>
    </div>
  );
}

export default Container;
