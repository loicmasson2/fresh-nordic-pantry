import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
  useEffect(() => {
    navigate("/blog/", { replace: true });
  }, []);
  return null;
};
