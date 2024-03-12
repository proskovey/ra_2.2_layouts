import PropTypes from 'prop-types';

function IconSwitch({ icon, onSwitch }) {
	return (
		<div className="switch-icon-container">
			{icon === "view_module" ?
				<button className="btn" onClick={onSwitch}><span className="material-icon list-icon">&#xe8ef;</span></button> :
				<button className="btn" onClick={onSwitch}><span className="material-icon list-icon">&#xe8f0;</span></button>
			}
		</div>
	)
}

IconSwitch.propTypes = {
	icon: PropTypes.string.isRequired,
	onSwitch: PropTypes.func.isRequired
}

export default IconSwitch;