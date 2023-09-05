import React, { useState, useEffect } from "react";
import Category from "./category";

function Box(props) {
  const [Alpha, setAlpha] = useState([]);
  const [Selected, setSelected] = useState([]);

  useEffect(() => {
    var arr = [];
    for (let i = 0; i < props.data.length; i++) {
      if (arr.includes(props.data[i].id)) {
        continue;
      } else {
        arr.push(props.data[i].id);
      }
    }
    setAlpha(arr);
  }, [props]);

  const selectedItem = (item) => {
    let arr = [...Selected];
    arr.push(item);
    setSelected(arr);
  };

  return (
    <div className="p-4 h-full w-full bg-blue-300 rounded-lg mx-3">
      <h2 className="text-3xl font-bold text-center">{props.title}</h2>
      <div className="grid justify-items-end">
        <button className="mx-3 bg-red-200 rounded w-20 h-9">
          {props.btn}
        </button>
      </div>
      <div>
        {[...Alpha].map((item, i) => {
          return (
            <Category
              selectedItem={selectedItem}
              id={i}
              alpha={item}
              data={props.data}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Box;
