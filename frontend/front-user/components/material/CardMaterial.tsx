import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { User } from "@/types/User";

export default function CardMaterial(props: User) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.userName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.age}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            alert("Implementar edit");
          }}
          size="small"
          color="primary"
          variant="contained"
        >
          Editar
        </Button>
      </CardActions>
    </Card>
  );
}
