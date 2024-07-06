import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login, { isError }] = useLoginMutation();

  const onSubmit = async (data) => {
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
    } catch (error) {
      toast.error("Something went wrong", { id, duration: 2000 });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">login</Button>
      {isError ? <div style={{ color: "red" }}>{isError}</div> : ""}
    </form>
  );
};

export default Login;
