import React, { PropTypes } from 'react';
import styles from './style';

class EditBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.name,
			sku: props.sku,
			price: props.price
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSkuChange = this.handleSkuChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	handleSkuChange(e) {
		this.setState({ sku: e.target.value });
	}

	handlePriceChange(e) {
		this.setState({ price: e.target.value });
	}

	handleAddClick() {
		const newItem = {
			name: this.state.name,
			sku: this.state.sku,
			price: Number(this.state.price)
		};

		this.props.addItem(newItem);
	}

	render() {
		return (
			<div style={styles.container}>
				<h1>{this.props.title}</h1>
				<input
					style={styles.input}
					type="text"
					placeholder="Name"
					onChange={this.handleNameChange}
					value={this.state.name} />
				<input
					style={styles.input}
					type="text"
					placeholder="SKU"
					onChange={this.handleSkuChange}
					value={this.state.sku} />
				<input
					style={styles.input}
					type="number"
					placeholder="Price"
					onChange={this.handlePriceChange}
					value={this.state.price} />
				<button
					style={styles.button}
					onClick={this.handleAddClick}>
						Add Item
				</button>
			</div>
		);
	}
};

EditBox.propTypes = {
	title: PropTypes.string.isRequired,
	addItem: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	sku: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
};

EditBox.defaultProps = {
	name: '',
	sku: '',
	price: 0
};

export default EditBox;
