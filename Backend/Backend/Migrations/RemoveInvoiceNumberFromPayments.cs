using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class RemoveInvoiceNumberFromPayments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "InvoiceNumber",
                table: "Payments");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "InvoiceNumber",
                table: "Payments",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
