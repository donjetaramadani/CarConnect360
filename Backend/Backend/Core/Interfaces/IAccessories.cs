using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Core.Dtos.Accessory;

namespace backend.Core.Interfaces
{
    public interface IAccessoryService
    {
        Task<IEnumerable<AccessoryDto>> GetAllAccessoriesAsync();
        Task<AccessoryDto?> GetAccessoryByIdAsync(int id); 
        Task<AccessoryDto> AddAccessoryAsync(AccessoryDto accessoryDto);
        Task<AccessoryDto> UpdateAccessoryAsync(int id, AccessoryDto accessoryDto);
        Task DeleteAccessoryAsync(int id);
    }
}
