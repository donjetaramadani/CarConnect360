using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Core.Dtos.Invoice
{
    public class InvoiceDto
    {
        public int Id { get; set; }

        [Required]
        public string InvoiceNumber { get; set; }

        [Required]
        public DateTime IssueDate { get; set; }

        [Required]
        public decimal Amount { get; set; }

        public bool IsPaid { get; set; }

        // Other properties as needed
    }
}
