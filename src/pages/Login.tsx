/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isError }] = useLoginMutation();
  const onSubmit = async (data: { id: string; password: string }) => {
    console.log(data);
    const id = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      console.log(data);
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("LOgin successful", { id, duration: 2000 });
      navigate(`/${user?.role}/dashboard`);
    } catch (error: any) {
      console.log(error);
      setError(error);
      toast.error("Something went wrong", { id, duration: 2000 });
    }
  };
  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="id" lable="ID:"></PHInput>

          <PHInput type="password" name="password" lable="Password:"></PHInput>

          <Button htmlType="submit">login</Button>
          {error ? (
            <div style={{ color: "red" }}>{error?.data.message}</div>
          ) : (
            ""
          )}
        </PHForm>
      </Row>
    </>
  );
};

export default Login;
