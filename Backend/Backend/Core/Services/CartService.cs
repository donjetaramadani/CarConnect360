using backend.Core.Interfaces;
using backend.Models;

namespace backend.Core.Services
{

    public class CartService : ICartService
    {
        private readonly List<CartItem> _cartItems;

        public CartService()
        {
            _cartItems = new List<CartItem>();
        }

        public async Task AddToCart(string itemName)
        {
            var existingItem = _cartItems.FirstOrDefault(item => item.ItemName == itemName);
            if (existingItem != null)
            {
                existingItem.Quantity++;
            }
            else
            {
                _cartItems.Add(new CartItem { ItemName = itemName, Quantity = 1 });
            }
            await Task.CompletedTask;
        }

        public async Task RemoveFromCart(string itemName)
        {
            var existingItem = _cartItems.FirstOrDefault(item => item.ItemName == itemName);
            if (existingItem != null)
            {
                if (existingItem.Quantity > 1)
                {
                    existingItem.Quantity--;
                }
                else
                {
                    _cartItems.Remove(existingItem);
                }
            }
            await Task.CompletedTask;
        }

        public async Task<List<CartItem>> GetCart()
        {
            await Task.CompletedTask;
            return _cartItems;
        }
    }
}
