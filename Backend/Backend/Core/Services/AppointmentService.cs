using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Core.DbContext;
using backend.Core.Dtos.Auth;
using backend.Core.Entities;
using backend.Core.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backend.Services
{
    public class AppointmentService : IAppointmentService
    {
            private readonly ApplicationDbContext _context;
            private readonly ILogger<AppointmentService> _logger;

            public AppointmentService(ApplicationDbContext context, ILogger<AppointmentService> logger)
            {
                _context = context;
                _logger = logger;
            }

            public async Task<IEnumerable<AppointmentDto>> GetAllAppointmentsAsync()
            {
                try
                {
                    var appointments = await _context.Appointments.ToListAsync();
                    return appointments.Select(a => MapAppointmentToDto(a));
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error occurred while getting all appointments.");
                    throw;
                }
            }

            public async Task<AppointmentDto> GetAppointmentByIdAsync(int id)
            {
                try
                {
                    var appointment = await _context.Appointments.FindAsync(id);
                    return appointment != null ? MapAppointmentToDto(appointment) : null;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error occurred while getting appointment by id {id}.");
                    throw;
                }
            }

            public async Task<AppointmentDto> AddAppointmentAsync(AppointmentDto appointmentDto)
            {
                try
                {
                    var appointment = new Appointment
                    {
                        CustomerId = appointmentDto.CustomerId,
                        StartDate = appointmentDto.StartDate,
                        EndDate = appointmentDto.EndDate,
                        Status = appointmentDto.Status,
                    };

                    _context.Appointments.Add(appointment);
                    await _context.SaveChangesAsync();

                    return MapAppointmentToDto(appointment);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error occurred while adding a new appointment.");
                    throw;
                }
            }

            public async Task<AppointmentDto> UpdateAppointmentAsync(int id, AppointmentDto appointmentDto)
            {
                try
                {
                    var appointment = await _context.Appointments.FindAsync(id);
                    if (appointment == null)
                        throw new InvalidOperationException("Appointment not found");

                    appointment.CustomerId = appointmentDto.CustomerId;
                    appointment.StartDate = appointmentDto.StartDate;
                    appointment.EndDate = appointmentDto.EndDate;
                    appointment.Status = appointmentDto.Status;

                    await _context.SaveChangesAsync();

                    return MapAppointmentToDto(appointment);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error occurred while updating appointment with id {id}.");
                    throw;
                }
            }

            public async Task DeleteAppointmentAsync(int id)
            {
                try
                {
                    var appointment = await _context.Appointments.FindAsync(id);
                    if (appointment == null)
                        throw new InvalidOperationException("Appointment not found");

                    _context.Appointments.Remove(appointment);
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"Error occurred while deleting appointment with id {id}.");
                    throw;
                }
            }

            private AppointmentDto MapAppointmentToDto(Appointment appointment)
            {
                return new AppointmentDto
                {
                    Id = appointment.Id,
                    CustomerId = appointment.CustomerId,
                    StartDate = appointment.StartDate,
                    EndDate = appointment.EndDate,
                    Status = appointment.Status,
                };
            }
        }
}
