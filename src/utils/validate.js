export const loginValidation = (email, password, userName) => {
    // eslint-disable-next-line no-useless-escape
    const emailValidate = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);

    const passwordValidate =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            password
        );

    const nameValidate = /^[A-Za-z-' ]{1,}$/.test(userName);

    if (!nameValidate) {
        return "Full Name is not valid.";
    }

    if (!emailValidate) {
        return "Email is not valid.";
    }

    // if (!passwordValidate) {
    //   return "Password is not valid.";
    // }

    return null;
};
