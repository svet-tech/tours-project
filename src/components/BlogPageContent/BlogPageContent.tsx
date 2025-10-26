import React, { useState, useEffect } from 'react';
import classes from "./BlogPageContent.module.scss";
import { Link } from "react-router-dom";

interface Article {
  id: number | string;
  title: string;
  excerpt: string;
  fullText: string;
  imgSrc: string;
  date: string;
}


export const BlogContent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Загрузка статей
  useEffect(() => {
    fetch('http://localhost:4200/articles')
      .then(res => res.json())
      .then((data: Article[]) => setArticles(data))
      .catch(err => console.error('Ошибка загрузки:', err));
  }, []);

 const openModal = (article: Article) => {
    setActiveArticle(article);
  };

  const closeModal = () => {
    setActiveArticle(null);
  };
  return (
    <section className={classes.wrapBlog}>
      <p className={classes.preTitle}>Делимся впечатлениями</p>
      <h2 className={classes.popularToursTitle}>Блог о путешествиях</h2>

      <div className={classes.blog} id="blog-link">
        {articles.map(article => (
          <div key={article.id} className={classes.blogCard}>
            <div className={classes.blogCardImg}>
              <img src={article.imgSrc} alt={article.title} />
            </div>
            <div className={classes.blogCardText}>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className={classes.blogCardInfo}>
                <p className={classes.date}>{article.date}</p>
                {/* Заменили <p> на <button> для более семантичной разметки */}
                <button
                  className={classes.read}
                  onClick={() => openModal(article)}
                >
                  читать статью
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

     {/* Модальное окно */}
      {activeArticle && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            padding: '20px',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '8px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '80%',
              overflowY: 'auto',
              padding: '20px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Закрыть
            </button>
            <h2>{activeArticle.title}</h2>
            <div style={{display: 'flex', gap: '18px'}}>
            <img
              src={activeArticle.imgSrc}
              alt={activeArticle.title}
              style={{ width: '25%', height: '15%', marginBottom: '15px' }}
            />
            <p>{activeArticle.fullText}</p>
            </div>
          </div>
        </div>
      )}
    
      
      <Link to="/" className={classes.linkToMain}>На главную</Link>
    </section>
  );
};




// // import { Link } from "react-router-dom";
// import classes from "./BlogPageContent.module.scss";
// import { Link } from "react-router-dom";

// export const BlogContent = () => {
//   return (
//     <section className={classes.wrapBlog}>
     
//       <p className={classes.preTitle}>Делимся впечатлениями</p>
//       <h2 className={classes.popularToursTitle}>Блог о путешествиях</h2>
      
//       <div className={classes.blog} id="blog-link">
       
//         <div className={classes.blogCard}>
//           <div className={classes.blogCardImg}>
//             <img src={"/Rectangle 19.jpg"} alt="Красивая Италия" />
//           </div>
//           <div className={classes.blogCardText}>
//             <h3>Красивая Италия. Какая она в реальности?</h3>
//             <p>
//               Италия - южная, приветливая страна. Она славится своими чудесными пляжами с восхитительным белым песком и лазурной водой. Это
//               просто рай для человека, который любит спокойный беззаботный отдых на морском побережье.
//             </p>
//             <div className={classes.blogCardInfo}>
//               <p className={classes.date}>01/04/23</p>
//               <p className={classes.read}>читать статью</p>
//             </div>
//           </div>
//         </div>
       
//         <div className={classes.blogCard}>
//           <div className={classes.blogCardImg}>
//             <img src={"/Rectangle 19 (1).jpg"} alt="Долой сомненья! Весь мир открыт для вас!" />
//           </div>
//           <div className={classes.blogCardText}>
//             <h3>Долой сомненья! Весь мир открыт для вас!</h3>
//             <p>
//               Путешествуя, человек открывает свои возможности. Исследуя горы или равнины, наблюдая жизнь городов или наслаждаясь морем, мы осознаем, как велик наш мир. Смена обстановки стимулирует мозг, работу нервной системы.
//             </p>
//             <div className={classes.blogCardInfo}>
//               <p className={classes.date}>01/05/23</p>
//               <p className={classes.read}>читать статью</p>
//             </div>
//           </div>
//         </div>
     
//         <div className={classes.blogCard}>
//           <div className={classes.blogCardImg}>
//             <img src={"/Rectangle 19 (2).jpg"} alt="Как подготовиться к путешествию в одиночку?" />
//           </div>
//           <div className={classes.blogCardText}>
//             <h3>Как подготовиться к путешествию в одиночку?</h3>
//             <p>
//               Путешествие в одиночку. Скажете, что это скучно? Давайте поговорим об этом. В этой статье мы рассмотрим самые распространенные вопросы, трудности и предубеждения одиночного путешествия.
//             </p>
//             <div className={classes.blogCardInfo}>
//               <p className={classes.date}>05/05/23</p>
//               <p className={classes.read}>читать статью</p>
//             </div>
//           </div>
//         </div>
        
//         <div className={classes.blogCard}>
//           <div className={classes.blogCardImg}>
//             <img src={"/Rectangle 19 (3).jpg"} alt="Индия...летим?" />
//           </div>
//           <div className={classes.blogCardText}>
//             <h3>Индия...летим?</h3>
//             <p>
//               Первая поездка в Индию, скорее всего, станет шоком даже для опытного путешественника. Чтобы смягчить столкновение с экзотикой этой страны, можно обратиться к опыту ее бывалых исследователей.
//             </p>
//             <div className={classes.blogCardInfo}>
//               <p className={classes.date}>09/06/23</p>
//               <p className={classes.read}>читать статью</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
   
//       <Link to="/" className={classes.linkToMain}>На главную</Link>

//     </section>
//   );
// };