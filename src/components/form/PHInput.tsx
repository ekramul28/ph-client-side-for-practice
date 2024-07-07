import { Input } from "antd";
import { Controller } from "react-hook-form";
type TInput = {
  type: string;
  name: string;
  lable?: string;
};

const PHInput = ({ type, name, lable }: TInput) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      {lable ? lable : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
