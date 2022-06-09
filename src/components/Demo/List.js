import React,{useMemo} from "react";
import classes from "./List.module.css";

const List = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("itemlar sıralandı");
    return items.sort((a, b) => a-b);
  }, [items]);
console.log("demo da çalıştı");
  return (
    <div className={classes.list}>
      <h2>MY LİST</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(List);
