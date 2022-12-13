import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";

export default function LoginForm() {
  return (
    <div className="w-1/4 p-8 bg-white rounded shadow-lg">
      <text className="text-xl font-black">Login</text>
      <form className="flex flex-col gap-4">
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <SqaureButton text="Login" />
      </form>
    </div>
  );
}
