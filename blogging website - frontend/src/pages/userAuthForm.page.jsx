import InputBox from "../components/input.component";

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

      </form>
    </section>
  );
};

export default UserAuthForm;