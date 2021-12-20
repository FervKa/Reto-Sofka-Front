import "../src/css/index.css"
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio"
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaJugadores from "./components/ListaJugadores";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Pregunta1 from "./components/Pregunta1";
import Preguntas from "./components/Preguntas";
import Pregunta2 from "./components/Pregunta2";
import Pregunta3 from "./components/Pregunta3";
import Pregunta4 from "./components/Pregunta4";



const httpLink = createHttpLink({
  uri: "https://sofka.herokuapp.com/graphql",
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/ListaJugadores" element={<ListaJugadores />} />
            <Route path="/preguntas" element={<Preguntas />} />
            <Route path="/pregunta1" element={<Pregunta1 />} />
            <Route path="/pregunta2" element={<Pregunta2 />} />
            <Route path="/pregunta3" element={<Pregunta3 />} />
            <Route path="/pregunta4" element={<Pregunta4 />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
     </>
  );
}

export default App;
