import React, { Suspense } from "react";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const Cart = React.lazy(() => import("./components/Cart"));



function App() {
  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>} />
       <Route path="/cart" element={ <Suspense fallback={<div>Loading...</div>}>
      <Cart />
       </Suspense>} />
      </Routes>
    </Fragment>
  );
}

export default App;
