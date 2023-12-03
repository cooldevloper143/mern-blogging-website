import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";

const UserAuthForm = ({ type }) => {
  return (
    <section className="h-cover flex items-center justify-center">
      <form action="" className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {type == "signin" ? "welcome back" : "Join up today"}
        </h1>
        {/* renderedn input box with props so it will change dyanmically  */}
        {type != "signin" ? <InputBox
          name="full name"
          type="text"
          // id="full name"
          placeholder="full name"
          icon={"fi-sr-user"}

        /> : null}
        <InputBox
          name="email"
          type="email"
          // id="full name"
          placeholder="email"
          icon={"fi-sr-envelope"}

        />
        <InputBox
          name="password"
          type="password"
          // id="full name"
          placeholder="password"
          icon={"fi-sr-key"}

        />
        <button
          className="btn-dark center mt-14 "
          type="submit"
        >
          {type == "signin" ? "sign in" : "sign up"}
        </button>

        <div className="relative w-[100%] flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold ">
          <hr className="w-1/2 border-black" />
          <p>or</p>
          <hr className="w-1/2 border-black" />

        </div>

        <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
          <img src={googleIcon} className="w-5 " alt="" />

          continue with google
        </button>

        {

          type == "sign-in" ?
            <p className="mt-6 text-dark-grey text-xl text-center">
              Dont have a account?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                join us today
              </Link>
            </p> : <p className="mt-6 text-dark-grey text-xl text-center">
              Already a member?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                sign in here .

              </Link>
            </p>



        }

      </form>
    </section>
  );
};

export default UserAuthForm;