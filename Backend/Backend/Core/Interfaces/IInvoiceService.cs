using backend.Core.Dtos.Invoice;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Core.Interfaces
{
    public interface IInvoiceService
    {
        Task<List<InvoiceDto>> GetAllInvoicesAsync();
        Task<InvoiceDto> GetInvoiceByIdAsync(int id);
        Task<InvoiceDto> AddInvoiceAsync(InvoiceDto invoiceDto);
        Task<bool> UpdateInvoiceAsync(int id, InvoiceDto invoiceDto);
        Task<bool> DeleteInvoiceAsync(int id);
    }
}
