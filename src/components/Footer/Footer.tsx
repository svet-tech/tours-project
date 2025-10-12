import classes from "./Footer.module.scss"; // Предполагая, что используете CSS Modules

export const Footer = () => {
  return (
    <>
    <div className={classes.footer}>
      <section className={classes['top-block']}>
        <div className={classes['top-block-left-part']}>
          <div className={classes['pre-title']}>актуально</div>
          <h3 className={classes['top-block-black-title']}>
            Получайте полезные рассылки о путешествиях
          </h3>
        </div>
        <div className={classes['top-block-right-part']}>
          <p className={classes['top-block-text']}>Введите e-mail адрес</p>
          <div className={classes['input-box']}>
            <input
              type="email"
              className={classes['input-email']}
              placeholder="name@domain.com"
              required
            />
            <button className={classes['button-news']}>Подписаться на новости</button>
          </div>
          <p className={classes['top-block-text-info']}>
            подписываясь на новости, вы автоматически соглашаетесь с условиями обработки
            <br /> персональных данных и правилами рекламных рассылок
          </p>
        </div>
      </section>
      
      <div className={classes['footer-list-info']}>
        <div className={classes['footer-column']} >
          <div className={classes['footer-company-info-text']}>
            <h3>Компания "РумТибет"</h3>
            <p>
              Крупнейший российский сайт о путешествиях. Всевозможные обзоры, статьи, обсуждения,
              бронирование отелей и самолётов — всё это собрано в одном месте с удобным интерфейсом.
            </p>
          </div>
          <div className={classes['footer-company-info-emale']} id="contacts">
            <p>info@domain.com</p>
            <p>+7 (123) 456-78-90</p>
          </div>
          <div className={classes['footer-company-info-links']}>
            <img src="/Vector.png" alt="" />
            <img src="/Vector (1).png" alt="" />
            <img src="/Vector (2).png" alt="" />
            <img src="/Vector (3).png" alt="" />
          </div>
        </div>
        <div className={classes['footer-column']} >
          <h3>Наши услуги</h3>
          <ul className={classes['services']}>
            <li>Прогулки в горы летом</li>
            <li>Зимние походы в горы</li>
            <li>Посещение храмов в горах</li>
            <li>Экстремальные виды туризма</li>
            <li>Походы в джунглях Амазонии</li>
            <li>Поездка в Африку</li>
          </ul>
        </div>
        <div className={classes['footer-column']} >
          <h3>Важно для путешествий</h3>
          <ul className={classes['services']}>
            <li>Как собраться в долгий поход?</li>
            <li>Жизненно важные предметы для похода</li>
            <li>Медицинская страховка, гарантии безопасности</li>
            <li>Если вы врач - загляните сюда</li>
          </ul>
        </div>
      </div>
      
      <div className={classes['footer-bottom']}>
        <p>ИП Константиновский К.К. 2023</p>
        <p className={classes['personal-info']}>Политика безопасности персональных данных</p>
      </div>
      </div>
    </>
  );
};