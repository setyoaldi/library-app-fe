import { FC, useState, useEffect } from "react";
import loginImage from "/login.png";
import Layout from "../../components/Layout";
import { Contain } from "../../components/Container";
import { InputMyBook } from "../../components/Inputs";
import { PrimButton } from "../../components/Button";
import { Link } from "react-router-dom";

interface objSubmitType {
  name: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  address: string;
}

const Login: FC = () => {
  const [objSubmit, setObjSubmit] = useState<objSubmitType>({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isEmpty = Object.values(objSubmit).every((val) => val !== "");
    setIsDisabled(!isEmpty);
  }, [objSubmit]);

  return (
    <Layout>
      <div className="flex w-full h-full p-20 justify-center">
        <div className="w-[32%] h-max flex justify-end items-center">
          <Contain>
            <form className="w-full h-full p-6 ">
              <p className="text-2xl tracking-wider font-semibold mb-5">
                Sign Up Here
              </p>
              <InputMyBook
                id="input-name"
                placeholder="Name"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, name: event.target.value })
                }
              />
              <div className="my-2" />
              <InputMyBook
                id="input-email"
                placeholder="Email"
                type="email"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, email: event.target.value })
                }
              />
              <div className="my-2" />
              <InputMyBook
                id="input-username"
                placeholder="Username"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, username: event.target.value })
                }
              />
              <div className="my-2" />
              <InputMyBook
                id="input-password"
                placeholder="Password"
                type="password"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, password: event.target.value })
                }
              />
              <div className="my-2" />
              <InputMyBook
                id="input-telephone"
                placeholder="Telephone"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, phone: event.target.value })
                }
              />
              <div className="my-2" />
              <InputMyBook
                id="input-address"
                placeholder="Address"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, address: event.target.value })
                }
              />
              <div className="my-10" />
              <PrimButton
                label="Register"
                id=" button-register"
                type="submit"
                disabled={isDisabled}
              />
              <p className="text-slate-900 text-xs mt-6 text-center">
                Already have an Account ?{" "}
                <a className="font-semibold" id="nav-register" href="#">
                  Login
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
