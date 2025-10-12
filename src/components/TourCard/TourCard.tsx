import type { Tours } from "../../slices/newSlice";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/newSlice';
import classes from "./TourCard.module.scss"


interface Props {
    tour: Tours;
}

export const TourCard = ({ tour }: Props) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(tour));
    }
    return (

        <>
            <div className={classes.cardWrap}>
                <div
                    className={classes.card}
                    style={{ backgroundImage: `url(${tour.image})` }}
                    aria-label={tour.name}
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

        </>)
};