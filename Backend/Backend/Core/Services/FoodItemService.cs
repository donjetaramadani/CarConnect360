using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Entities;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Core.Services
{
    public class FoodItemService : IFoodItemService
    {
        private readonly ApplicationDbContext _context;

        public FoodItemService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<FoodItem> AddFoodItemAsync(FoodItem foodItem)
        {
            _context.FoodItems.Add(foodItem);
            await _context.SaveChangesAsync();
            return foodItem;
        }

        public async Task<IEnumerable<FoodItem>> GetAllFoodItemsAsync()
        {
            return await _context.FoodItems.ToListAsync();
        }

        public async Task<FoodItem> GetFoodItemByIdAsync(int id)
        {
            return await _context.FoodItems.FindAsync(id);
        }

        public async Task<FoodItem> UpdateFoodItemAsync(int id, FoodItem foodItem)
        {
            var existingFoodItem = await _context.FoodItems.FindAsync(id);
            if (existingFoodItem == null) return null;

            existingFoodItem.Name = foodItem.Name;
            existingFoodItem.Description = foodItem.Description;
            existingFoodItem.Price = foodItem.Price;
            existingFoodItem.Image = foodItem.Image;
            existingFoodItem.Category = foodItem.Category;

            await _context.SaveChangesAsync();
            return existingFoodItem;
        }

        public async Task DeleteFoodItemAsync(int id)
        {
            var foodItem = await _context.FoodItems.FindAsync(id);
            if (foodItem != null)
            {
                _context.FoodItems.Remove(foodItem);
                await _context.SaveChangesAsync();
            }
        }

    }
}
