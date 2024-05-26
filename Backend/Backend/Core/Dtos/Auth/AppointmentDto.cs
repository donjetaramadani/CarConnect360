using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Core.Dtos.Auth
{
    public class AppointmentDto
    {
        public int Id { get; set; }

        [Required]
        public int CustomerId { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        [Required]
        [StringLength(50)]
        public string Status { get; set; }

    }
}
