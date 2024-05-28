using backend.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Core.DbContext
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // DbSet properties for inventory system
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Invoice> Invoices { get; set; }

        public DbSet<Log> Logs { get; set; }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Config anything we want
            //1
            builder.Entity<ApplicationUser>(e =>
            {
                e.ToTable("Users");
            });
            //2
            builder.Entity<IdentityUserClaim<string>>(e =>
            {
                e.ToTable("UserClaims");
            });
            //3
            builder.Entity<IdentityUserLogin<string>>(e =>
            {
                e.ToTable("UserLogins");
            });
            //4
            builder.Entity<IdentityUserToken<string>>(e =>
            {
                e.ToTable("UserTokens");
            });
            //5
            builder.Entity<IdentityRole>(e =>
            {
                e.ToTable("Roles");
            });
            //6
            builder.Entity<IdentityRoleClaim<string>>(e =>
            {
                e.ToTable("RoleClaims");
            });
            //7
            builder.Entity<IdentityUserRole<string>>(e =>
            {
                e.ToTable("UserRoles");
            });

            // Configurations for the inventory system
            builder.Entity<Product>(e =>
            {
                e.ToTable("Products"); // Table name
                e.HasKey(p => p.Id); // Primary key
                // Add more configurations as needed
            });

            builder.Entity<Category>(e =>
            {
                e.ToTable("Categories"); // Table name
                e.HasKey(c => c.Id); // Primary key
                // Add more configurations as needed
            });

            builder.Entity<Supplier>(e =>
            {
                e.ToTable("Suppliers"); // Table name
                e.HasKey(s => s.Id); // Primary key
                // Add more configurations as needed
            });

            builder.Entity<Invoice>(e =>
            {
                e.ToTable("Invoices"); // Table name
                e.HasKey(i => i.Id); // Primary key
                e.Property(i => i.Amount)
                    .HasColumnType("decimal(18,2)"); // Specify precision and scale
                                                     // Add more configurations as needed
            });

         
        }
    }
}
