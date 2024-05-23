using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace backend.Core.Services
{
    public class SupplierService : ISupplierService
    {
        private readonly ApplicationDbContext _dbContext;

        public SupplierService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<SupplierDto> AddSupplierAsync(SupplierDto supplierDto)
        {
            try
            {
                var supplier = new Supplier
                {
                    Name = supplierDto.Name,
                    ContactInformation = supplierDto.ContactInformation
                };

                _dbContext.Suppliers.Add(supplier);
                await _dbContext.SaveChangesAsync();

                supplierDto.Id = supplier.Id; // Update the DTO with the generated ID
                return supplierDto;
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                throw new Exception("Failed to add supplier", ex);
            }
        }

        // Implement other CRUD operations as needed
    }
}
