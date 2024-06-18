import { Api } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  const session = JSON.parse(window.localStorage.getItem("session"));
  const { url, options } = Api.GetIncomePlanning(session);
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

export const useIncomingPlanning = () => {
  const query = useQuery({
    queryFn: getData,
    queryKey: ["income-planning"],
  });

  return { ...query };
};
