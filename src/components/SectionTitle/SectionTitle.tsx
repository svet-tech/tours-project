import { useState, useEffect } from "react";
import { tours } from "../../../db/db.json";
import classes from "./SectionTitle.module.scss";
import type { Tours } from "../../slices/newSlice";

interface Props {
    onFilteredToursChange: (filtered: Tours[]) => void;
    onSearch?: () => void;
}

export const SectionTitle = ({ onFilteredToursChange, onSearch }: Props) => {
    const [searchLocation, setSearchLocation] = useState('');
    const [filtered, setFiltered] = useState<Tours[]>(tours);

    const [setLocalFilters] = useState({
        location: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilteredToursChange(filtered);
        if (onSearch) {
            onSearch();
        }
    };

    const handleReset = () => {
        setSearchLocation('');
        setFiltered(tours); 
        setLocalFilters({ location: '' });
        onFilteredToursChange(tours);
    };

    useEffect(() => {
        let result = tours;

        if (searchLocation.trim() !== '') {
            result = result.filter(t =>
                t.name.toLowerCase().includes(searchLocation.toLowerCase())
            );
        }

        setFiltered(result);
    }, [searchLocation]);

    useEffect(() => {
        onFilteredToursChange(filtered);
    }, [filtered]);

    return (
        <section className={classes.top}>
            <div className={classes.container}>
                <h1 className={classes.title} id="top">
                    Насладись прогулкой в горах <br /> с командой единомышленников
                </h1>
                <div className={classes.formWrap}>
                    <form onSubmit={handleSubmit} className={classes.formSearch}>
                        <div className={classes.listInput}>
                            <input
                                type="text"
                                list="places"
                                placeholder="Локация для тура"
                                className={classes.inputPoint}
                                value={searchLocation}
                                onChange={(e) => setSearchLocation(e.target.value)}
                            />
                            <datalist id="places">
                                {tours
                                    .map(t => t.name)
                                    .filter((name, index, arr) => arr.indexOf(name) === index)
                                    .map((name, index) => (
                                        <option key={index} value={name} />
                                    ))}
                            </datalist>
                            <p>выберите из списка</p>
                        </div>
                        <div className={classes.listInput}>
                            <input
                                type="date"
                                placeholder="Дата похода"
                                className={classes.inputPoint}
                            />
                            <p>укажите дату</p>
                        </div>
                       

                      
                            <button type="submit" className={classes.topButton}>
                                Найти программу
                            </button>
                        
                    </form>
                     <div style={{ marginTop: '10px' }}>
                            <button type="button" onClick={handleReset} className={classes.topButton}>
                                Показать все туры
                            </button>
                        </div>
                </div>
            </div>
        </section>
    );
};