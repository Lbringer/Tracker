import { Hero } from "../compnents/Hero";

export const Signup = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <div className="font-serif text-3xl font-medium">Create Account</div>
        <div className="text-sm mb-4 mt-2">
          Already have an account?{" "}
          <span className="underline font-medium">Login</span>
        </div>
        <div className="flex flex-col w-1/2 text-sm">
          <label className="mb-2 font-medium">Username</label>
          <input
            className="border border-grey rounded bg-light focus:outline-none px-5 py-3 mb-4 placeholder:text-sm"
            type="text"
            placeholder="John@123"
          />
        </div>
        <button className="bg-dark w-1/2 rounded text-light text-sm px-5 py-3">
          SignUp
        </button>
      </div>
      <Hero />
    </div>
  );
};
