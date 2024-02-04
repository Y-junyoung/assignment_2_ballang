const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const getProducts = async () => {
  const endpoint =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products";
  const response = await fetch(endpoint, options);
  const data = await response.json();

  return data;
};

const getProduct = async (goodsno) => {
  const endpoint = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${goodsno}`;
  const response = await fetch(endpoint, options);
  const data = await response.json();
  // console.log(data);
  return data;
};

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
