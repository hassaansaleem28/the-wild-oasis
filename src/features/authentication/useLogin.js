import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogIn as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: error => {
      console.log("ERROR", error);
      toast.error("Provided credentials are incorrect.");
    },
  });
  return { login, isLoading };
}
