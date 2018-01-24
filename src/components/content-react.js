import React, { Component } from 'react';
import { render } from 'react-dom';


import ProductItem from './product-item';
import img1 from '../images/icon01.jpg';
import img2 from '../images/icon02.jpg';
import img3 from '../images/icon03.jpg';
import img4 from '../images/icon04.png';


import '../css/content.css'

export default class ContentReact extends Component {
	render() {
		const goodsData = [
			{ id: 1, imgUrl: img1, name: '紫晨大健康' },
			{ id: 2, imgUrl: img2, name: '地方名特优' },
			{ id: 3, imgUrl: img3, name: '中华大健康' },
			{ id: 4, imgUrl: img4, name: '全部' },
		];

		return (
			<div className=''>
				<div className='carousel slide'></div>
				<div className='goodsTag'>
					{goodsData.map(item =>
						<div className='goodsItem' key={item.id}  >
							<div className='icon' style={{ backgroundImage: 'url(' + item.imgUrl + ')' }}></div>
							<div>{item.name}
							</div>
						</div>)}
				</div>
				<div className='notice'></div>
				<div className='productsItem' >
					<ProductItem />
				</div>
				<span className="font">&#xe905;</span>
			</div >
		);
	}
}