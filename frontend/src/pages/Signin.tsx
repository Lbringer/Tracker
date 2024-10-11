import Logo from "../compnents/Logo";
import { TitleForm } from "../compnents/TitleForm";
import { InputForm } from "../compnents/InputForm";
import { Btn } from "../compnents/Btn";
import { Subtitle } from "../compnents/Subtitle";
import { useCheckLoggedIn, useSignIn } from "../hooks";
import { Loader } from "../compnents/Loader";
import { Error } from "../compnents/Error";

export const Signin = () => {
  useCheckLoggedIn();
  const { handleBtnClick, error, isLoading, data, setData, navigate } =
    useSignIn();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <Logo />
      <TitleForm title="Welcome back!" />
      <InputForm
        title="Email"
        placeholder="John123@gmail.com"
        type="email"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <InputForm
        title="Password"
        placeholder=""
        type="password"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <Btn title="Login" onClick={handleBtnClick} />
      <Subtitle
        title="Dont have an account? "
        link="Register"
        onClick={() => {
          navigate("/signup");
        }}
      />
    </div>
  );
};
