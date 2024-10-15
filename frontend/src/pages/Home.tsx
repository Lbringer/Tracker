import { Loader } from "../compnents/Loader";
import { Sidebar } from "../compnents/Sidebar";
import { useWhoami } from "../hooks";

const Home = () => {
  const { name } = useWhoami();

  if (name == "") {
    return <Loader />;
  }
  return (
    <div className="w-full h-full flex">
      <Sidebar name={name} />
      <div className="w-full py-20 px-40 lg:px-20 text-3xl">Today</div>
    </div>
  );
};

export default Home;
