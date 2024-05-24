using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Entities;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backend.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<CustomerService> _logger;

        public CustomerService(ApplicationDbContext context, ILogger<CustomerService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IEnumerable<CustomerDto>> GetAllCustomersAsync()
        {
            try
            {
                var customers = await _context.Customers.ToListAsync();
                return customers.Select(c => MapCustomerToDto(c));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all customers.");
                throw;
            }
        }

        public async Task<CustomerDto> GetCustomerByIdAsync(int id)
        {
            try
            {
                var customer = await _context.Customers.FindAsync(id);
                return customer != null ? MapCustomerToDto(customer) : null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting customer by id {id}.");
                throw;
            }
        }

        public async Task<CustomerDto> AddCustomerAsync(CustomerDto customerDto)
        {
            try
            {
                var customer = new Customer
                {
                    Name = customerDto.Name,
                    Email = customerDto.Email,
                    PhoneNumber = customerDto.PhoneNumber,
                    Address = customerDto.Address,
                };

                _context.Customers.Add(customer);
                await _context.SaveChangesAsync();

                return MapCustomerToDto(customer);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new customer.");
                throw;
            }
        }

        public async Task<CustomerDto> UpdateCustomerAsync(int id, CustomerDto customerDto)
        {
            try
            {
                var customer = await _context.Customers.FindAsync(id);
                if (customer == null)
                    throw new InvalidOperationException("Customer not found");

                customer.Name = customerDto.Name;
                customer.Email = customerDto.Email;
                customer.PhoneNumber = customerDto.PhoneNumber;
                customer.Address = customerDto.Address;

                await _context.SaveChangesAsync();

                return MapCustomerToDto(customer);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating customer with id {id}.");
                throw;
            }
        }

        public async Task DeleteCustomerAsync(int id)
        {
            try
            {
                var customer = await _context.Customers.FindAsync(id);
                if (customer == null)
                    throw new InvalidOperationException("Customer not found");

                _context.Customers.Remove(customer);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting customer with id {id}.");
                throw;
            }
        }

        private CustomerDto MapCustomerToDto(Customer customer)
        {
            return new CustomerDto
            {
                Id = customer.Id,
                Name = customer.Name,
                Email = customer.Email,
                PhoneNumber = customer.PhoneNumber,
                Address = customer.Address,
            };
        }
    }
}