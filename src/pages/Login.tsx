import { Button } from "antd";
import { useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm();
  // const { register } = useFormContext();

  const [login, { isError }] = useLoginMutation();

  const onSubmit = async (data) => {
    console.log(data);
    // const id = toast.loading("Logging in");
    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };
    //   console.log(data);
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("LOgin successful", { id, duration: 2000 });
    //   navigate(`/${user?.role}/dashboard`);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something went wrong", { id, duration: 2000 });
    // }
  };
  return (
    <>
      <PHForm onSubmit={onSubmit}>
        <div>
          <PHInput type="text" name="id" lable="ID:"></PHInput>
        </div>
        <div>
          <PHInput type="password" name="password" lable="Password:"></PHInput>
        </div>
        <Button htmlType="submit">login</Button>
        {isError ? <div style={{ color: "red" }}>{isError}</div> : ""}
      </PHForm>
    </>
  );
};

export default Login;
