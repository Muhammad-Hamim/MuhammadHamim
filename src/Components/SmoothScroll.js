import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

var options = {
  damping: 0.5,
  thumbMinSize: 50,
  continuousScrolling: true,
  renderByPixels: true,
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector(".allContent"), options);
  }, []);

  return null;
};

export default Scroll;
