using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using sv_user_management.User.Domain;
using sv_user_management.User.Domain.ValueObjects;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly ISender _mediator;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, ISender mediator)
        {
            _logger = logger;
            _mediator = mediator;
            // userRepository.List();
            //
            // UserName name = new UserName("Sergio");
            // UserPassword password = new UserPassword("Password");
            // User user = sv_user_management.User.Domain.User.Create(
            //         new UserId(Guid.NewGuid()),
            //         name,
            //         password
            //     );
            //
            // userRepository.Save(user);
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                })
                .ToArray();
        }
    }
}