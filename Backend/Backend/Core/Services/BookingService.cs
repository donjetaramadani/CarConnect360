using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Entities;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backend.Services
{
    public class BookingService : IBookingService
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<BookingService> _logger;

        public BookingService(ApplicationDbContext context, ILogger<BookingService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IEnumerable<BookingDto>> GetAllBookingsAsync()
        {
            try
            {
                var bookings = await _context.Bookings.ToListAsync();
                return bookings.Select(b => MapBookingToDto(b));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all bookings.");
                throw;
            }
        }

        public async Task<BookingDto> GetBookingByIdAsync(int id)
        {
            try
            {
                var booking = await _context.Bookings.FindAsync(id);
                return booking != null ? MapBookingToDto(booking) : null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting booking by id {id}.");
                throw;
            }
        }

        public async Task<BookingDto> AddBookingAsync(BookingDto bookingDto)
        {
            try
            {
                var booking = new Booking
                {
                    CustomerId = bookingDto.CustomerId,
                    StartDate = bookingDto.StartDate,
                    EndDate = bookingDto.EndDate,
                    Status = bookingDto.Status,
                    // Add additional fields as needed
                };

                _context.Bookings.Add(booking);
                await _context.SaveChangesAsync();

                return MapBookingToDto(booking);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new booking.");
                throw;
            }
        }

        public async Task<BookingDto> UpdateBookingAsync(int id, BookingDto bookingDto)
        {
            try
            {
                var booking = await _context.Bookings.FindAsync(id);
                if (booking == null)
                    throw new InvalidOperationException("Booking not found");

                booking.CustomerId = bookingDto.CustomerId;
                booking.StartDate = bookingDto.StartDate;
                booking.EndDate = bookingDto.EndDate;
                booking.Status = bookingDto.Status;
                // Update additional fields as needed

                await _context.SaveChangesAsync();

                return MapBookingToDto(booking);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating booking with id {id}.");
                throw;
            }
        }

        public async Task DeleteBookingAsync(int id)
        {
            try
            {
                var booking = await _context.Bookings.FindAsync(id);
                if (booking == null)
                    throw new InvalidOperationException("Booking not found");

                _context.Bookings.Remove(booking);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting booking with id {id}.");
                throw;
            }
        }

        private BookingDto MapBookingToDto(Booking booking)
        {
            return new BookingDto
            {
                Id = booking.Id,
                CustomerId = booking.CustomerId,
                StartDate = booking.StartDate,
                EndDate = booking.EndDate,
                Status = booking.Status,
                // Map additional fields as needed
            };
        }
    }
}
