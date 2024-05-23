using backend.Core.Dtos.Auth;
using System.Threading.Tasks;

namespace backend.Core.Interfaces
{
    public interface ICategoryService
    {
        Task<CategoryDto> AddCategoryAsync(CategoryDto categoryDto);
        // Define other CRUD operations as needed
    }
}
