using Microsoft.AspNetCore.Mvc;
using backend.Core.Dtos.Accessory;
using backend.Core.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccessoryController : ControllerBase
    {
        private readonly IAccessoryService _accessoryService;
        private readonly ILogger<AccessoryController> _logger;

        public AccessoryController(IAccessoryService accessoryService, ILogger<AccessoryController> logger)
        {
            _accessoryService = accessoryService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AddAccessory(AccessoryDto accessoryDto)
        {
            try
            {
                var result = await _accessoryService.AddAccessoryAsync(accessoryDto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new accessory.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAccessories()
        {
            try
            {
                var accessories = await _accessoryService.GetAllAccessoriesAsync();
                return Ok(accessories);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all accessories.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAccessoryById(int id)
        {
            try
            {
                var accessory = await _accessoryService.GetAccessoryByIdAsync(id);
                if (accessory == null)
                {
                    return NotFound();
                }
                return Ok(accessory);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting accessory by id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAccessory(int id, AccessoryDto accessoryDto)
        {
            try
            {
                var result = await _accessoryService.UpdateAccessoryAsync(id, accessoryDto);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating accessory with id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccessory(int id)
        {
            try
            {
                await _accessoryService.DeleteAccessoryAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting accessory with id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }
    }
}
