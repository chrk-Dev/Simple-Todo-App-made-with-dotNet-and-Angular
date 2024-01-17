using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Writers;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class todoController : ControllerBase
    {
        private readonly TodoDbContext todoDbContext;

        public todoController(TodoDbContext todoDbContext)
        {
            this.todoDbContext = todoDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> getAllTodo()
        {
            var todos = await todoDbContext.Todos.ToListAsync();
            return Ok(todos);
        }

        [HttpPost]
        public async Task<IActionResult> AddTodo(Todo todo)
        {
            todo.id = Guid.NewGuid();
            todoDbContext.Todos.Add(todo);
            await todoDbContext.SaveChangesAsync();

            return Ok(todo);
        }


        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateTodo([FromRoute] Guid id,Todo todoUpadteRequest)
        {
            var todo = await todoDbContext.Todos.FindAsync(id);
            
            if(todo == null)
            {
                return NotFound();
            }

            todo.Iscompleted = todoUpadteRequest.Iscompleted;
            todo.CompletedDate = DateTime.Now;

            await todoDbContext.SaveChangesAsync();

            return Ok(todo);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> deleteTodo([FromRoute] Guid id)
        {
            var todo = await todoDbContext.Todos.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

            todoDbContext.Remove(todo);
            await todoDbContext.SaveChangesAsync();
            return Ok(todo);

        }
    }
}
