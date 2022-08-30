// Components
import BgTop from "./components/BgTop";
import BgBottom from "./components/BgBottom";
import Attribution from "./components/Attribution";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Img top */}
      <BgTop />

      <section>
        {/* Header and card container */}
        <Header />

        <br />
        {/* Attribution */}
        <Attribution />
      </section>

      {/* Img bottom */}
      <BgBottom />
    </>
  );
}

export default App;
