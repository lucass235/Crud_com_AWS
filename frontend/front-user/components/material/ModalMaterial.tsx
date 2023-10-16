import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { User } from "@/types/User";
import { Grid, TextField } from "@mui/material";
import ReactHookForm from "../ReactHookForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #663333",
  boxShadow: 24,
  p: 4,
  color: "black",
};

export default function ModalMaterial(props: User) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dataForm = (data: any) => {
    console.log("data Modal: ", data);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Editar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            columns={1}
          >
            {/* <img
              style={{ width: "100px", marginBottom: "20px" }}
              src={props.image}
              alt="avatar"
            />
            <TextField
              style={{ marginBottom: "20px" }}
              id="userName-basic"
              label="Nome"
              variant="outlined"
              value={userName}
              onChange={(e) => console.log(e.target.value)}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              id="age-basic"
              label="Idade"
              variant="outlined"
              value={age}
              onChange={(e) => console.log(e.target.value)}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              id="email-basic"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(e) => console.log(e.target.value)}
            />
            <Button variant="contained" onClick={handleClose}>
              Salvar
            </Button> */}
            <ReactHookForm
              user={props}
              handleClose={handleClose}
              dataForm={dataForm}
            />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
