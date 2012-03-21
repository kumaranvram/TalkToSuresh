var sendMailToSuresh = function() {
var emailDialog = Titanium.UI.createEmailDialog();
    emailDialog.setSubject('Office Facilities Complaint');
    emailDialog.setToRecipients(['skumar@thoughtworks.com']);

    if (Ti.Platform.name == 'iPhone OS') {
        emailDialog.setHtml(true);
        emailDialog.setBarColor('#336699');
    }
 
    emailDialog.setMessageBody(problemText.value);

    
    emailDialog.addEventListener('complete',function(e)
    {
        if (e.result == emailDialog.SENT)
        {
            
            // android doesn't give us useful result codes.
            // it anyway shows a toast.
            alert("Your concern has been sent to Suresh");
           
        }
        else
        {
            alert("The message was not sent.");
        }
    });
    emailDialog.open();
}