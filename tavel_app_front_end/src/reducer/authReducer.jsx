export const AuthReducer = (state, { type, payload }) => {
    switch (type) {
        case "IS_AUTHOPEN":
            return {
                ...state,
                isAuthOpen: !state.isAuthOpen
            }

        case "LOGIN":
            return {
                ...state,
                openform: "login"
            }

        case "SIGNUP":
            return {
                ...state,
                openform: "signup"
            }

        case "USERNAME":
            return {
                ...state,
                username: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
        case "EMAIL":
            return {
                ...state,
                email: payload
            }
        case "NUMBER":
            return {
                ...state,
                number: payload
            }

        case "CONFIRM_PASSWORD":
            return {
                ...state,
                conformpassword: payload
            }
        case 'STATE_LOGIN':
            return {
                ...state,
                number: "",
                username: "",
                password: "",
                email: "",
                conformpassword: "",
            }

        case "NAME":
            return {
                ...state,
                name: payload
            }

        case "TOKEN":
            return {
                ...state,
                authToken: payload
            }
        default:
            return state;
    }

}