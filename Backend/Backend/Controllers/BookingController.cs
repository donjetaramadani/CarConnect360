using Microsoft.AspNetCore.Mvc;
using backend.Core.Dtos.Auth;
using backend.Core.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _bookingService;
        private readonly ILogger<BookingController> _logger;

        public BookingController(IBookingService bookingService, ILogger<BookingController> logger)
        {
            _bookingService = bookingService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AddBooking(BookingDto bookingDto)
        {
            try
            {
                var result = await _bookingService.AddBookingAsync(bookingDto);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new booking.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBookings()
        {
            try
            {
                var bookings = await _bookingService.GetAllBookingsAsync();
                return Ok(bookings);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all bookings.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookingById(int id)
        {
            try
            {
                var booking = await _bookingService.GetBookingByIdAsync(id);
                if (booking == null)
                {
                    return NotFound();
                }
                return Ok(booking);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting booking by id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBooking(int id, BookingDto bookingDto)
        {
            try
            {
                var result = await _bookingService.UpdateBookingAsync(id, bookingDto);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating booking with id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            try
            {
                await _bookingService.DeleteBookingAsync(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting booking with id {id}.");
                return StatusCode(500, $"Internal server error: {ex.InnerException?.Message ?? ex.Message}");
            }
        }
    }
}
