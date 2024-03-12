import { useState } from "react";
import PropTypes from 'prop-types';
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store({ products }) {
	const [layoutType, setLayoutType] = useState("view_module")

	const onSwitch = () => {
		let newLayoutType;
		layoutType === "view_module" ? newLayoutType = "view_list" : newLayoutType = "view_module"
		setLayoutType(newLayoutType);
	}

	return (
		<div className="store">
			<IconSwitch icon={layoutType} onSwitch={onSwitch} />
			{layoutType === "view_module" ?
				<CardsView cards={products} /> :
				<ListView items={products} />
			}
		</div>
	)
}

Store.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			price: PropTypes.string,
			color: PropTypes.string,
			img: PropTypes.string
		})
	).isRequired
}

export default Store;