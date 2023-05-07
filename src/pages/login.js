import { Link } from "react-router-dom";
import Input from "../components/input/input";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh] overflow-auto">
      <div className="w-[500px] h-[500px] bg-gray-200 rounded-lg">
        <div className="p-10">
          <h3 className="text-3xl text-center">Login </h3>
          <div className="my-5">
            <form>
              <div className="flex flex-col	gap-y-[20px]">
                <div>
                  <Input label={"User name"} />
                </div>
                <div>
                  <Input label={"Password"} />
                </div>
                <button className="p-3 w-full bg-[#fcba03]">Dang nhap</button>
              </div>
            </form>
          </div>
          <p>
            Neu ban chua co tai khoan? hay <Link to="/sign-up">Dang ky</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
