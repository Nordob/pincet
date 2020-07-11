import './index.sass'

import Parallax from 'parallax-js'

export default ()=> {
	
	var scene = document.getElementById('heart');
	var parallax = new Parallax(scene, {
		selector: [
					'.pincet__heart--bg1',
					'.pincet__heart--bg2'
				  ]
  	});
}