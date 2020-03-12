using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace client_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CAuthController : ControllerBase
    {
        // POST: api/CAuth
        [HttpPost]
        public IActionResult Post()
        {
            var a = new ContentResult
            {
                StatusCode = 301,
                Content = "http://localhost:4200/#/"
            };
            return a;
        }

        [HttpGet("{code}")]
        public IActionResult Get(string code)
        {
            return Ok(string.Format("{0}+++", code));
        }
    }
}
