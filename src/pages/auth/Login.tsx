import { FC, useState, useEffect, FormEvent } from "react";
import loginImage from "/login.png";
import Layout from "../../components/Layout";
import { Contain } from "../../components/Container";
import { InputMyBook } from "../../components/Inputs";
import { PrimButton } from "../../components/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface objSubmitType {
  username: string;
  password: string;
}

const Login: FC = () => {
  const navigate = useNavigate();
  const [objSubmit, setObjSubmit] = useState<objSubmitType>({
    username: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isEmpty = Object.values(objSubmit).every((val) => val !== "");
    setIsDisabled(!isEmpty);
  }, [objSubmit]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisabled(true);
    axios
      .post("http://54.169.5.251:8080/login", objSubmit)
      .then((response) => {
        const { data, message } = response.data;
        console.log(response);
      })
      .catch((error) => {
        const { data } = error.response;
        console.log(data);
      })
      .finally(() => setIsDisabled(false));
  }

  return (
    <Layout>
      <div className="flex w-full h-full p-20 justify-center">
        <div className="w-[32%]  flex justify-end items-center">
          <Contain>
            <form
              className="w-full p-8"
              onSubmit={(event) => handleSubmit(event)}
            >
              <p className="text-lg tracking-wide mb-5">Welcome !</p>
              <p className="text-2xl tracking-wider font-semibold mb-1">
                Login
              </p>
              <p className="text-xs mb-10">lorem Ipsum is simply</p>
              <InputMyBook
                id="input-username"
                placeholder="Username"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, username: event.target.value })
                }
              />
              <div className="my-6" />
              <InputMyBook
                id="input-password"
                placeholder="Password"
                type="password"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, password: event.target.value })
                }
              />
              <div className="my-12" />
              <PrimButton
                label="Login"
                id=" button-login"
                type="submit"
                disabled={isDisabled}
              />
              <p className="text-slate-900 text-xs mt-8 text-center">
                Don't have an Account ?{" "}
                <a
                  className="font-semibold"
                  id="nav-register"
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </p>
            </form>
          </Contain>
        </div>
        <div className="w-[55%]">
          <img src={loginImage} alt="image-login" />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
