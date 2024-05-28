using System.Collections.Generic;

namespace backend.Models
{
    public class Supplier
    {
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? ContactInformation { get; set; }

        // Navigation property
        public ICollection<Product> Products { get; set; }

    }
}
