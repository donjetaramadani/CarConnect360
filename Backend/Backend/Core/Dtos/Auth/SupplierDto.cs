using System.ComponentModel.DataAnnotations;

namespace backend.Core.Dtos.Auth
{
    public class SupplierDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ContactInformation { get; set; }
    }
}
