import "../../Card/style.css";

import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function Online() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minWidth={"50px"}
      maxWidth={"50px"}
      height={"20px"}
      padding={"5px"}
      borderRadius={"5px"}
      sx={{ color: "#fff", backgroundColor: "#FF0000" }}
    >
      {/* {type}online */}
      <Typography>Online</Typography>
    </Box>
  );
}
