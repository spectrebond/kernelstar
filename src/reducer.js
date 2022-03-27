export const initialState = {
    label: null,
    value: null,
    coins: null,
    token: null,
    deleted: false,
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {

        case "SET_LABEL":
              return{
                ...state,
                label: action.label
              }
        case "SET_VALUE":
              return{
                ...state,
                value: action.value
              }
        case "SET_COINS":
              return{
                ...state,
                coins: action.coins
              }
        case "SET_TOKEN":
              return{
                ...state,
                token: action.token
              }
        case "SET_DELETED":
              return{
                ...state,
                deleted: action.deleted
              }
        default:
            return state;
    }
}

export default reducer;