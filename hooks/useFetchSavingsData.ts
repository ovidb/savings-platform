import { getSavingsData } from "@/services/getSavingsData";
import { useEffect } from "react";

export const useFetchSavingsData = (setItems: (data: any) => void) => {
  useEffect(() => {
    const interval = setInterval(() => {
      getSavingsData(process.env.SECURE_API_TOKEN).then((data) =>
        setItems(data)
      );
    }, 5_000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};
