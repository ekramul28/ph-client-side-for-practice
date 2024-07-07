import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHInput = ({ type, name, lable }) => {
  return (
    <>
      {lable ? lable : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </>
  );
};

export default PHInput;
