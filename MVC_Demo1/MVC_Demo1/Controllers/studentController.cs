using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC_Demo1.Models;

namespace MVC_Demo1.Controllers
{
    public class studentController : Controller
    {
        // GET: student
        public ActionResult Index()
        {
           
            return View();
        }

        public ActionResult StudentDetails()
        {
             var student = new student();
   
            student.stuID =120;
            student.name = "Abc";
            student.contact ="121316";
            return View(student);
        }
    }
}