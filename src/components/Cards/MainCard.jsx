import boat from '../../assets/img/boat.jpg';
import Button from '../Button/Button';

const MainCard = ({ post }) => {
    return (
        post.published &&
        <div className="card">
            <figure>
                <img src={post.image} alt={post.title} />
            </figure>
            <div className="card-body">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Button />
            </div>
        </div>
    );
}

export default MainCard;