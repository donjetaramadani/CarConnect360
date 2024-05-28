using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Core.Dtos.Auth;

namespace backend.Core.Interfaces
{
    public interface IPaymentService
    {
        Task<IEnumerable<PaymentDto>> GetAllPaymentsAsync();
        Task<PaymentDto> GetPaymentByIdAsync(int id);
        Task<PaymentDto> AddPaymentAsync(PaymentDto paymentDto);
        Task<PaymentDto> UpdatePaymentAsync(int id, PaymentDto paymentDto);
        Task DeletePaymentAsync(int id);
    }
}
