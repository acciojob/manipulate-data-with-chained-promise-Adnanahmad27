//your JS code here. If required.
const arr = [1,2,3,4];

const output = document.getElementById('output');

async function displayOutput(arr){
	return new Promise((res , rej) => {
		let arr2 = arr.filter( no => no%2===0);
		setTimeout( () => {
			output.innerText = arr2;
			res(arr2);
		}, 1000);
	}).then( (arr2) => {
		return new Promise((res , rej) => {
			arr2 = arr2.map( no => no*2);
			setTimeout( () => {
				output.innerText = arr2;
				res(arr2);
			}, 2000);
		})
	})
}
displayOutput(arr);

