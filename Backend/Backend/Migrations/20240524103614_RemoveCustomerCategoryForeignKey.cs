using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RemoveCustomerCategoryForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Categories_CategoryId",
                table: "Customers");

            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Suppliers_SupplierId",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_CategoryId",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_SupplierId",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "SupplierId",
                table: "Customers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SupplierId",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Customers_CategoryId",
                table: "Customers",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_SupplierId",
                table: "Customers",
                column: "SupplierId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Categories_CategoryId",
                table: "Customers",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Suppliers_SupplierId",
                table: "Customers",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
