import React from "react";
import { dragStart, dragDrop, dragEnd } from "../store";
import { useAppDispatch } from "../store/hooks";

function Tile({ fruit, fruitId }: { fruit: string; fruitId: number }) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none"
      style={{
        boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
      }}
    >
      {fruit && (
        <img
          src={fruit}
          alt="fruit"
          className="h-20 w-20"
          fruit-id={fruitId}
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={() => dispatch(dragEnd())}
        />
      )}
    </div>
  );
}

export default Tile;
