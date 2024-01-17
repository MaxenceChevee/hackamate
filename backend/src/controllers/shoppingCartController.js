const ShoppingCartManager = require("../models/ShoppingCartManager");

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, itemType, quantity } = req.body;

    const shoppingCartManager = new ShoppingCartManager();

    let cart = await shoppingCartManager.getByUserId(userId);

    if (!cart) {
      cart = await shoppingCartManager.create({ userId });
    }

    await shoppingCartManager.addItem(cart.id, itemId, itemType, quantity);

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res
      .status(500)
      .json({ message: "Error adding item to cart", error: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { cartId, itemId } = req.params;

    const shoppingCartManager = new ShoppingCartManager();

    await shoppingCartManager.removeItem(cartId, itemId);

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res
      .status(500)
      .json({ message: "Error removing item from cart", error: error.message });
  }
};

const viewCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const shoppingCartManager = new ShoppingCartManager();

    const cart = await shoppingCartManager.getByUserId(userId);

    if (!cart) {
      res.status(404).json({ message: "Cart not found" });
      return;
    }

    const cartItems = await shoppingCartManager.getCartItems(cart.id);

    res.status(200).json({ cart, items: cartItems });
  } catch (error) {
    console.error("Error viewing cart:", error);
    res
      .status(500)
      .json({ message: "Error viewing cart", error: error.message });
  }
};

const updateCartItemQuantity = async (req, res) => {
  try {
    const { cartId, itemId, quantity } = req.params;

    const shoppingCartManager = new ShoppingCartManager();

    await shoppingCartManager.updateItemQuantity(cartId, itemId, quantity);

    res
      .status(200)
      .json({ message: "Cart item quantity updated successfully" });
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    res.status(500).json({
      message: "Error updating cart item quantity",
      error: error.message,
    });
  }
};

const clearCart = async (req, res) => {
  try {
    const { cartId, itemId } = req.params;

    const shoppingCartManager = new ShoppingCartManager();

    if (itemId) {
      await shoppingCartManager.removeItem(cartId, itemId);
      res.status(200).json({ message: "Item removed from cart successfully" });
    } else {
      await shoppingCartManager.clearCart(cartId);
      res.status(200).json({ message: "Cart cleared successfully" });
    }
  } catch (error) {
    console.error("Error clearing cart:", error);
    res
      .status(500)
      .json({ message: "Error clearing cart", error: error.message });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  viewCart,
  updateCartItemQuantity,
  clearCart,
};
