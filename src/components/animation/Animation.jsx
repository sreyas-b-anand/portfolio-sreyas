import DotLoader from "react-spinners/DotLoader";

function Animation() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-bg dark:bg-bg_dark">
      <div className="sweet-loading ">
        <DotLoader
          color="blue"
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </main>
  );
}

export default Animation;
