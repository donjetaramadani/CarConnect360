using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Core.Dtos.Auth;

namespace backend.Core.Interfaces
{
    public interface IAppointmentService
    {
        Task<IEnumerable<AppointmentDto>> GetAllAppointmentsAsync();
        Task<AppointmentDto> GetAppointmentByIdAsync(int id);
        Task<AppointmentDto> AddAppointmentAsync(AppointmentDto appointmentDto);
        Task<AppointmentDto> UpdateAppointmentAsync(int id, AppointmentDto appointmentDto);
        Task DeleteAppointmentAsync(int id);
    }
}
