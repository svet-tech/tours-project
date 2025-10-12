import { useState } from "react";
import classes from './PeopleCard.module.scss'


export const PeopleCard = ({ people, handleRemove, setPeoples, peoples }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(people.name);
  const [newAge, setNewAge] = useState(String(people.age));

  const handleChangePeople = () => {
    const editedPeoples = peoples.map((item) => {
      if (item.id === people.id) {
        return {
          ...item,
          name: newName,
          age: +newAge,
        };
      } else {
        return item;
      }
    });

    setPeoples(editedPeoples);
    setIsEditing(false);
  };
  return (
    <div
      onDoubleClick={() => setIsEditing(!isEditing)}
      key={people.id}
      className={classes.people}
    >
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <span className={classes.itemText}>{people.name} </span>
      )}
      {isEditing ? (
        <input
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
      ) : (
        <span className={classes.itemText}>Возраст: {people.age}</span>
      )}
      <button className={["edit-btn"]}
        onClick={() =>
          isEditing ? handleChangePeople() : handleRemove(people.id)
        }
      >
        {isEditing ? "Редактировать" : "Удалить"}
      </button>
    </div>
  );
};
