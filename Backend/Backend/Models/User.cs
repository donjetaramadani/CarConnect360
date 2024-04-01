using System.ComponentModel.DataAnnotations;

namespace CarConnect360.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string? Name { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [StringLength(100)]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        // Add more properties as needed for your user model

        // Example:
        // public string UserType { get; set; }
        // public string Gender { get; set; }
        // public string PhoneNumber { get; set; }
        // public string City { get; set; }
        // public string Country { get; set; }
    }
}
