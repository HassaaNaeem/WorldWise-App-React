import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:8000";
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("Error loading cities data");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="form" element={<p>Form</p>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
