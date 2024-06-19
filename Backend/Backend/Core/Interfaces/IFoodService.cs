using backend.Core.Dtos.Auth;

namespace backend.Core.Interfaces
{
    public interface IFoodService
    {
        Task<bool> AddFoodAsync(CreateFoodDto foodDto, IFormFile image);
        Task<IEnumerable<FoodDto>> ListFoodAsync();
        Task<bool> RemoveFoodByNameAsync(string name);
        Task<bool> UpdateFoodAsync(UpdateFoodDto foodDto, IFormFile image);
    }
}
