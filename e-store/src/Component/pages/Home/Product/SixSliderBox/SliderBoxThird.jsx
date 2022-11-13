import "react-multi-carousel/lib/styles.css";
import SliderForAll from "../Page/SliderForall";
import axios from "axios"
import { useState, useEffect } from "react";
export default function SliderBoxThird(){

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
   return axios('https://5b595b03-6d8c-44ad-8412-aea60e856d42.mock.pstmn.io/Get')
  }

  return (
    <>
    <SliderForAll sliderimg={Listdata} size={4}/>
    </>
  )

}
    