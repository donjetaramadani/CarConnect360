using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        // Foreign key to Customer table
        public int CustomerId { get; set; }

        // Navigation property to Customer entity
        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }

        // You can adjust these properties to match your requirements
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }
        // Add additional fields as needed
    }
}
