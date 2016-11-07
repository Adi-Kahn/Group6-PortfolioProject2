﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DomainModel
{
    public class MarkedPosts
    {
        public IHttpActionResult Get(int page = 0, int pagesize = Config.DefaultPageSize)
        {
            int limit = pagesize;
            int offset = page * pagesize;
            var markedPost = _repository.GetAllMakedPosts(limit, offset).Select(mp => ModelFactory.Map(mp, Url));

            var totalMarkedPosts = _repository.GetNumberOfMarkedPosts();
            var lastpage = totalMarkedPosts / pagesize;
            var prev = page <= 0 ? null : Url.Link(Config.MarkedPostsRoute, new { page = page - 1, pagesize });
            var next = page >= lastpage ? null : Url.Link(Config.MarkedPostsRoute, new { page = page + 1, pagesize });

            var result = new
            {
                total = totalMarkedPosts,
                Prev = prev,
                Next = next,
                Data = markedPost
            };
            return Ok(result);
        }

        /* Unmark Post*/
        public IHttpActionResult Put(int id)
        {
            if (_repository.UnMarkPost(id) == false)
                return NotFound();
            return Ok();
        }
    }
}
    }
}
