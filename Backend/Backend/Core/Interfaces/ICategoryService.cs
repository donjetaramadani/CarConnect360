using System.Collections.Generic;
using backend.Core.Dtos.Auth;
using System.Threading.Tasks;

namespace backend.Core.Interfaces
{
    public interface ICategoryService
    {
        Task<CategoryDto> AddCategoryAsync(CategoryDto categoryDto);
        Task<bool> DeleteCategoryAsync(int id);
        Task<IEnumerable<CategoryDto>> GetCategoriesAsync();
        Task<IEnumerable<CategoryDto>> GetCategoryHistoryAsync();
        // Define other CRUD operations as needed
    }
}
