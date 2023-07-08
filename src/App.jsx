// import { useState } from 'react'

import {BrowserRouter,Route,Routes} from "react-router-dom";
import PageNotFound from "./pages/404/pageNotFound";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import './App.css'
import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import {useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch()
  const{url}= useSelector((state)=>state.home)
  useEffect(()=>{
    fetchApiConfig();
  },[]);
  
const fetchApiConfig =()=>{
  fetchDataFromApi('/configuration').then(res => {console.log(res);
    const url={
      backdrop:res.images.secure_base_url+"original",
      poster:res.images.secure_base_url+"original",
      profile:res.images.secure_base_url+"original",
    }
  dispatch(getApiConfiguration(url))})
}
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
