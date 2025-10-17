export const DateReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "IS_SEARCH_MODAL":
            return {
                ...state, ismodalopen: !state.ismodalopen
            };
        case "CHECK_IN":
            return {
                ...state, checkInDate: payload
            };
        case "CHECK_OUT":
            return {
                ...state, checkOutDate: payload
            };

        case "DESTINATION":
            return {
                ...state, destination: payload
            }

        case "DATE":
            return {
                ...state, date: payload
            }

        case "ISSEARCHOPEN":
            return {
                ...state, issearchopen: false
            }
        case "ISSEARCH":
            return {
                ...state, issearchopen: true
            }
        case 'IS_SEARCH_MODAL_CLOSE':
            return {
                ...state, ismodalopen: !state.ismodalopen
            }
        case 'CLEAR_DATES':
            return {
                ...state,
                checkInDate: null,
                checkOutDate: null,
                date: 0
            }

        case "ORDER":
            return {
                ...state,
                order: true
            }

        case "ORDER_CLEAR":
            return {
                ...state,
                order: false

            }
        default:
            return state;
    }
}