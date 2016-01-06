
//var DatePicker = function(){
module.exports = function(){

    // popup panel --------------------------------------------------------------------//
    var imageButton_cssLocator = '.input-group-addon.em-calendar';
    var calendarpopup_cssLocator = '.table-condensed-date';
    var timepopup_cssLocator = '.table-condensed-time';
    var timepickericon_cssLocator = '.time-picker-icon';
    var datepickericon_cssLocator = '.date-picker-icon';

    this.imageButton = element(by.css(imageButton_cssLocator));
    this.calendarpopup = element(by.css(calendarpopup_cssLocator));
    this.timepopup = element(by.css(timepopup_cssLocator));
    this.timepickericon = element(by.css(timepickericon_cssLocator));
    this.datepickericon = element(by.css(datepickericon_cssLocator));

    // input text field --------------------------------------------------------------------//
    var dateentryfield_cssLocator = '.form-control.em-txt-md.date-picker';
    var timeentryfield_cssLocator = '.form-control.em-txt-md-time.time-picker';

    this.dateEntryfield = element(by.css(dateentryfield_cssLocator));
    this.timeEntryfield = element(by.css(timeentryfield_cssLocator));

};

//module.exports = DatePicker();

