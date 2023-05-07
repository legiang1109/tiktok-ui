import { Link, useNavigate, useNavigation } from "react-router-dom";
import Input from "../components/input/input";
import { useRef,useState } from "react";
import { saveUser } from "../repositories/UserRepository";

function Register() {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [error, setError] = useState('');
  const userNameRef = useRef();
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const fullname = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters long');
      return;
    }
    setUsernameError('')
    if (!fullname.match(/^[a-zA-Z ]+$/)) {
      setFullnameError('Full name must contain only letters');
      return;
    }
    setFullnameError('')
    if (phone.length < 10) {
      setPhoneError('Phone number must be at least 10 digits long');
      return;
    }
    setPhoneError('')
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/)) {
      setPasswordError('Password must be at least 8 characters long and contain 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character');
      return;
    }setPasswordError('')

    // clear error and submit data to server
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError("password does not match");
      return;
    }
    setError('');
    saveUser({
      username: userNameRef.current.value,
      fullname: fullNameRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    });
    navigate("/sign-in");
  };
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] overflow-auto">
        <div className="w-[500px] bg-gray-200 rounded-lg">
          <div className="p-10">
            <h3 className="text-3xl text-center">Register</h3>
            <div className="my-5">
              <form onSubmit={handleRegister}>
                <div className="flex flex-col	gap-y-[20px]">
                  <div>
                    <Input
                      label={"Ten tai khoan"}
                      id={"username"}
                      reff={userNameRef}
                      required minLength={3}
                    />
                  </div>
                  {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
                  <div>
                    <Input label={"Full name"} reff={fullNameRef} 
                    pattern="[a-zA-Z ]+" required/>
                  </div>
                  {fullnameError && <p style={{ color: 'red' }}>{fullnameError}</p>}
                  <div>
                    <Input label={"Phone number"} reff={phoneRef} 
                    minLength={10} required/>
                  </div>
                  {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                  <div>
                    <Input label={"Password"} reff={passwordRef} 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)" required/>
                  </div>
                  {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                  <div>
                    <Input
                      label={"Password Confirm"}
                      reff={passwordConfirmRef}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)" required
                    />
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <button className="p-3 w-full bg-[#fcba03]">Dang ky</button>
                </div>
              </form>
            </div>
            <p>
              Neu ban co tai khoan? hay <Link to="/sign-in">Dang nhap</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
