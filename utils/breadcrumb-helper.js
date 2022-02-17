export const sanitizeTitle = (string) => {
	string.replace(/\s+/g, "");
	return string;
};

export const sanitizeUrl = (string) => {
	if (string?.includes("posts/")) {
		return string.slice(-1);
	} else return null;
};
