import { useMutation,useQuery } from "@tanstack/react-query";
import { submitContactForm,fetchContacts } from "../services/contactService";



export const useContacts = () => {
  return useQuery({
      queryKey: ["contacts"],
      queryFn: fetchContacts,
  });
};

export const useContact = () => {
    return useMutation({
        mutationFn: submitContactForm,
    });
};
