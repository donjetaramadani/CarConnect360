using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Core.Dtos.Auth
{
    public class PaymentDto
    {
        public int Id { get; set; }

        [Required]
        public int CustomerId { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public DateTime PaymentDate { get; set; }

        // Additional fields can be added as required
    }
}
