import React from "react";
import { useTodo } from "../../contexts/TodoContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Text, Button, Flex, Box, Skeleton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function Todos() {
  const { theme } = useTheme();
  const { todos, setTodos, displayedTodos, setDisplayedTodos } = useTodo();

  const checked = (id) => {
    setDisplayedTodos(
      displayedTodos.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
    return;
  };

  const handleDelete = (id) => {
    const newTodos = displayedTodos.filter((todo) => todo.id !== id);
    setDisplayedTodos(newTodos);
    const initTodos = todos.filter((todo) => todo.id !== id);
    setDisplayedTodos(newTodos);
    setTodos(initTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const hideCompleted = () => {
    const nonCompleted = displayedTodos.filter(
      (item) => item.isCompleted === false
    );
    setDisplayedTodos(nonCompleted);
  };

  const showAll = () => {
    setDisplayedTodos(todos);
  };

  return (
    <div style={{ margin: "3vh 10vw 28vh 10vw" }}>
      {todos.length > 0 ? (
        <>
          <Flex justify={"space-between"}>
            <Text
              fontWeight={"thin"}
              fontStyle={"italic"}
              fontSize={10}
              align={"left"}
            >
              {" "}
              Click to todos to set them completed{" "}
            </Text>
            <Text
              fontWeight={"thin"}
              fontStyle={"italic"}
              fontSize={10}
              align={"left"}
            >
              {" "}
              Click to close button to remove them{" "}
            </Text>
          </Flex>
          <Flex marginTop={4} justify={"right"}>
            <Button colorScheme={"purple"} onClick={hideCompleted} size={"xs"}>
              Hide completed
            </Button>

            <Button ml={3} colorScheme={"purple"} onClick={showAll} size={"xs"}>
              Show all
            </Button>
          </Flex>
          <ul>
            {displayedTodos.map((item, i) => {
              return (
                <Flex key={i} alignItems={"center"}>
                  <li
                    onClick={() => {
                      checked(item.id);
                    }}
                    className={`todo ${theme === "#fff" ? "light" : "pastel"} ${
                      item.isCompleted === true ? "checked" : ""
                    }`}
                  >
                    <Box>
                      <Text pl={3} fontWeight={"bold"} align={"left"}>
                        {item.title}
                      </Text>{" "}
                      <Text pl={3} align={"left"} fontSize={10}>
                        {item.description}{" "}
                      </Text>
                    </Box>
                  </li>
                  <Button
                    bgColor={"burlywood"}
                    className="todo-button"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    {" "}
                    <CloseIcon />
                  </Button>
                </Flex>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <Text fontStyle={"italic"}>Let's organize your life</Text>
          <Text fontWeight={"bold"} fontSize={10} marginBottom={5}>
            Type something up!
          </Text>
          <Skeleton
            startColor={`${theme === "#fff" ? "pink.100" : "whiteAlpha.100"}`}
            endColor={`${theme === "#fff" ? "pink.200" : "whiteAlpha.200"}`}
            marginBottom={3}
            height="20px"
          />
          <Skeleton
            startColor={`${theme === "#fff" ? "pink.100" : "whiteAlpha.100"}`}
            endColor={`${theme === "#fff" ? "pink.200" : "whiteAlpha.200"}`}
            marginBottom={3}
            height="20px"
          />
          <Skeleton
            startColor={`${theme === "#fff" ? "pink.100" : "whiteAlpha.100"}`}
            endColor={`${theme === "#fff" ? "pink.200" : "whiteAlpha.200"}`}
            marginBottom={3}
            height="20px"
          />
        </>
      )}
    </div>
  );
}

export default Todos;
