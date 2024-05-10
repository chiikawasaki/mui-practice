import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Typography
        //   レスポンシブ対応
        fontSize={{
          xs: "10px",
          md: "30px",
        }}
        color={{
          xs: "red",
          sm: "pink",
        }}
        bgcolor={"black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        // marginTop={"100px"}
        mt={5}
        p={5}
        // 数字で書くと8倍
      >
        Hello World !
      </Typography>
    </Box>
  );
};

export default page;
