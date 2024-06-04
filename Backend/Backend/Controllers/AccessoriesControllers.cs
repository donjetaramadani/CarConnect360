using Microsoft.AspNetCore.Mvc;
using backend.Core.Dtos.Accessory;
using backend.Core.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
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
        public async Task<IActionResult> AddAccessory([FromBody][Required] AccessoryDto accessoryDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _accessoryService.AddAccessoryAsync(accessoryDto);
                _logger.LogInformation("Accessory added successfully.");
                return CreatedAtAction(nameof(GetAccessoryById), new { id = result.Id }, result);
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

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAccessoryById(int id)
        {
            try
            {
                var accessory = await _accessoryService.GetAccessoryByIdAsync(id);
                if (accessory == null)
                {
                    _logger.LogWarning($"Accessory with id {id} not found.");
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

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateAccessory(int id, [FromBody][Required] AccessoryDto accessoryDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _accessoryService.UpdateAccessoryAsync(id, accessoryDto);
                if (result == null)
                {
                    _logger.LogWarning($"Accessory with id {id} not found for update.");
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

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAccessory(int id)
        {
            try
            {
                await _accessoryService.DeleteAccessoryAsync(id);
                _logger.LogInformation($"Accessory with id {id} deleted successfully.");
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
