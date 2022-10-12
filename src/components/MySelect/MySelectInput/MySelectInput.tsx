import React, { useMemo } from "react";
import { ReactComponent as DeleteIcon } from "../assets/delete-Basket.svg";
import { ReactComponent as CheckIcon } from "../assets/check-mark.svg";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import s from "./MySelectInput.module.scss";

type props = {
  groups: string[];
  setGroups: (arg: string[]) => void;
  currentGroup: string;
  setCurrentGroup: (args: string) => void;
  setIsListActive: (arg: boolean) => void;
};

export default function MySelectInput({
  groups,
  setGroups,
  currentGroup,
  setCurrentGroup,
  setIsListActive,
}: props) {
  const { isCanAdded, isCanDeleted } = useMemo(
    (isCanDeleted = false, isCanAdded = false) => {
      isCanAdded =
        !!currentGroup.trim().length && !groups.includes(currentGroup);
      isCanDeleted = !isCanAdded && groups.length > 1;
      return { isCanAdded, isCanDeleted };
    },
    [currentGroup, groups]
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentGroup(e.target.value);
  };

  const handleFocus = () => {
    setIsListActive(true);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        addItem();
        break;
      case "Delete":
        deleteItem();
        break;
      default:
        break;
    }
  };

  const addItem = () => {
    if (!isCanAdded) return;
    setGroups([...groups, currentGroup.trim()]);
  };

  const deleteItem = () => {
    if (!isCanDeleted) return;
    const newGroups = groups.filter((item) => item !== currentGroup);
    setGroups(newGroups);
  };

  return (
    <label className={s.wrap}>
      <h4 className={s.title}>Группа обработки:</h4>
      <div className={s.inputWrap}>
        <input
          onKeyDown={handleKeyUp}
          onFocus={handleFocus}
          value={currentGroup}
          onChange={handleInput}
          className={s.input}
          type="text"
          placeholder="Укажите название"
        />
        <div className={s.optionsWrap}>
          {isCanDeleted && (
            <DeleteIcon onClick={deleteItem} className={s.deleteIcon} />
          )}
          {isCanAdded && (
            <CheckIcon onClick={addItem} className={s.checkIcon} />
          )}
          {!!groups.length && (
            <div className={s.arrowWrap}>
              <ArrowIcon className={s.arrow1} />
              <ArrowIcon className={s.arrow2} />
            </div>
          )}
        </div>
      </div>
    </label>
  );
}
