import { Box, Button, TextField } from "@mui/material";
import React, { Component } from "react";
import { useForm } from "react-hook-form";
import global from "../styles/Home.module.css";
import Client from "@/model/Client";

interface Props {
  user: Client;
  handleClose: () => void;
  dataForm: any;
}

const ReactHookForm = ({ user, handleClose, dataForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dataForm(data);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="on"
    >
      {/* adicionar uma imagem no meio do form */}
      <img
        src={user.image}
        alt="avatar"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "auto",
          marginLeft: "37px",
        }}
        {...register("image")}
      />

      <div className="form-gruop">
        <TextField
          className="form-control"
          id="outlined-error-helper-text"
          variant="outlined"
          label="Nome"
          type="text"
          helperText={
            errors.name?.type == "required" ? "Nome é obrigatório" : null
          }
          placeholder="Digite seu Nome"
          {...register("name", { required: true })}
        />
      </div>
      <div className="form-gruop">
        <TextField
          id="age-input"
          variant="outlined"
          label="Idade"
          type="number"
          inputMode="numeric"
          className="form-control"
          helperText={
            errors.age?.type == "required" ? "Idade é obrigatório" : null
          }
          placeholder="Digite sua idade"
          {...register("age", { required: true })}
        />
      </div>
      <div className="form-gruop">
        <TextField
          id="email-input"
          variant="outlined"
          label="E-mail"
          type="email"
          className="form-control"
          helperText={
            errors.email?.type == "required" ? "E-mail é obrigatório" : null
          }
          placeholder="Digite seu e-mail"
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-gruop">
        <Button
          onClick={() => {
            handleSubmit(onSubmit)();
            handleClose();
          }}
          disabled={Object.values(errors).length > 0}
        >
          Salvar
        </Button>
      </div>
    </Box>
  );
};

export default ReactHookForm;
