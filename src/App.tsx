import SocialSidebar from "./components/SocialSidebar";
import Navbar from "./components/Navbar";
import ScrollAd from "./components/ScrollAd";
import SpecialButton from "./components/SpecialButton";


function App() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <header className="shadow-lg">
          <Navbar />
      </header>
      <SocialSidebar />
      <ScrollAd />
      <main className="max-w-3/4 min-h-screen mx-auto flex flex-row justify-center items-center">
        <div className="absolute -z-10 bg-zinc-900 circulo w-md rounded-full"></div>
        <section id="home" className="w-3/4 h-3/4 z-10 flex flex-row justify-center items-center">
          <div className="font-bold">
            <h1 className="text-5xl pb-12">creative designer <br/> & developer.</h1>
            <h3 className="pb-12">Hi i'm <span className="text-purple-400 text-xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Tomas Tornamira.</span> A passionate Front End <br/>Developer based in Argentina.</h3>
            <SpecialButton />
          </div>
          <img src="./public/Iso_Artwork_Full.png" className="h-2/5 w-2/5 z-10 pt-10 animacion" alt="avatar" />
        </section>
      </main>
    </div>
  );
}

export default App;