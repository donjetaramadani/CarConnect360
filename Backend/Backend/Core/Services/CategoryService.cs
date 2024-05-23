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

        // Implement other CRUD operations as needed
    }
}
