using System.ComponentModel.DataAnnotations;

namespace backend.Core.Dtos.Auth
{
    public class CustomerDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 2)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string PhoneNumber { get; set; }

        [Required]
        [StringLength(200)]
        public string Address { get; set; }

        // Additional fields can be added as required
    }
}
