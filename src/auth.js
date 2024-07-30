import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserByEmail } from "./data/users"
import async from './app/home/page';

export const {
    handlers: { GET, POST},
    auth, signIn, signOut
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            async authorize(credentials){
                if(credentials == null) return null;
                try{
                    const user = getUserByEmail(credentials?.email)

                    if(user){
                        const isMatch = user?.password === credentials?.password;

                        if(isMatch){
                            return user;
                        }else{
                            throw new Error('Password Incorrect..!')
                        }
                    }else{
                        throw new Error('User not found..!')
                    }
                }
                catch(error){
                    throw new Error(error)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        // ...add more providers here
    ],
})