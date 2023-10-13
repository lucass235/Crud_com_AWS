import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Modal } from "@mui/material";
import { User } from "@/types/User";
import ModalMaterial from "./ModalMaterial";

export default function CardMaterial(props: User) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={props.image}
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
        <ModalMaterial {...props} />
      </CardActions>
    </Card>
  );
}
