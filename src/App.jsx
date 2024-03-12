import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout";
import { main_pages } from "./router/main-router";
import { nanoid } from "@reduxjs/toolkit";
import { UserLayout } from "./layout/user-layout";
import { Profile } from "./pages/users/profile";
import { Address } from "./pages/users/address";
import { SingeData } from "./pages/single-data/singe-data";
import { SingeCards } from "./pages/single-data/singe-cards";
import { Karzinka } from "./pages/karzinka";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="user" element={<UserLayout/>}>
            {/* <Route index element={<Profile/>}/>
            <Route path="address" element={<Address/>}/> */}
           

          </Route>
        {main_pages.map((route)=>(
          <Route index={route.path ? false : true} key={nanoid()} element={route.component}/>
        ))}
        <Route path="/product/:datakey/:id" element={<SingeData/>}/>
        <Route path="/categories/:datakey" element={<SingeCards  />}/>
        <Route path="karzinka" element={<Karzinka/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
