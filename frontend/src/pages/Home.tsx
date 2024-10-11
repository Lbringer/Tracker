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
      <div className="w-full p-4 ml-20 lg:ml-0">Grow</div>
    </div>
  );
};

export default Home;
