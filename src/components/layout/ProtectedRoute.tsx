import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import {
  userCurrentToken,
  userUser,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(userCurrentToken);
  const user = useAppSelector(userUser);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
