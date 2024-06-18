using backend.Core.Dtos.Auth;
using backend.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly IFoodService _foodService;

        public FoodController(IFoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddFood([FromForm] CreateFoodDto foodDto, IFormFile image)
        {
            var result = await _foodService.AddFoodAsync(foodDto, image);
            if (!result)
            {
                return BadRequest(new { success = false, message = "Failed to add food item" });
            }
            return Ok(new { success = true, message = "Food Added" });
        }

        [HttpGet("list")]
        public async Task<IActionResult> ListFood()
        {
            var foods = await _foodService.ListFoodAsync();
            return Ok(new { success = true, data = foods });
        }

        [HttpPost("remove")]
        public async Task<IActionResult> RemoveFood(int id)
        {
            var result = await _foodService.RemoveFoodAsync(id);
            if (!result)
            {
                return NotFound(new { success = false, message = "Food Not Found" });
            }
            return Ok(new { success = true, message = "Food Removed" });
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateFood([FromForm] UpdateFoodDto foodDto, IFormFile image)
        {
            var result = await _foodService.UpdateFoodAsync(foodDto, image);
            if (!result)
            {
                return NotFound(new { success = false, message = "Food Not Found" });
            }
            return Ok(new { success = true, message = "Food Updated" });
        }
    }
}
