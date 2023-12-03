import InputBox from "../components/input.component";

const UserAuthForm = ({ type }) => {
  return (
    <section className="h-cover flex items-center justify-center">
      <form action="" className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {type == "signin" ? "welcome back" : "Join up today"}
        </h1>

        {type != "signin" ? <InputBox/> : null}
      </form>
    </section>
  );
};

export default UserAuthForm;