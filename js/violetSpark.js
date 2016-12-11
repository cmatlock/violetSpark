$(document)

.foundation()

// field element is invalid
.on("invalid.zf.abide", function(ev,elem) {
	console.log("Field id "+ev.target.id+" is invalid");
})
// field element is valid
.on("valid.zf.abide", function(ev,elem) {
	console.log("Field id "+ev.target.id+" is valid");
})
// form validation failed
.on("forminvalid.zf.abide", function(ev,frm) {
	console.log("Form id "+ev.target.id+" is invalid");
})
// form validation passed, form will submit if submit event not returned false
.on("formvalid.zf.abide", function(ev,frm) {
	console.log("Form id "+frm.attr('id')+" is valid");
// ajax post form 
})
// to prevent form from submitting upon successful validation
.on("submit", function(ev) {
	ev.preventDefault();
	console.log("Submit for form id "+ev.target.id+" intercepted");
	$("#send-email-success")[0].style.cssText = "display: block;"
});