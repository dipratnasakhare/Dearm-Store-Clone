import "react-multi-carousel/lib/styles.css";
import SliderForAll from "../Page/SliderForall";
import { useState, useEffect } from "react";
import axios from "axios";
export default function SliderForth() {
  let [Listdata, setListData] = useState([]);

  useEffect(() => {
    Getdata()
      .then((res) => {
        console.log(res);
        setListData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function Getdata() {
    return axios(
      "https://5b595b03-6d8c-44ad-8412-aea60e856d42.mock.pstmn.io/Get"
    );
  }

  return (
    <>
      <SliderForAll sliderimg={Listdata} size={4} />
    </>
  );
}
