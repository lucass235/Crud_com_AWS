import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearLoader() {
  return (
    <div>
      <h1>
        <center style={{ marginTop: "20%", font: "bold" }}>
          Carregando...
        </center>
      </h1>

      <Box
        sx={{
          width: "50%",
          marginTop: "10%",
          marginBottom: "5%",
          marginLeft: "25%",
        }}
      >
        <LinearProgress />
      </Box>
    </div>
  );
}
