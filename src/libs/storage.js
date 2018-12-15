const key = "users";

export const get = () => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (e) {
		return false;
	}
};

export const set = obj => {
	localStorage.setItem(key, JSON.stringify(obj));
};

export const remove = () => {
	localStorage.removeItem(key);
};
