using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    namespace backend.Models
    {
        public class Accessory
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
            public int CategoryId { get; set; }
            public Category Category { get; set; }
        }
    }

}
