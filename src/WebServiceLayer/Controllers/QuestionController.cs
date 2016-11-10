﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebServiceLayer.Controllers
{
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private readonly IDataService _dataService;

        public QuestionController(IDataService dataService)
        {
            _dataService = dataService;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_dataService.GetQuestion());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            
            var question = _dataService.GetQuestion(id);
            if (question == null) return NotFound();
            return Ok(question);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
