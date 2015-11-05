console.log("router.js");

Router.route('/', function () {
  this.render('dashboard1');
  this.layout('generalLayout');
  document.title = "AdminLTE | Dashboard V1";
});

Router.route('/dashboard1', function () {
  this.render('dashboard1');
  this.layout('generalLayout');
  document.title = "AdminLTE | Dashboard V1";
});

Router.route('/dashboard2', function () {
  this.render('dashboard2');
  this.layout('generalLayout');
  document.title = "AdminLTE | Dashboard V2";
});

Router.route('/widget', function () {
  this.render('widget');
  this.layout('generalLayout');
  document.title = "AdminLTE | Widget";
});

Router.route('/ui/buttons', function () {
  this.render('buttonsPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | UI Buttons";
});

Router.route('/ui/general', function () {
  this.render('generalPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | UI General";
});

Router.route('/ui/icons', function () {
  this.render('iconsPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | UI Icons";
});

Router.route('/ui/modals', function () {
  this.render('modalsPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | UI Modals";
});

Router.route('/ui/sliders', function () {
  this.render('slidersPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | UI Sliders";
});

Router.route('/ui/timeline', function () {
  this.render('timelinePage');
  this.layout('generalLayout');
  document.title = "AdminLTE | UI Timeline";
});

Router.route('/mailbox/compose', function () {
  this.render('composePage');
  this.layout('generalLayout');
  document.title = "AdminLTE | Compose Mail";
});

Router.route('/mailbox/inbox', function () {
  this.render('mailboxPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | Mailbox";
});

Router.route('/mailbox/readmail', function () {
  this.render('readMailPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | Mailbox";
});

Router.route('/calendar', function () {
  this.render('calendarPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | Calendar";
});

Router.route('/tables/simple', function () {
  this.render('simpleDataTablePage');
  this.layout('generalLayout');
  document.title = "AdminLTE | Simple Data table";
});

Router.route('/tables/data', function () {
  this.render('dataTablesPage');
  this.layout('generalLayout');
  document.title = "AdminLTE | Data table";
});

/* Have to be last to catch all no defined URL */
Router.route('/(.*)', function () {
  this.render('404');
  this.layout('generalLayout');
  document.title = "AdminLTE | Page not found";
});