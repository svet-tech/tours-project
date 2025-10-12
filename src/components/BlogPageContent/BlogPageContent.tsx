// import { Link } from "react-router-dom";
import classes from "./BlogPageContent.module.scss";
import { Link } from "react-router-dom";

export const BlogContent = () => {
  return (
    <section className={classes.wrapBlog}>
     
      <p className={classes.preTitle}>Делимся впечатлениями</p>
      <h2 className={classes.popularToursTitle}>Блог о путешествиях</h2>
      
      <div className={classes.blog} id="blog-link">
       
        <div className={classes.blogCard}>
          <div className={classes.blogCardImg}>
            <img src={"/Rectangle 19.jpg"} alt="Красивая Италия" />
          </div>
          <div className={classes.blogCardText}>
            <h3>Красивая Италия. Какая она в реальности?</h3>
            <p>
              Италия - южная, приветливая страна. Она славится своими чудесными пляжами с восхитительным белым песком и лазурной водой. Это
              просто рай для человека, который любит спокойный беззаботный отдых на морском побережье.
            </p>
            <div className={classes.blogCardInfo}>
              <p className={classes.date}>01/04/23</p>
              <p className={classes.read}>читать статью</p>
            </div>
          </div>
        </div>
       
        <div className={classes.blogCard}>
          <div className={classes.blogCardImg}>
            <img src={"/Rectangle 19 (1).jpg"} alt="Долой сомненья! Весь мир открыт для вас!" />
          </div>
          <div className={classes.blogCardText}>
            <h3>Долой сомненья! Весь мир открыт для вас!</h3>
            <p>
              Путешествуя, человек открывает свои возможности. Исследуя горы или равнины, наблюдая жизнь городов или наслаждаясь морем, мы осознаем, как велик наш мир. Смена обстановки стимулирует мозг, работу нервной системы.
            </p>
            <div className={classes.blogCardInfo}>
              <p className={classes.date}>01/05/23</p>
              <p className={classes.read}>читать статью</p>
            </div>
          </div>
        </div>
     
        <div className={classes.blogCard}>
          <div className={classes.blogCardImg}>
            <img src={"/Rectangle 19 (2).jpg"} alt="Как подготовиться к путешествию в одиночку?" />
          </div>
          <div className={classes.blogCardText}>
            <h3>Как подготовиться к путешествию в одиночку?</h3>
            <p>
              Путешествие в одиночку. Скажете, что это скучно? Давайте поговорим об этом. В этой статье мы рассмотрим самые распространенные вопросы, трудности и предубеждения одиночного путешествия.
            </p>
            <div className={classes.blogCardInfo}>
              <p className={classes.date}>05/05/23</p>
              <p className={classes.read}>читать статью</p>
            </div>
          </div>
        </div>
        
        <div className={classes.blogCard}>
          <div className={classes.blogCardImg}>
            <img src={"/Rectangle 19 (3).jpg"} alt="Индия...летим?" />
          </div>
          <div className={classes.blogCardText}>
            <h3>Индия...летим?</h3>
            <p>
              Первая поездка в Индию, скорее всего, станет шоком даже для опытного путешественника. Чтобы смягчить столкновение с экзотикой этой страны, можно обратиться к опыту ее бывалых исследователей.
            </p>
            <div className={classes.blogCardInfo}>
              <p className={classes.date}>09/06/23</p>
              <p className={classes.read}>читать статью</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Если это кнопка для перехода, лучше использовать Link вместо button
      <Link to="/other-materials" className={classes.blackButton}>
        Другие материалы
      </Link> */}

      <Link to="/" className={classes.linkToMain}>На главную</Link>

    </section>
  );
};