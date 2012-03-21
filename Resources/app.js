Ti.include('sendmail.js');
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Problem',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#555',
	text:'What is wrong where?',
	font:{fontSize:16,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto',
	top: '20px',
	height: '20px'
});

var problemText  = Titanium.UI.createTextArea({
    value : '',
    height : 320,
    width : 300,
    top : 50,
    font : {fontSize: 14 },
    color : '#333',
    textAlign : 'left',
    returnKeyType : Titanium.UI.DONE,
    borderWidth : 2,
    borderColor : '#bbb',
    borderRadius : 5
});

var submitButton = Titanium.UI.createButton ({
	height: 40,
	width: 200,
	top: 400,
	left: 62,
	title: 'Tell Suresh!'
});

win1.add(label1);
win1.add(problemText);
win1.add(submitButton);
//tabGroup.addTab(tab1);  

submitButton.addEventListener('click', sendMailToSuresh);
  
win1.open();
//tabGroup.open();
