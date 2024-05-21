import { Container } from "react-bulma-components"
import Weather from "../Components/Weather/Weather.jsx"


function Home() {
  return (
    <Container>
      <div className="intro mt-6 mb-6">
        <h1 className="title is-3 has-text-centered">Weather App</h1>
        <h2 className="subtitle is-6 has-text-centered">By BlockchainAddict</h2>
      </div>

      <Weather/>

      {/* <CardContainer></CardContainer> */}
    </Container>
  )
}

export default Home
