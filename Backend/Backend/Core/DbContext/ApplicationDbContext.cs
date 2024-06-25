using System.Reflection.Emit;
using backend.Core.Entities;
using backend.Models;
using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend.Core.DbContext
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Existing DbSets
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<Log> Logs { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Address> Addresses { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Identity configuration
            builder.Entity<ApplicationUser>(e => e.ToTable("Users"));
            builder.Entity<IdentityUserClaim<string>>(e => e.ToTable("UserClaims"));
            builder.Entity<IdentityUserLogin<string>>(e => e.ToTable("UserLogins"));
            builder.Entity<IdentityUserToken<string>>(e => e.ToTable("UserTokens"));
            builder.Entity<IdentityRole>(e => e.ToTable("Roles"));
            builder.Entity<IdentityRoleClaim<string>>(e => e.ToTable("RoleClaims"));
            builder.Entity<IdentityUserRole<string>>(e => e.ToTable("UserRoles"));

            // Other entity configurations
            builder.Entity<Product>(e =>
            {
                e.ToTable("Products");
                e.HasKey(p => p.Id);
            });

            builder.Entity<Category>(e =>
            {
                e.ToTable("Categories");
                e.HasKey(c => c.Id);
            });

            builder.Entity<Supplier>(e =>
            {
                e.ToTable("Suppliers");
                e.HasKey(s => s.Id);
            });



            builder.Entity<Accessory>(e =>
            {
                e.ToTable("Accessories");
                e.HasKey(a => a.Id);
                e.Property(a => a.Name).IsRequired().HasMaxLength(100);
                e.Property(a => a.Description).IsRequired().HasMaxLength(500);
                e.Property(a => a.Price).IsRequired().HasColumnType("decimal(18,2)");
                e.HasOne(a => a.Category)
                    .WithMany(c => c.Accessories)
                    .HasForeignKey(a => a.CategoryId);
            });

            builder.Entity<Appointment>(e =>
            {
                e.ToTable("Appointments");
                e.HasKey(a => a.Id);
                e.Property(a => a.StartDate).IsRequired();
                e.Property(a => a.EndDate).IsRequired();
                e.Property(a => a.Status).IsRequired().HasMaxLength(50);
                e.HasOne(a => a.Customer)
                    .WithMany(c => c.Appointments) // Assuming Customer has a collection of Appointments
                    .HasForeignKey(a => a.CustomerId);
            });

            builder.Entity<Payment>(e =>
            {
                e.ToTable("Payments");
                e.HasKey(p => p.Id);
                e.Property(p => p.Amount).HasColumnType("decimal(18,2)"); // Specify precision and scale
                e.Property(p => p.PaymentDate).IsRequired();
                e.HasOne(p => p.Customer)
                    .WithMany(c => c.Payments) // Ensure Customer has a collection of Payments
                    .HasForeignKey(p => p.CustomerId);
            });

            builder.Entity<Food>(e =>
            {
                e.ToTable("Foods");
                e.HasKey(f => f.Id);
                e.Property(f => f.Name).IsRequired().HasMaxLength(100);
                e.Property(f => f.Description).IsRequired().HasMaxLength(500);
                e.Property(f => f.Price).IsRequired().HasColumnType("decimal(18,2)");
                e.Property(f => f.Image).IsRequired();
                e.Property(f => f.Category).IsRequired().HasMaxLength(100);
            });

            builder.Entity<CartItem>(e =>
            {
                e.ToTable("CartItems"); // Table name for CartItems
                e.HasKey(ci => ci.ItemName); // Primary key using ItemName
                                             // Additional configurations if needed
            });


            builder.Entity<Order>(e =>
            {
                e.ToTable("Orders");
                e.HasKey(o => o.OrderId);
                e.Property(o => o.UserId).IsRequired();
                e.Property(o => o.Amount).IsRequired().HasColumnType("decimal(18,2)");
                e.Property(o => o.Status).IsRequired().HasMaxLength(50);
                e.Property(o => o.Date).IsRequired();
                e.Property(o => o.Payment).IsRequired();
                e.HasOne(o => o.Address)
                    .WithMany() // Assuming no navigation property on Address
                    .HasForeignKey(o => o.AddressId);
            });

            builder.Entity<OrderItem>(e =>
            {
                e.ToTable("OrderItems");
                e.HasKey(oi => oi.OrderItemId);
                e.Property(oi => oi.Name).IsRequired().HasMaxLength(100);
                e.Property(oi => oi.Price).IsRequired().HasColumnType("decimal(18,2)");
                e.Property(oi => oi.Quantity).IsRequired();
            });

            builder.Entity<Address>(e =>
            {
                e.ToTable("Addresses");
                e.HasKey(a => a.AddressId);
            });
        }
    }
}
