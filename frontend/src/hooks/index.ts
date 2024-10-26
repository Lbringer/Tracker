import { SigninInputType, SignupInputType } from "@lbringer237/tracker-common";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BROSWER_URL } from "../config";

export const useInit = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState<{ msg: string; isVisible: boolean }>({
    msg: "",
    isVisible: false,
  });

  return { navigate, isLoading, setisLoading, error, setError };
};

export const useSignUp = () => {
  const { navigate, isLoading, setisLoading, error, setError } = useInit();
  const [data, setData] = useState<SignupInputType>({
    username: "",
    email: "",
    password: "",
  });

  const handleBtnClick = async () => {
    try {
      setisLoading(true);
      const res = await axios.post(`${BROSWER_URL}/api/v1/user/signup`, data);
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/home/today");
      setisLoading(false);
    } catch (error: any) {
      setisLoading(false);
      setError({
        msg: error.response?.data.message || "Something went wrong",
        isVisible: true,
      });
      console.log(error);
    }
  };
  return { handleBtnClick, error, isLoading, data, setData, navigate };
};

export const useSignIn = () => {
  const { navigate, isLoading, setisLoading, error, setError } = useInit();
  const [data, setData] = useState<SigninInputType>({
    email: "",
    password: "",
  });

  const handleBtnClick = async () => {
    try {
      setisLoading(true);
      const res = await axios.post(`${BROSWER_URL}/api/v1/user/signin`, data);
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/home/today");
      setisLoading(false);
    } catch (error: any) {
      setisLoading(false);
      setError({
        msg: error.response?.data.message || "Something went wrong",
        isVisible: true,
      });
      console.log(error);
    }
  };
  return { handleBtnClick, error, isLoading, data, setData, navigate };
};

export const useWhoami = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BROSWER_URL}/api/v1/user`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setName(res.data.username);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/signin");
      });
  }, []);

  return { name };
};

export const useCheckLoggedIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home/today");
    }
  }, []);
};
