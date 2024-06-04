using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Core.DbContext;
using backend.Core.Dtos.Accessory;
using backend.Core.Entities;
using backend.Core.Interfaces;
using backend.Models.backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backend.Services
{
    public class AccessoryService : IAccessoryService
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<AccessoryService> _logger;

        public AccessoryService(ApplicationDbContext context, ILogger<AccessoryService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IEnumerable<AccessoryDto>> GetAllAccessoriesAsync()
        {
            try
            {
                var accessories = await _context.Accessories.ToListAsync();
                return accessories.Select(a => MapAccessoryToDto(a));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all accessories.");
                throw;
            }
        }

        public async Task<AccessoryDto?> GetAccessoryByIdAsync(int id)
        {
            try
            {
                var accessory = await _context.Accessories.FindAsync(id);
                return accessory != null ? MapAccessoryToDto(accessory) : null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting accessory by id {id}.");
                throw;
            }
        }

        public async Task<AccessoryDto> AddAccessoryAsync(AccessoryDto accessoryDto)
        {
            try
            {
                var accessory = new Accessory
                {
                    Name = accessoryDto.Name,
                    Description = accessoryDto.Description,
                    Price = accessoryDto.Price,
                    CategoryId = accessoryDto.CategoryId
                };

                _context.Accessories.Add(accessory);
                await _context.SaveChangesAsync();

                return MapAccessoryToDto(accessory);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new accessory.");
                throw;
            }
        }

        public async Task<AccessoryDto> UpdateAccessoryAsync(int id, AccessoryDto accessoryDto)
        {
            try
            {
                var accessory = await _context.Accessories.FindAsync(id);
                if (accessory == null)
                    throw new InvalidOperationException("Accessory not found");

                accessory.Name = accessoryDto.Name;
                accessory.Description = accessoryDto.Description;
                accessory.Price = accessoryDto.Price;
                accessory.CategoryId = accessoryDto.CategoryId;

                await _context.SaveChangesAsync();

                return MapAccessoryToDto(accessory);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating accessory with id {id}.");
                throw;
            }
        }

        public async Task DeleteAccessoryAsync(int id)
        {
            try
            {
                var accessory = await _context.Accessories.FindAsync(id);
                if (accessory == null)
                    throw new InvalidOperationException("Accessory not found");

                _context.Accessories.Remove(accessory);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting accessory with id {id}.");
                throw;
            }
        }

        private AccessoryDto MapAccessoryToDto(Accessory accessory)
        {
            return new AccessoryDto
            {
                Id = accessory.Id,
                Name = accessory.Name,
                Description = accessory.Description,
                Price = accessory.Price,
                CategoryId = accessory.CategoryId
            };
        }
    }
}
