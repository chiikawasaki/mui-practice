import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
      <Box>
        <Button variant="contained" href="/saki" color="inherit">
          Contained
        </Button>
        <Typography>muiの勉強会</Typography>
      </Box>
  );
}
