
import { useEffect, useRef } from "react";

const FocusScroll = ({focus }) => {
  const scrollRef = useRef(null);

  const scrollToElement = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToElement();
  }); 

  return <span ref={scrollRef}>
     {focus && scrollToElement()}
  </span>;
};

export default FocusScroll;

