import { useState, useEffect, useRef } from "react";
import s from "./MySelect.module.scss";
import MySelectInput from "./MySelectInput/MySelectInput";
import MySelectList from "./MySelectList/MySelectList";

type props = {
  groups: string[];
  setGroups: (arg: string[]) => void;
};

export default function MySelect({ groups, setGroups }: props) {
  const [isListActive, setIsListActive] = useState(false);
  const [currentGroup, setCurrentGroup] = useState("");
  const wraperRef = useRef(null);

  useEffect(() => {
    function handleClose(e: MouseEvent) {
      e.stopPropagation();
      if (wraperRef.current.contains(e.target)) return;
      setIsListActive(false);
    }

    document.addEventListener("click", handleClose);

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div ref={wraperRef} className={s.wrap}>
      <MySelectInput
        {...{
          groups,
          setGroups,
          setIsListActive,
          currentGroup,
          setCurrentGroup,
        }}
      />
      {isListActive && (
        <MySelectList {...{ groups, currentGroup, setCurrentGroup }} />
      )}
    </div>
  );
}
