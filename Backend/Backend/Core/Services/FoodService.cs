using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Core.Services
{
    public class FoodService : IFoodService
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public FoodService(ApplicationDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            _hostEnvironment = hostEnvironment;
        }

        public async Task<bool> AddFoodAsync(CreateFoodDto foodDto, IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return false;
            }

            string uploadsFolder = Path.Combine(_hostEnvironment.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder);
            }

            string uniqueFileName = $"{Guid.NewGuid()}_{image.FileName}";
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            var food = new Food
            {
                Name = foodDto.Name,
                Description = foodDto.Description,
                Price = foodDto.Price,
                Category = foodDto.Category,
                Image = uniqueFileName
            };

            _context.Foods.Add(food);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<FoodDto>> ListFoodAsync()
        {
            var foods = await _context.Foods.ToListAsync();
            return foods.Select(f => new FoodDto
            {
                Name = f.Name,
                Description = f.Description,
                Price = f.Price,
                Image = f.Image,
                Category = f.Category
            }).ToList();
        }

        public async Task<bool> RemoveFoodAsync(int id)
        {
            var food = await _context.Foods.FindAsync(id);
            if (food == null)
            {
                return false;
            }

            string imagePath = Path.Combine(_hostEnvironment.WebRootPath, "uploads", food.Image);
            if (System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }

            _context.Foods.Remove(food);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RemoveFoodByNameAsync(string name)
        {
            var food = await _context.Foods.SingleOrDefaultAsync(f => f.Name == name);
            if (food == null)
            {
                return false;
            }

            string imagePath = Path.Combine(_hostEnvironment.WebRootPath, "uploads", food.Image);
            if (System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }

            _context.Foods.Remove(food);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateFoodAsync(UpdateFoodDto foodDto, IFormFile image)
        {
            var food = await _context.Foods.FindAsync(foodDto.Id);
            if (food == null)
            {
                return false;
            }

            if (image != null && image.Length > 0)
            {
                string uploadsFolder = Path.Combine(_hostEnvironment.WebRootPath, "uploads");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string uniqueFileName = $"{Guid.NewGuid()}_{image.FileName}";
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }

                // Delete old image
                string oldImagePath = Path.Combine(_hostEnvironment.WebRootPath, "uploads", food.Image);
                if (System.IO.File.Exists(oldImagePath))
                {
                    System.IO.File.Delete(oldImagePath);
                }

                food.Image = uniqueFileName;
            }

            food.Name = foodDto.Name;
            food.Description = foodDto.Description;
            food.Price = foodDto.Price;
            food.Category = foodDto.Category;

            _context.Foods.Update(food);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
