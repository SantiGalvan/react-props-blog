import MainCard from '../Cards/MainCard';
import mainStyle from './Main.module.scss';

const Main = () => {
    return (
        <main className={mainStyle.background}>
            <section>
                <MainCard />
            </section>
        </main>
    );
}

export default Main;