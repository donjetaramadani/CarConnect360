using backend.Core.Constants;
using backend.Core.Dtos.Log;
using backend.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogsController : ControllerBase
    {

        private readonly ILogServices _logServices;

        public LogsController(ILogServices logService)
        {
            _logServices = logService;
        }

        [HttpGet]
        [Authorize(Roles = StaticUserRole.OwnerAdmin)]
        public async Task<ActionResult<IEnumerable<GetLogDto>>> GetLogs()
        {
            var logs = await _logServices.GetLogsAsync();
            return Ok(logs);
        }

        [HttpGet]
        [Route("mine")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<GetLogDto>>> GetMyLogs()
        {
            var logs = await _logServices.GetMyLogsAsync(User);
            return Ok(logs);
        }
    }
}
