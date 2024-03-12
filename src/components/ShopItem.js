import PropTypes from 'prop-types';

function ShopItem({ item }) {
	const { name, price, color, img } = item;

	return (
		<div className="shop-item">
			<img className="item-product-img" src={img} alt={name}/>
			<h3 className="product-name">{name}</h3>
			<p className="product-color">{color}</p>
			<p className="product-price">${price}</p>
			<button className="add-btn">add to cart</button>
		</div>
	)
}

ShopItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		price: PropTypes.string,
		color: PropTypes.string,
		img: PropTypes.string
	}).isRequired
}

export default ShopItem;