import { useState, useEffect, useRef } from 'react'
import classes from './App.module.scss'
import { getTours } from './slices/newSlice'
import { useAppDispatch, useAppSelector } from './hooks'
import { Header } from "./components/Header/Header";
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import { SectionHike } from './components/Hike/SectionHike';
import { TourCard } from './components/TourCard/TourCard';
import { Footer } from './components/Footer/Footer';

function App() {
  const dispatch = useAppDispatch();
  const tours = useAppSelector((state) => state.tours.tours);
  const [filteredTours, setFilteredTours] = useState<Tours[]>(tours);

  const toursRef = useRef<HTMLDivElement | null>(null);

  const scrollToTours = () => {
    if (toursRef.current) {
      toursRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);

  return (
    <div className={classes.wrapper}>
      <Header />

      <SectionTitle 
        onFilteredToursChange={setFilteredTours} 
        onSearch={scrollToTours} 
      />


      <div className={classes.cardlist} ref={toursRef} id="programm">
        <h2 className={classes.titleToursCards}>Популярные направления</h2>
        {filteredTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      <SectionHike />

      <Footer />
    </div>
  );
}

export default App;