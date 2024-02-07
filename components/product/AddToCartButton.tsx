import React, { useState, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import { CartState, Checkout } from "lib/useCart";
import { ProductContext } from "pages/products/[handle]";
import CartDrawer from "components/product/CartDrawer";

type Props = {
  cartState: CartState;
  checkout: Checkout;
};

const AddToCartButton: React.FC<Props> = ({ cartState, checkout }) => {
  const { product, variant } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = async () => {
    setLoading(true);
    const quantity = 1;
    await checkout.addItem(
      (variant ? variant : product.variants[0]).id,
      quantity
    );
    setLoading(false);
    setIsOpen(true);
  };

  return (
    <>
      {loading ? (
        <button
          className="border border-gray-400 font-semibold inline-block text-gray-700 rounded-sm px-4 py-3 text-sm w-full"
          onClick={onClickHandler}
        >
          <CircularProgress
            classes={{ svg: "font-bold text-gray-400" }}
            size="1.25rem"
            thickness={6}
          />
        </button>
      ) : (
        <button
          className="border border-gray-900 font-semibold inline-block text-gray-700 rounded-sm px-4 py-3 text-sm w-full"
          onClick={onClickHandler}
        >
          カートに追加する
        </button>
      )}
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} cartState={cartState} />
    </>
  );
};

export default AddToCartButton;
