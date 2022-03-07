export default function authHeader() {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log("user.data", user);
	if (user) {
		return {
			"x-access-token": user,
			"Content-Type": "application/json",
			Accept: "application/json",
		};
	} else {
		return {};
	}
}
