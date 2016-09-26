import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = { items: initialState.items, search_text: '', stocked: false }, action){
	switch (action.type) {
		case types.LOAD_ITEMS_SUCCESS:
			return Object.assign({}, state, { items: action.items} );
		case types.SEARCH_PRODUCT_SUCCESS:
			return Object.assign({}, state, { items: action.items, search_text: action.search_text, stocked: action.stocked } );
		default:
			return state;
	}
}