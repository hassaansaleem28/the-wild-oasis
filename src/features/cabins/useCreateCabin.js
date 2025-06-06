import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNeditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: mutateCreate, isLoading: isCreating } = useMutation({
    mutationFn: createNeditCabin,
    onSuccess: () => {
      toast.success("Cabin is successfully created!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: error => toast.error(error.message),
  });
  return { mutateCreate, isCreating };
}
