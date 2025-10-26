import classes from "./SectionHike.module.scss";
import { Link } from "react-router-dom";

export const SectionHike = () => {
  return (
    <section className={classes['hike-about']}>
      <div className={classes['hike-images']}>
        <div className={classes['image-first']}></div>
        <div className={classes['image-second']}></div>
      </div>
      <div className={classes['hike-about-text']}>
        <p className={classes['pre-title']}>Наш ближайший поход</p>
        <h2 className={classes['title-about']}>
          Исследуйте все горные массивы <br />
          мира вместе с нами
        </h2>
        <p className={classes['text-about']}>
          Зашлакованное жизнью в городе тело и набитая до отказа суетными мыслями
          голова требуют перезагрузки. Кристальная вода горных рек, морозный воздух
          горного утра и яркое солнце заснеженных вершин как нельзя лучше помогают
          восстановить баланс жизненных сил. Кроме этого, на высоте в организме
          вырабатываются эндорфины, поэтому горы — это действительно наркотик.
          Удивительно, но даже в наш век горы остаются дикими и нетронутыми, стоит
          только надеть рюкзак и встать на тропу! Приглашаем вместе с нами в захватывающее путешествие 
          в горы Домбая уже в следующие выходные. 
        </p>
        {/* <a href="#programm" }>
          Программа тура
        </a> */}
      <Link to="/members" className={classes['black-button']}>Участники</Link>

      </div>
    </section>
  );
};