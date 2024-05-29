import { Container } from "react-bulma-components";
import Weather from "../Components/Weather/Weather.jsx";
import Footer from "../Components/Footer/Footer.jsx";

function Home() {
  return (
    <Container>
      <div className="intro mt-6 mb-6">
        <h3 className="subtitle is-5 has-text-centered">Minimal Weather</h3>
      </div>

      <Weather />

      <div className="signature">
        <p>
          {" "}
          <i>
            Designed and Coded by <b>Santiago VB</b>
          </i>
        </p>
      </div>

      <Footer/>

      <div className="over"></div>
    </Container>
  );
}

export default Home;
