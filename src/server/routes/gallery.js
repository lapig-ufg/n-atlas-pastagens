module.exports = function (app) {

    var dataInjector = app.middleware.dataInjector;
    var controllers = app.controllers.gallery;

    app.get('/service/gallery/field/', controllers.field);
    app.get('/service/gallery/field/:category/:tablename/:id/:filename', controllers.fieldData);


}