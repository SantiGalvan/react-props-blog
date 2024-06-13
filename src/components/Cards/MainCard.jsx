import boat from '../../assets/img/boat.jpg';
import Button from '../Button/Button';

const MainCard = () => {
    return (
        <div className="card">
            <figure>
                <img src={boat} alt="boat" />
            </figure>
            <div className="card-body">
                <h2>Titolo del post</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus vitae hic accusantium non esse repellat blanditiis fuga suscipit autem illum, dolores labore cumque? Architecto delectus qui voluptatibus ullam corrupti!</p>
                <Button />
            </div>
        </div>
    );
}

export default MainCard;