using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [Column(TypeName = "decimal(18, 2)")] 
        public decimal Price { get; set; }

        public int Quantity { get; set; }
        public int CategoryId { get; set; }
        public int SupplierId { get; set; }

        // Navigation properties
        [ForeignKey("CategoryId")]
        public Category Category { get; set; }

        [ForeignKey("SupplierId")]
        public Supplier Supplier { get; set; }

    }
}
