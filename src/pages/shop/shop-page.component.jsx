import React from 'react';


import SHOP_DATA from './shop.data'
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';


class ShopPage extends React.Component {
	constructor() {
		super();

		this.state = {
			collections: SHOP_DATA,
		}
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'> 
				{
					collections.map(({id, ...previewProps}) => (
						<CollectionsPreview key={id} {...previewProps} />
					))
				}
				
			</div>
		)
	}


}

export default ShopPage;