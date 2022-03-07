import NextAuth from "next-auth/next";
import Email from "next-auth/providers/email";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Email({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// ...add more providers here
	],
});
