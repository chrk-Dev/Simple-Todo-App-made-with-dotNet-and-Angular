namespace WebApplication1.Models
{
    public class Todo
    {
        public Guid id { get; set; }
        public String Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime CompletedDate { get; set; }
        public bool Iscompleted { get; set; }
    }
}
