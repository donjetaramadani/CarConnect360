using backend.Core.Entities;
using backend.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodItemController : ControllerBase
    {
        private readonly IFoodItemService _foodItemService;
        private readonly ILogger<FoodItemController> _logger;

        public FoodItemController(IFoodItemService foodItemService, ILogger<FoodItemController> logger)
        {
            _foodItemService = foodItemService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AddFoodItem([FromBody] FoodItem foodItem)
        {
            try
            {
                var result = await _foodItemService.AddFoodItemAsync(foodItem);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new food item.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllFoodItems()
        {
            try
            {
                var foodItems = await _foodItemService.GetAllFoodItemsAsync();
                return Ok(foodItems);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all food items.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFoodItemById(int id)
        {
            try
            {
                var foodItem = await _foodItemService.GetFoodItemByIdAsync(id);
                if (foodItem == null)
                {
                    return NotFound();
                }
                return Ok(foodItem);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting food item by id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFoodItem(int id, [FromBody] FoodItem foodItem)
        {
            try
            {
                var result = await _foodItemService.UpdateFoodItemAsync(id, foodItem);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating food item with id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodItem(int id)
        {
            try
            {
                await _foodItemService.DeleteFoodItemAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting food item with id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }
    }
}
