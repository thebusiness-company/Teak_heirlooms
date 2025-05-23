import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASEURL } from "../api";


const fetchRTShip = async (page) => {
  const { data } = await axios.get(`${BASEURL}/api/RTShip/?page=${page}`);
  return data;
};

export const useRTShip = (page) => {
  return useQuery({
    queryKey: ["rtship", page],  // Store data per page
    queryFn: () => fetchRTShip(page),
    keepPreviousData: true,  // Keep previous data while loading new
  });
};
