import { Btn } from "../compnents/Btn";
import { Subtitle } from "../compnents/Subtitle";
import { TitleForm } from "../compnents/TitleForm";
import { InputForm } from "../compnents/InputForm";
import Logo from "../compnents/Logo";
import { useCheckLoggedIn, useSignUp } from "../hooks";
import { Error } from "../compnents/Error";
import { Loader } from "../compnents/Loader";

export const Signup = () => {
  useCheckLoggedIn();
  const { navigate, data, setData, isLoading, error, handleBtnClick } =
    useSignUp();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center">
      <Logo />
      {error.isVisible ? <Error errMsg={error.msg} /> : <></>}
      <TitleForm title="Hi,there" />
      <InputForm
        title="Username"
        placeholder="John@123"
        type="text"
        onChange={(e) => {
          setData({ ...data, username: e.target.value });
        }}
      />
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
      <Btn title="SignUp" onClick={handleBtnClick} />
      <Subtitle
        title="Already have an account? "
        link="Login"
        onClick={() => {
          navigate("/signin");
        }}
      />
    </div>
  );
};
