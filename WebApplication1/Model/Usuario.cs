using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class Usuario
    {
        public int Id { get; set; }
        public DateTime data { get; set; }
        public string Nome { get; set; }
        public string email { get; set; }
        public string user { get; set; }
        public string senha { get; set; }
    }
}
