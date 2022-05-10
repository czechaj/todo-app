import React from "react";
import { Center, Image } from "@chakra-ui/react";
import Logo from "./Logo.png";

function Header() {
  return (
    <div>
      <Center>
        <Image src={Logo} h={"20vh"} w={"28vw"} />
      </Center>
    </div>
  );
}

export default Header;
