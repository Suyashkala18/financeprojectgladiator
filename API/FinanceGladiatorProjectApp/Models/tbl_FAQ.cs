//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FinanceGladiatorProjectApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_FAQ
    {
        public int Faq_Id { get; set; }
        public Nullable<int> Product_Id { get; set; }
        public string Questions { get; set; }
    
        public virtual tbl_Product tbl_Product { get; set; }
    }
}