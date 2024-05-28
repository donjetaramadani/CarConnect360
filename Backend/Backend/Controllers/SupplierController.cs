using backend.Core.Dtos.Auth;
using backend.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SupplierController : ControllerBase
    {
        private readonly ISupplierService _supplierService;

        public SupplierController(ISupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpPost]
        public async Task<IActionResult> AddSupplier(SupplierDto supplierDto)
        {
            try
            {
                var result = await _supplierService.AddSupplierAsync(supplierDto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        [HttpGet("history")]
        public async Task<IActionResult> GetSupplierHistory()
        {
            try
            {
                var supplierHistory = await _supplierService.GetSupplierHistoryAsync();
                return Ok(supplierHistory);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        // Implement other CRUD operations as needed
    }
}
