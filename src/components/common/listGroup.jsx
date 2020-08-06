import React from "react";

const listGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem,
  } = props;

  return (
    <ul className="list-group">
      {items.map((m) => (
        <li
          onClick={() => onItemSelect(m)}
          key={m[valueProperty]}
          className={
            m === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {m[textProperty]}
        </li>
      ))}
    </ul>
  );
};

listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default listGroup;
