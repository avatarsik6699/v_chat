import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Link } from "react-router-dom";

const inputList = [
  { placeholder: "E-Mail" },
  { placeholder: "Ваше имя" },
  { placeholder: "Пароль" },
  { placeholder: "Повторить пароль" },
];

export const RegForm: React.FC = () => {
  const inputsJSX = inputList.map((item, index) => (
    <div key={index}>
      <Input />
    </div>
  ));

  return (
    <div>
      <Typography>Регистрация</Typography>
      <Typography>Для входа в чат, вам нужно зарегистрироваться</Typography>
      {inputsJSX}
      <div>
        <Button>Зарегистрироваться</Button>
      </div>
      <div>
        <Link to="/auth/log">Войти в аккаунт</Link>
      </div>
    </div>
  );
};
