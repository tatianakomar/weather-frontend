import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import weatherApi from "../../utils/WeatherApi";

function App() {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    weatherApi
      .getData()
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      {isLoading ? <Preloader /> :
      <Main data={data}/>}
      <Footer />
    </>
  );
}

export default App;
