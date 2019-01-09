using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC_Demo1.Models;

namespace MVC_Demo1.Controllers
{
    public class employeeController : Controller
    {
        // GET: employee
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Edetails()
        {
            var employee = new employee();
            employee.empcontact = "683265";
            employee.empid = 121;
            employee.empname = "asdf";
            return View(employee);
        }

        public ActionResult HTML()
        {

            return View();
        }

        public ActionResult EmpInfoHTML()
        {

            return View();
        }

        public ActionResult Math() {
            return View();
        }
    }
}