using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace backend.Core.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext _dbContext;

        public CategoryService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<CategoryDto> AddCategoryAsync(CategoryDto categoryDto)
        {
            try
            {
                var category = new Category
                {
                    Name = categoryDto.Name,
                    Description = categoryDto.Description
                };

                _dbContext.Categories.Add(category);
                await _dbContext.SaveChangesAsync();

                categoryDto.Id = category.Id; // Update the DTO with the generated ID
                return categoryDto;
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                throw new Exception("Failed to add category", ex);
            }
        }
        public async Task<bool> DeleteCategoryAsync(int id)
        {
            try
            {
                var category = await _dbContext.Categories.FindAsync(id);
                if (category == null)
                    return false;

                _dbContext.Categories.Remove(category);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                throw new Exception("Failed to delete category", ex);
            }
        }

        public async Task<IEnumerable<CategoryDto>> GetCategoriesAsync()
        {
            try
            {
                var categories = await _dbContext.Categories
                    .Select(c => new CategoryDto
                    {
                        Id = c.Id,
                        Name = c.Name,
                        Description = c.Description
                    })
                    .ToListAsync();

                return categories;
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                throw new Exception("Failed to fetch categories", ex);
            }
        }

        public async Task<IEnumerable<CategoryDto>> GetCategoryHistoryAsync()
        {
            try
            {
                var categoryHistory = await _dbContext.Categories
                    .OrderByDescending(c => c.Id) // Adjust this based on how you want to order the history
                    .Select(c => new CategoryDto
                    {
                        Id = c.Id,
                        Name = c.Name,
                        Description = c.Description
                    })
                    .ToListAsync();

                return categoryHistory;
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                throw new Exception("Failed to fetch category history", ex);
            }
        }


        // Implement other CRUD operations as needed
    }
}
