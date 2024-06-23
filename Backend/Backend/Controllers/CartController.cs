using backend.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddToCart([FromBody] CartItemRequest request)
        {
            try
            {
                await _cartService.AddToCart(request.ItemName);
                return Ok(new { success = true, message = "Item added to cart" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"Failed to add item to cart: {ex.Message}" });
            }
        }

        [HttpPost("remove")]
        public async Task<IActionResult> RemoveFromCart([FromBody] CartItemRequest request)
        {
            try
            {
                await _cartService.RemoveFromCart(request.ItemName);
                return Ok(new { success = true, message = "Item removed from cart" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"Failed to remove item from cart: {ex.Message}" });
            }
        }
        public class CartItemRequest
        {
            public string ItemName { get; set; }
        }
    }
}
