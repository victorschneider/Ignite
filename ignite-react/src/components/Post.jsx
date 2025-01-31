import styles from './Post.module.css';
import { Comment } from './Comment.jsx'
import { Avatar } from './Avatar.jsx';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/victorschneider.png" />
                    <div className={styles.authorInfo}>
                        <strong>Victor Schneider</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title='29 de janeiro às 17:34' dateTime='2025-01-29 18:34:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Salve!</p>
                <p>Criando o meu primeiro projeto-portifólio em React JS!</p>
                <p><a href="">Link do Repositório</a></p>
                <p>
                    <a href="">#Portifólio</a>{" "}
                    <a href="">#JavaScript</a>{" "}
                    <a href="">#React</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}