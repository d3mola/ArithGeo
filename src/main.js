'use strict';

module.exports = {

	// function to check whether sequence is arithmetic or geometric goes here

	arithGeo: (arr) => {

		// check if argument is an array
		if (Array.isArray(arr) !== true) {
			return undefined;
		}
		//check if arr is empty
		else if (arr.length < 1) {
			return 0;
		}
		//check if array is arithmetic
		else {
			let diff = arr[1] - arr[0];
 			let flag = true;

 			for (let i = 0; i < arr.length - 1; i++) {

 				if ((arr[i+1] - arr[i]) != diff) {
 					flag = false;
 				}
 		
 			}

 			// test if flag is true, and return 'Arithmetic'
 			if (flag === true)
 				return 'Arithmetic';
		}

	}
}