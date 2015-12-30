
//var DatePicker = function(){
module.exports = function(){

    // popup panel --------------------------------------------------------------------//

    var imageButton1_Xpath = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker1']" +
        "/span[@class='input-group-addon em-calendar']";

    var calendarpopup1_xpath = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker1']" +
        "/div[@class='jcalendar_parent default em-calendar-pop']";

    var imageButton2_Xpath = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker2']" +
        "/span[@class='input-group-addon em-calendar']";

    var calendarpopup2_xpath = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker2']" +
        "/div[@class='jcalendar_parent default em-calendar-pop']";

    var imageButton3_Xpath = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker3']" +
        "/span[@class='input-group-addon em-calendar']";

    var timePopup_xpath = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker3']" +
        "/div[@class='jcalendar_parent default em-calendar-pop']";

    this.imageButton1 = element(by.xpath(imageButton1_Xpath));
    this.calendarpopup1 = element(by.xpath(calendarpopup1_xpath));
    this.imageButton2 = element(by.xpath(imageButton2_Xpath));
    this.calendarpopup2 = element(by.xpath(calendarpopup2_xpath));
    this.imageButton3 = element(by.xpath(imageButton3_Xpath));
    this.timepopup = element(by.xpath(timePopup_xpath));

    // input text field --------------------------------------------------------------------//


    var dateentryfield_Xpath1 = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker1']" +
        "/input[@class='form-control em-txt-md  date-picker']";

    var timeentryfield_Xpath1 = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker1']" +
        "/input[@class='form-control em-txt-md-time time-picker']";

    var dateentryfield_Xpath2 = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker2']" +
        "/input[@class='form-control em-txt-md  date-picker']";

    var timeentryfield_Xpath2 = "/html/body/div[@id='page-container']/div[@class='container ng-scope']" +
        "/div[@class='row']/div[@class='controls-listing col-md-9']/section[@id='sidenav-date-picker']" +
        "/div[@id='button-sizes']/div[@class='demo-example'][1]/div[@id='datetimepicker3']" +
        "/input[@class='form-control em-txt-md-time time-picker']";

    this.dateEntryfield1 = element(by.xpath(dateentryfield_Xpath1));
    this.timeEntryfield1 = element(by.xpath(timeentryfield_Xpath1));
    this.dateEntryfield2 = element(by.xpath(dateentryfield_Xpath2));
    this.timeEntryfield2 = element(by.xpath(timeentryfield_Xpath2));

};

//module.exports = DatePicker();

