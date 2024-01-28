import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Modal } from "@mui/material";
import ModalMaterial from "./ModalMaterial";
import Client from "@/model/Client";

interface Props {
  client: Client;
  dataForm?: (data: any) => void;
}

export default function CardMaterial(props: Props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={props.client.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.client.userName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.client.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.client.age}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalMaterial {...props.client} />
      </CardActions>
    </Card>
  );
}
