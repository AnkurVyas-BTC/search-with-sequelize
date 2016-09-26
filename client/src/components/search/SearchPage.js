import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/searchActions';

class SearchPage extends React.Component {

	constructor(props, text){
		super(props, text);
		this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.createItemRow = this.createItemRow.bind(this);
	}

	handleChangeEvent() {
    this.props.actions.searchProducts(this.refs.search_textbox.value, this.refs.stocked_checkbox.checked);
	}

	createItemRow(item, index){
		let stockedItemText = item.stocked ? "true" : "false";
		let searchText = this.props.search_text;
		let showStocked = this.props.show_stocked;

		// Show only those products whose name are part of search text
		// Show stocked product if the show stocked checkbox is checked
		if(
			(searchText.length == 0 ||
			(searchText.length > 0 && item.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1)) &&
			(showStocked ? item.stocked : true)
			){
			return(
				<tr key={index} >
					<td>{item.name}</td>
					<td>{item.category}</td>
					<td>{item.price}</td>
					<td>{stockedItemText}</td>
				</tr>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Search Page</h2>
				<input
					type="text"
					placeholder="Type here to search !!!"
					ref="search_textbox"
					className="form-control"
					onChange={this.handleChangeEvent}/>
				<br/>
				<input
					type="checkbox"
					ref="stocked_checkbox"
					onChange={this.handleChangeEvent}/> <b>Show stocked only!</b>
				<br/>
				<h4>Product Listing</h4>
				<br/>
				<table className="table table-bordered table-striped">
					<tbody>
						<tr>
							<th>Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Stocked</th>
						</tr>
						{this.props.items.map(this.createItemRow)}
					</tbody>
				</table>
			</div>
		);
	}
}

SearchPage.propTypes = {
	items: PropTypes.array.isRequired,
	search_text: PropTypes.string.isRequired,
	show_stocked: PropTypes.bool.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
 return {
		items: state.search_hash.items,
		search_text: state.search_hash.search_text,
		show_stocked: state.search_hash.stocked
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(searchActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);