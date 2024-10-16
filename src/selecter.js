export const selectquantityByDate = (state, date) => {
    const user = state.data.find(user => user.date === date);
    return user ? user.quantity : null;
};
