using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1
{
    public class UsuarioContext: DbContext
    {
        public UsuarioContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>().HasKey(t => t.Id);
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<WebApplication1.Model.Usuario> Usuario { get; set; }
    }
}
