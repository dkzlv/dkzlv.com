const regex = /^\S+@\S+$/;

export const isEmail = (email: string) => regex.test(email);
