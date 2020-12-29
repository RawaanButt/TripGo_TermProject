import GenericService from "./GenericService";

class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => this.post("products", data);
  deleteProduct = (_id) => this.delete("products/" + _id);
  deletecart = (_id) => this.delete("newBookings/cart/" + _id);
  updateProduct = (id, data) => this.put("products/" + id, data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/" + id);
  addtocart = (_id) => this.post("newBookings/cart/" + _id);
  getnewBookings = () => this.get("newBookings/cart");
}
let productService = new ProductsService();
export default productService;
