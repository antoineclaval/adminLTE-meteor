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