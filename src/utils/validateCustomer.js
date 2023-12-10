import { store } from "../redux/store";
import { getAllCustomers } from "../features/Customer/Customerservice";

export const getCustomers = () => {
  store.dispatch(getAllCustomers());
};
