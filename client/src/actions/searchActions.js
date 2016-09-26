import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import SearchApi from '../api/SearchApi';

export function searchProductSuccess(items, search_text, stocked) {
  return { type: types.SEARCH_PRODUCT_SUCCESS, items: items, search_text: search_text , stocked:  stocked};
}

export function loadItemsSuccess(items){
  return { type: types.LOAD_ITEMS_SUCCESS, items: items};
}

export function loadItems(){
	return function(dispatch){
		dispatch(beginAjaxCall());
		return SearchApi.getAllItems().then(items => {
			dispatch(loadItemsSuccess(items));
		}).catch(error => {
			throw(error);
		});
	};
}

export function searchProducts(search_text, stocked){
	return function(dispatch){
		dispatch(beginAjaxCall());
		return SearchApi.searchItems(search_text, stocked).then(items => {
			dispatch(searchProductSuccess(items, search_text, stocked));
		}).catch(error => {
			throw(error);
		});
	};
}