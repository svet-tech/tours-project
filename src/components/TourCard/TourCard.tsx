import type { Tours } from "../../slices/newSlice";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/newSlice';
import classes from "./TourCard.module.scss"
import { useState } from 'react';

interface Props {
    tour: Tours;
}

export const TourCard = ({ tour }: Props) => {
    const dispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(tour));
    };

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (

        <>
            <div className={classes.cardWrap}>
                <div
                    className={classes.card}
                    style={{ backgroundImage: `url(${tour.image})` }}
                    aria-label={tour.name}
                    onClick={handleImageClick}
                >
                    <div className={classes.info}>
                        <div className={classes.name}
                            key={tour.id}>{tour.name}
                            <button onClick={handleAddToCart} className={classes.AddToCartBtn}>В корзину</button>

                        </div>
                        <div className={classes.infoPrice}>
                            <p className={classes.price}>Цена: {tour.price} ₽</p>
                            <p className={classes.days}>Поход длится: {tour.days} дней</p>
                        </div>
                    </div>

                </div>
            </div>
            {isModalOpen && (
                <div className={classes.modalOverlay} onClick={handleCloseModal}>
                    <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={classes.closeBtn} onClick={handleCloseModal}>Закрыть</button>
                        <h2>{tour.name}</h2>
                        <p>{tour.description}</p>
                    </div>
                </div>
            )}
        </>)
};