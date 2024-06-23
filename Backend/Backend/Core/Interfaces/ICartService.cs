using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;


namespace backend.Core.Interfaces
{
    public interface ICartService
    {
        Task AddToCart(string itemName);
        Task RemoveFromCart(string itemName);
        Task<List<CartItem>> GetCart();

    }
}
