import React from "react";
import { IoIosUndo, IoIosRedo } from "react-icons/io";

import "./ActionPanel.scss";
import ShareComponent from "../ShareComponent/index";
const nop = () => {};

export default function ActionPanel({
  onClickUndo,
  disableUndo,

  onClickRedo,
  disableRedo,
  maxScore,
}) {
  return (
    <div className="action-panel">
      <div
        className="action-panel__group"
        style={{ opacity: disableUndo ? 0.3 : 1 }}
      >
        <IoIosUndo
          className={
            !disableUndo
              ? "action-panel__button"
              : "action-panel__button--disabled"
          }
          color="white"
          fontSize="50px"
          onClick={!disableUndo ? onClickUndo : nop}
        />
        Undo
      </div>

      <div
        className="action-panel__group"
        style={{ opacity: disableRedo ? 0.3 : 1 }}
      >
        <IoIosRedo
          className={
            !disableRedo
              ? "action-panel__button"
              : "action-panel__button--disabled"
          }
          color="white"
          fontSize="50px"
          onClick={!disableRedo ? onClickRedo : nop}
        />
        Redo
      </div>
      <div>
        <ShareComponent maxscore={maxScore} />
      </div>
    </div>
  );
}
