using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class CartItem
    {
        [Key]
        public string ItemName { get; set; } // Using ItemName as the primary key

        public int Quantity { get; set; }
    }
}
