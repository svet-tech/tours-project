import { Link } from "react-router-dom";
import { useState } from "react";
import { AddPeople } from "../AddPeople/AddPeople";
import { PeopleCard } from "../PeopleCard/PeopleCard";
import type { Person } from "../AddPeople/AddPeople"

import classes from "./MembersList.module.scss"

const mockPeoples: Person[] = [
  {
    id: 0,
    name: "Иван",
    age: 32,
  },
  {
    id: 1,
    name: "Петр",
    age: 27,
  },
  {
    id: 2,
    name: "Михаил",
    age: 34,
  },
    {
    id: 3,
    name: "Ирина",
    age: 30,
  },
    {
    id: 4,
    name: "Елена",
    age: 24,
  },
    {
    id: 5,
    name: "Николай",
    age: 38,
  },
];

export const MembersList = () => {
  const [peoples, setPeoples] = useState(mockPeoples);

  const handleRemovePeople = (id) => {
    const filteredPeoples = peoples.filter((people) => people.id !== id);
    setPeoples(filteredPeoples);
  };

  return (<>
    <div className={classes.members}>
        <div className={classes.membersListText}>Исследуйте все горные массивы вместе с нами</div>
      <h2 className={classes.title}>Список участников</h2>
      {peoples.map((people) => (
        <PeopleCard
          people={people}
          setPeoples={setPeoples}
          peoples={peoples}
          handleRemove={handleRemovePeople}
        />
      ))}
      <AddPeople addPeople={setPeoples} />

    </div>
      <Link to="/" className={classes.linkToMain}>На главную</Link>

    </>
  );
};
