using backend.Core.Dtos.Auth;
using backend.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace backend.Core.Interfaces
{
    public interface IFoodItemService
    {
        Task<FoodItem> AddFoodItemAsync(FoodItem foodItem);
        Task<IEnumerable<FoodItem>> GetAllFoodItemsAsync();
        Task<FoodItem> GetFoodItemByIdAsync(int id);
        Task<FoodItem> UpdateFoodItemAsync(int id, FoodItem foodItem);
        Task DeleteFoodItemAsync(int id);
    }
}
