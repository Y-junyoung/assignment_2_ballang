export const ADD_GOODS = "cart/addGoods";
export const REMOVE_GOODS = "cart/removeGoods";

export const addGoodsActionCreator = (payload) => ({
  type: ADD_GOODS,
  payload,
});
export const removeGoodsActionCreator = (payload) => ({
  type: REMOVE_GOODS,
  payload,
});

const initialState = {
  goods: [],
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === ADD_GOODS) {
    const newItem = action.payload;
    const newGoods = [...state.goods, newItem];

    newState.goods = newGoods;
  } else if (action.type === REMOVE_GOODS) {
    const goodsIdToRemove = action.payload;
    const newGoods = state.goods.filter((item) => item.id !== goodsIdToRemove);

    newState.goods = newGoods;
  }

  return newState;
}
