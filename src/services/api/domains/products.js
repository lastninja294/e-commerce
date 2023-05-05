import axios from "@/services/api/axios-instance";

class ProductsAPI {
  static getProducts = async () => {
    const response = await axios.get("/products");
    const data = response.data;
    return data;
  };
}

export default ProductsAPI;
