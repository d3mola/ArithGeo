'use strict';

module.exports = {

	// function to check whether sequence is arithmetic or geometric goes here

	arithGeo: (arr) => {

		// check if argument is an array
		if (Array.isArray(arr) !== true) {
			return undefined;

		} else if (arr.length < 1) { //check if arr is empty
			return 0;
			
		} else if (arr.length == 1) {
			return -1;

		} else { //check if array is arithmetic

			let diff = arr[1] - arr[0];
 			let flag = true;

 			for (let i = 0; i < arr.length - 1; i++) {

 				if ((arr[i+1] - arr[i]) != diff) {
 					flag = false;
 				}
 		
 			}

 			// test if flag is true, and return 'Arithmetic'
 			if (flag === true) {
 				return 'Arithmetic';

 			} else {  // Check if array is a GP

				let ratio = arr[1] / arr[0];
	 			let flag1 = true;

	 			for (let i = 0; i < arr.length - 1; i++) {

	 				if ((arr[i+1] / arr[i]) != ratio) {
	 					flag1 = false;
	 				}
	 		
	 			}

	 			// test if flag is true, and return 'Arithmetic'
	 			if (flag1 === true) {
	 				return 'Geometric';
	 			}

	 			return -1;

			}
		}

		

	}
}