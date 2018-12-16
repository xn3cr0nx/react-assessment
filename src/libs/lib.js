/**
 * function to set a key in component's state to true for three seconds
 * @param {string} field - Name of key in state that keeps the highlight trigger
 */
export function trigger3s(field) {
	this.setState({ [field]: true }, () => {
		setTimeout(() => {
			this.setState({ [field]: false });
		}, 3000);
	});
}
