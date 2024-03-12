import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView({ items }) {
	return (
		<div className="shop-items">
			{items.map((item, idx) => <ShopItem item={item} key={idx} />)}
		</div>
	)
}

ListView.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			price: PropTypes.string,
			color: PropTypes.string,
			img: PropTypes.string
		})
	).isRequired
}

export default ListView;