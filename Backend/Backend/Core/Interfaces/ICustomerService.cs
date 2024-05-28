using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Core.Dtos.Auth;

namespace backend.Core.Interfaces
{
    public interface ICustomerService
    {
        Task<IEnumerable<CustomerDto>> GetAllCustomersAsync();
        Task<CustomerDto> GetCustomerByIdAsync(int id);
        Task<CustomerDto> AddCustomerAsync(CustomerDto customerDto);
        Task<CustomerDto> UpdateCustomerAsync(int id, CustomerDto customerDto);
        Task DeleteCustomerAsync(int id);
    }
}
