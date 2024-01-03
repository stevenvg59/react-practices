import React from 'react';
import '../stylesheets/Testimony.css';

function Testimony(props){
return(
	<div className='container-testimony'>
		<img 
			className='image-testimony'
			src={require(`../images/${props.image}.png`)}
			alt='Emma photography' />
		<div className='container-text-testimony'>
			<p className='name-testimony'>
				<strong>{props.name}</strong> in {props.country}
			</p>
			<p className='job-title-testimony'>
				{props.job} at <strong>{props.company}</strong>
			</p>
			<p className='text-testimony'>"{props.testimony}"</p>
		</div>
	</div>
	);
}

export default Testimony;