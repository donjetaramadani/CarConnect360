using backend.Core.Dtos.Invoice;
using backend.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoicesController : ControllerBase
    {
        private readonly IInvoiceService _invoiceService;

        public InvoicesController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInvoices()
        {
            try
            {
                var invoices = await _invoiceService.GetAllInvoicesAsync();
                return Ok(invoices);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoiceById(int id)
        {
            try
            {
                var invoice = await _invoiceService.GetInvoiceByIdAsync(id);
                if (invoice != null)
                {
                    return Ok(invoice);
                }
                else
                {
                    return NotFound("Invoice not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddInvoice(InvoiceDto invoiceDto)
        {
            try
            {
                var result = await _invoiceService.AddInvoiceAsync(invoiceDto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInvoice(int id, InvoiceDto invoiceDto)
        {
            try
            {
                var result = await _invoiceService.UpdateInvoiceAsync(id, invoiceDto);
                if (result)
                {
                    return Ok("Invoice updated successfully");
                }
                else
                {
                    return NotFound("Invoice not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice(int id)
        {
            try
            {
                var result = await _invoiceService.DeleteInvoiceAsync(id);
                if (result)
                {
                    return Ok("Invoice deleted successfully");
                }
                else
                {
                    return NotFound("Invoice not found");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
