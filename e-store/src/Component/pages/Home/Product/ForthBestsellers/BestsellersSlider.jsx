import { Heading, Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderForAll from "../Page/SliderForall";
import { useState, useEffect } from "react";
import axios from "axios"
export default function BestsellersSlider() {
  

    let   [Listdata , setListData] = useState([])

  useEffect(() => {
    Getdata()
    .then(res => {
        console.log(res)
        setListData(res.data)
    })
    .catch(err => console.log(err))
  }, [])


  function Getdata(){
   return axios('https://26270dca-bc28-48eb-b02b-8cbeea43c41c.mock.pstmn.io/Get')
  }

  return (
    <>
    <SliderForAll sliderimg={Listdata} size={4}/>


    




</>












  );
}
