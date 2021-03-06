import React, { PropTypes } from 'react';
import styles from './style';

class EditableHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.title
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
	}

	handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleTitleUpdate() {
		this.props.updateTitle(this.state.title);
	}

	render() {
		return (
			<div>
				<input
					style={styles.input}
					type="text"
					placeholder="List Title"
					onChange={this.handleTitleChange}
					value={this.state.title} />
				<button
					onClick={this.handleTitleUpdate}>
						Update
				</button>
			</div>
		);
	}
};

EditableHeader.propTypes = {
	title: PropTypes.string.isRequired,
	updateTitle: PropTypes.func.isRequired
};

export default EditableHeader;
