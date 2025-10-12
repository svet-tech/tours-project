import { useState } from 'react'
import classes from './AddPeople.module.scss'

export interface Person {
  id: number;
  name: string;
  age: number;
}
interface AddPeopleProps {
  addPeople: React.Dispatch<React.SetStateAction<Person[]>>;
}

export const AddPeople = ({addPeople}: AddPeopleProps) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleAddNewPeople = () => {
        addPeople((prev) => [...prev,  {
            id: Math.random(),
            name: name,
            age: +age
        }])
    }

    return (
        <div className={classes.container}>
            <input placeholder='Имя' className={classes['form-input']} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder='Возраст' className={classes['form-input']}  type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <button className={classes['add-btn']} onClick={handleAddNewPeople}>Добавить участника</button>
        </div>
    )
}