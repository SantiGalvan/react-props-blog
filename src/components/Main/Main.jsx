import MainCard from '../Cards/MainCard';
import mainStyle from './Main.module.scss';
import { posts } from '../../data/posts.js';

const Main = () => {
    return (
        <main className={mainStyle.background}>
            <section className={mainStyle.row}>
                {posts.map(post => <MainCard key={post.id} post={post} />)}
            </section>
        </main>
    );
}

export default Main;