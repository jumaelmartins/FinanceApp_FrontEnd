import { Api } from "../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addPlanning = async (data) => {
  const session = JSON.parse(window.localStorage.getItem("session"));
  const { url, options } = await Api.CreateIncomePlanning(session, data);
  return await fetch(url, options);
};

const editPlanning = async (data, id) => {
  const session = JSON.parse(window.localStorage.getItem("session"));
  const { url, options } = Api.UpdateIncomePlanning(session, data, id);
  await fetch(url, options);
};

export const useIncomingPlanningMutate = () => {
  const queryClient = useQueryClient();
  const { addPlanning } = useMutation({
    mutationFn: addPlanning,
    onSuccess: (_, variables) => {
      queryClient.setQueriesData(["income-planning"], (data) => {
        return [...data, { ...variables }];
      })},
  });

  return addMutate;
};
