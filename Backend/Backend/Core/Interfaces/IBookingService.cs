using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Core.Dtos.Auth;

namespace backend.Core.Interfaces
{
    public interface IBookingService
    {
        Task<IEnumerable<BookingDto>> GetAllBookingsAsync();
        Task<BookingDto> GetBookingByIdAsync(int id);
        Task<BookingDto> AddBookingAsync(BookingDto bookingDto);
        Task<BookingDto> UpdateBookingAsync(int id, BookingDto bookingDto);
        Task DeleteBookingAsync(int id);
    }
}