using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Core.Dtos.Auth; 
using backend.Core.Interfaces;


namespace backend.Controllers
    {
        [ApiController]
        [Route("api/[controller]")]
        public class ProductController : ControllerBase
        {
            private readonly IProductService _productService;

            public ProductController(IProductService productService)
            {
                _productService = productService;
            }

            [HttpPost]
            public async Task<IActionResult> AddProduct(ProductDto productDto)
            {
                try
                {
                    var result = await _productService.AddProductAsync(productDto);
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }

            [HttpGet]
            public async Task<IActionResult> GetAllProducts()
            {
                try
                {
                    var products = await _productService.GetAllProductsAsync();
                    return Ok(products);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }

            [HttpGet("{id}")]
            public async Task<IActionResult> GetProductById(int id)
            {
                try
                {
                    var product = await _productService.GetProductByIdAsync(id);
                    if (product == null)
                    {
                        return NotFound();
                    }
                    return Ok(product);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateProduct(int id, ProductDto productDto)
            {
                try
                {
                    var result = await _productService.UpdateProductAsync(id, productDto);
                    if (result == null)
                    {
                        return NotFound();
                    }
                    return Ok(result);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }

            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteProduct(int id)
            {
                try
                {
                    await _productService.DeleteProductAsync(id);
                    return NoContent();
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }
   
    }
}
