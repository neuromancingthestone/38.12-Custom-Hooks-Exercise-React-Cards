import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

// Custom hook added
// Get the data for populating the Pokemon cards and return
// Use the passed url

const useAxios = (url) => {

  const [data, setData] = useState([]);
  const addCard = async () => {
    const response = await axios.get(
      url
    );
    setData(cards => [...cards, { ...response.data, id: uuid() }]);
  };  

  return [data, addCard];
};

export default useAxios;