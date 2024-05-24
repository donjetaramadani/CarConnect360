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
    public class PaymentService : IPaymentService
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<PaymentService> _logger;

        public PaymentService(ApplicationDbContext context, ILogger<PaymentService> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IEnumerable<PaymentDto>> GetAllPaymentsAsync()
        {
            try
            {
                var payments = await _context.Payments.ToListAsync();
                return payments.Select(p => MapPaymentToDto(p));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting all payments.");
                throw;
            }
        }

        public async Task<PaymentDto> GetPaymentByIdAsync(int id)
        {
            try
            {
                var payment = await _context.Payments.FindAsync(id);
                return payment != null ? MapPaymentToDto(payment) : null;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while getting payment by id {id}.");
                throw;
            }
        }

        public async Task<PaymentDto> AddPaymentAsync(PaymentDto paymentDto)
        {
            try
            {
                var payment = new Payment
                {
                    CustomerId = paymentDto.CustomerId,
                    Amount = paymentDto.Amount,
                    PaymentDate = paymentDto.PaymentDate,
                    // Add additional fields as needed
                };

                _context.Payments.Add(payment);
                await _context.SaveChangesAsync();

                return MapPaymentToDto(payment);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while adding a new payment.");
                throw;
            }
        }

        public async Task<PaymentDto> UpdatePaymentAsync(int id, PaymentDto paymentDto)
        {
            try
            {
                var payment = await _context.Payments.FindAsync(id);
                if (payment == null)
                    throw new InvalidOperationException("Payment not found");

                payment.CustomerId = paymentDto.CustomerId;
                payment.Amount = paymentDto.Amount;
                payment.PaymentDate = paymentDto.PaymentDate;
                // Update additional fields as needed

                await _context.SaveChangesAsync();

                return MapPaymentToDto(payment);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while updating payment with id {id}.");
                throw;
            }
        }

        public async Task DeletePaymentAsync(int id)
        {
            try
            {
                var payment = await _context.Payments.FindAsync(id);
                if (payment == null)
                    throw new InvalidOperationException("Payment not found");

                _context.Payments.Remove(payment);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error occurred while deleting payment with id {id}.");
                throw;
            }
        }

        private PaymentDto MapPaymentToDto(Payment payment)
        {
            return new PaymentDto
            {
                Id = payment.Id,
                CustomerId = payment.CustomerId,
                Amount = payment.Amount,
                PaymentDate = payment.PaymentDate,
                // Map additional fields as needed
            };
        }
    }
}
