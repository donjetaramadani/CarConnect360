using System;

namespace backend.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public string InvoiceNumber { get; set; }
        public DateTime IssueDate { get; set; }
        public decimal Amount { get; set; }
        public bool IsPaid { get; set; }
        // Add other properties as needed

        public Invoice()
        {
            // Provide default values for properties or initialize them in the constructor
            InvoiceNumber = string.Empty; // Example for a string property
            IssueDate = DateTime.Now; // Example for a DateTime property
        }
    }
}
