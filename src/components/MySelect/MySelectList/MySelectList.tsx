import s from "./MySelectList.module.scss";
import { ReactComponent as CheckMarkIcon } from "../assets/check-mark.svg";

type props = {
  groups: string[];
  currentGroup: string;
  setCurrentGroup: (arg: string) => void;
};

export default function MySelectList({
  groups,
  currentGroup,
  setCurrentGroup,
}: props) {
  const handleItem = (e: string) => {
    setCurrentGroup(e);
  };

  return (
    <div className={s.wrap}>
      {groups.map((item, i) => {
        const isActive = item === currentGroup;

        return (
          <div
            onClick={() => handleItem(item)}
            className={`${s.itemWrap} ${isActive ? s.active : ""}`}
            key={item + i}
          >
            {isActive && <CheckMarkIcon className={s.checkIcon} />}
            <p className={s.item}>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
