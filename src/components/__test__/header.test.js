import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import store from "../../../utils/store";
import Header from "../header";

test("cart items should be 0 when the header component render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
   
  
  const cartItems = header.getByTestId('cartItems');

  expect(cartItems.innerHTML).toBe("0")

});
