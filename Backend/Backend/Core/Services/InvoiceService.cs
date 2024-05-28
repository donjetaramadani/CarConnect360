// InvoiceService.cs
using backend.Core.DbContext;
using backend.Core.Dtos.Invoice;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Core.Services
{
    public class InvoiceService : IInvoiceService
    {
        private readonly ApplicationDbContext _dbContext;

        public InvoiceService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<InvoiceDto>> GetAllInvoicesAsync()
        {
            try
            {
                // Implement logic to retrieve all invoices from the database
                var invoices = await _dbContext.Invoices.ToListAsync();
                return invoices.Select(i => MapToInvoiceDto(i)).ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to retrieve invoices", ex);
            }
        }

        public async Task<InvoiceDto> GetInvoiceByIdAsync(int id)
        {
            try
            {
                // Implement logic to retrieve a specific invoice by ID from the database
                var invoice = await _dbContext.Invoices.FindAsync(id);
                return MapToInvoiceDto(invoice);
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to retrieve invoice", ex);
            }
        }

        public async Task<InvoiceDto> AddInvoiceAsync(InvoiceDto invoiceDto)
        {
            try
            {
                // Implement logic to add a new invoice to the database
                var invoice = new Invoice
                {
                    InvoiceNumber = invoiceDto.InvoiceNumber,
                    IssueDate = invoiceDto.IssueDate,
                    Amount = invoiceDto.Amount,
                    IsPaid = invoiceDto.IsPaid
                    // Set other properties as needed
                };

                _dbContext.Invoices.Add(invoice);
                await _dbContext.SaveChangesAsync();

                invoiceDto.Id = invoice.Id; // Update the DTO with the generated ID
                return invoiceDto;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to add invoice", ex);
            }
        }

        public async Task<bool> UpdateInvoiceAsync(int id, InvoiceDto invoiceDto)
        {
            try
            {
                // Implement logic to update an existing invoice in the database
                var invoice = await _dbContext.Invoices.FindAsync(id);
                if (invoice == null)
                    return false; // Invoice not found

                // Update invoice properties
                invoice.InvoiceNumber = invoiceDto.InvoiceNumber;
                invoice.IssueDate = invoiceDto.IssueDate;
                invoice.Amount = invoiceDto.Amount;
                invoice.IsPaid = invoiceDto.IsPaid;

                _dbContext.Invoices.Update(invoice);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to update invoice", ex);
            }
        }

        public async Task<bool> DeleteInvoiceAsync(int id)
        {
            try
            {
                // Implement logic to delete an existing invoice from the database
                var invoice = await _dbContext.Invoices.FindAsync(id);
                if (invoice == null)
                    return false; // Invoice not found

                _dbContext.Invoices.Remove(invoice);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to delete invoice", ex);
            }
        }

        private InvoiceDto MapToInvoiceDto(Invoice invoice)
        {
            return new InvoiceDto
            {
                Id = invoice.Id,
                InvoiceNumber = invoice.InvoiceNumber,
                IssueDate = invoice.IssueDate,
                Amount = invoice.Amount,
                IsPaid = invoice.IsPaid
                // Map other properties as needed
            };
        }
    }
}
