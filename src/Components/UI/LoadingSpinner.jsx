import { useStateContext } from "../../Context/ContextProvider";

const LoadingSpinner = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="flex justify-center mx-auto  my-12 ">
      <div
        style={{ backgroundColor: currentColor }}
        className="animate-pulse  w-fit h-fit px-4 py-2 rounded-2xl"
      >
        <span className="text-sm text-white">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
