// Copyright (c) 2023, NEW INDIA and contributors
// For license information, please see license.txt

frappe.ui.form.on('Members', {
    validate: function(frm) {

        // validate photo at runtime

        // if (!frm.doc.photo) {
        //     frappe.msgprint("Please upload a photo");
        //     frappe.validated = false;
        // } else {
        //     var path = frm.doc.photo.split('.');
        //     var pathFormat = path[path.length - 1].toLowerCase();
        //     var allowedFormats = ['jpg', 'jpeg', 'pdf', 'png'];

        //     if (!allowedFormats.includes(pathFormat)) {
        //         frappe.msgprint("Enter a valid format including (jpg, jpeg, pdf, png) only");
        //         frappe.validated = false;
        //     }
        // }



    }
});

