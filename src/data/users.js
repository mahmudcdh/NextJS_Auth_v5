const users = [
    {
        name: "Site Admin",
        email: "admin@email.com",
        password: "password"
    },
    {
        email: "user@email.com",
        password: "password"
    },
    {
        email: "viewer@email.com",
        password: "password"
    }
];

export const getUserByEmail = email => {
    const found = users.find(user => user.email === email);
    return found;
}