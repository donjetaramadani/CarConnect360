 using System.Collections.Generic;
 using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        // Other properties...

        public Dictionary<int, int> CartData { get; set; } = new Dictionary<int, int>();
    }
}


