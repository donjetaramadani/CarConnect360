using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public string UserId { get; set; }
        public List<OrderItem> Items { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }

        public int AddressId { get; set; }
        public Address Address { get; set; }
        public string Status { get; set; } = "Processing";
        public DateTime Date { get; set; } = DateTime.Now;
        public bool Payment { get; set; } = false;
    }

    public class OrderItem
    {
        [Key]
        public int OrderItemId { get; set; }
        public string Name { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        public int Quantity { get; set; }
    }
}
