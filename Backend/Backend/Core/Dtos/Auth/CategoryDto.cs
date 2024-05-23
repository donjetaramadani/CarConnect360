using System.ComponentModel.DataAnnotations;

namespace backend.Core.Dtos.Auth
{
    public class CategoryDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
