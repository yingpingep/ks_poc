using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_back.Models;

namespace server_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody]AuthObj value)
        {
            var a = new JsonResult(new RedirectObj() { RedirectTo = $"http://localhost:4201/#/ready/{value.Account}" });
            return a;
        }
    }
}