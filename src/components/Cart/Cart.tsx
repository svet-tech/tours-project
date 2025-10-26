import { Link } from "react-router-dom";

import classes from "./Cart.module.scss";

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { removeFromCart } from '../../slices/newSlice';

export const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state: RootState) => state.tours.cart);

    const handleRemove = (tourId: string) => {
        dispatch(removeFromCart(tourId));
    };

    return (
        <>
            <div className={classes.wrapCartItem}>

                <h2 className={classes.titleCartItem}>Мои путешествия</h2>
                {cartItems.length === 0 ? (
                    <p className={classes.textEmpty}>В корзине пока пусто</p>
                ) : (
                    <ul >
                        {cartItems.map((tour) => (
                            <li key={tour.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}
                                className={classes.cartItem}>
                                <img src={tour.image} alt={tour.name} width={200} style={{ marginRight: '10px' }} />
                                <div className={classes.infoCartItem}>
                                    <h2>{tour.name}</h2>
                                    <p className={classes.price}>Цена: {tour.price} ₽</p>
                                    <button className={classes.payBtn}>Оплатить</button>
                                    <button onClick={() => handleRemove(tour.id)} className={classes.deleteBtn}>Удалить</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <Link to="/" className={classes.linkToMain}>На главную</Link>

            </div>
        </>
    );
};

export default Cart;