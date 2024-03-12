import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView({ cards }) {
	return (
		<div className="shop-cards">
			{cards.map((card, idx) => <ShopCard card={card} key={idx} />)}
		</div>
	)
}

CardsView.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			price: PropTypes.string,
			color: PropTypes.string,
			img: PropTypes.string
		})
	).isRequired
}

export default CardsView;