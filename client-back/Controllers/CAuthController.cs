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
        [HttpGet]
        public IActionResult Get()
        {
            return Redirect("http://localhost:4200/#/");
        }

        [HttpGet("{code}")]
        public IActionResult GetCode(string code)
        {
            return Ok(string.Format("{0}+++", code));
        }
    }
}
