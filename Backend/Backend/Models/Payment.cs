using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime PaymentDate { get; set; }

        // Foreign key to associate payment with a customer
        [ForeignKey("Customer")]
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}