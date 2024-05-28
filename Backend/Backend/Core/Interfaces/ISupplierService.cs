using backend.Core.Dtos.Auth;
using System.Threading.Tasks;

namespace backend.Core.Interfaces
{
    public interface ISupplierService
    {
        Task<SupplierDto> AddSupplierAsync(SupplierDto supplierDto);

        Task<IEnumerable<SupplierDto>> GetSupplierHistoryAsync();
        // Define other CRUD operations as needed
    }
}
