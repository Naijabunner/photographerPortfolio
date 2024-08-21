import { useState } from "react";
import { HomeGrid } from "../../components/home";
const Homepg = () => {
  const [loader, setLoader] = useState(false);
  if (loader) {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }

  return (
  <>
  <HomeGrid/>
  </>
  );
};

export default Homepg;
