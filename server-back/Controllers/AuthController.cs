using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace server_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post()
        {
            using (var reader = new StreamReader(Request.Body))
            {
                var body = Task.Run(reader.ReadToEndAsync).Result;
                var a = new ContentResult
                {
                    StatusCode = 301,
                    Content = $"http://localhost:4201/#/ready/{body}"
                };
                return a;
            }            
        }
    }
}