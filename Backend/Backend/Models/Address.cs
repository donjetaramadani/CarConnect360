using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Street { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string Zipcode { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string Phone { get; set; }
    }

}
