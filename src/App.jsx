import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <header className=" w-full flex justify-center items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <h2 className=" bg-white">Post Address Info</h2>
      </header>
      <main className=" flex justify-center w-full items-center mt-[10px]">
        <Home />
      </main>
    </div>
  );
};

export default App;
