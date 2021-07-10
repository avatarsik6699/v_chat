import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Link } from "react-router-dom";

export const LogForm = () => {
  return (
    <div>
      <Typography>Войти в аккаунт</Typography>
      <Typography>Пожалуйста, войдите в свой аккаунт</Typography>
      <div>
        <Input />
      </div>
      <div>
        <Input />
      </div>
      <div>
        <Button>Войти в аккаунт</Button>
      </div>
      <div>
        <Link to="/auth/reg">Зарегистрироваться</Link>
      </div>
    </div>
  );
};
