using System.Collections.Generic;
using backend.Models;

namespace backend.Models
{
    public class Category
    {

    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

        // Navigation property
        public ICollection<Accessory> Accessories { get; set; }
        public ICollection<Product> Products { get; set; }

    }
}
