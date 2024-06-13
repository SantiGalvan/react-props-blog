import MainCard from '../Cards/MainCard';
import mainStyle from './Main.module.scss';
import { posts } from '../../data/posts.js';
import Badge from '../Badge/Badge';

const tagColors = {
    "Version Control": "#FFC300",
    "Programmazione": "#33FF57",
    "Node.js": "#DAF7A6",
    "CSS": "#3357FF",
    "Web Design": "#FF33A1",
    "API": "#581845",
    "TypeScript": "#C70039",
    "JavaScript": "#FF5733",
    "React": "#900C3F",
    "React Native": "#4A235A",
    "SQL": "#1ABC9C",
    "Database": "#7D3C98",
    "Python": "#F39C12",
    "Docker": "#2E4053",
    "DevOps": "#16A085"
}

const Main = () => {
    return (
        <main className={mainStyle.background}>
            <section className={mainStyle.row}>
                {posts.map(post => <MainCard key={post.id}
                    title={post.title}
                    image={post.image}
                    tags={post.tags}
                    content={post.content}
                    published={post.published}
                    tagColors={tagColors}
                />)}
            </section>
            <section className={mainStyle.row}>
                {posts.map(post => post.tags.map((tag, i) => <Badge tagColors={tagColors} key={i} tag={tag} style={{ backgroundColor: tagColors[tag] }} >{tag}</Badge>))}
            </section>
        </main>
    );
}

export default Main;