
const fs = require('fs')
const path = require('path')

module.exports = function (app) {


  var Controller = {}
  var Internal = {}

  Internal.getFiles = function (path) {
    if (fs.existsSync(path)) {
      return fs.readdirSync(path);
    } else {
      return [];
    }
  };

  Internal.fieldFiles = function (id, tablename) {
    // var fotosCamera = app.config.fieldDataDir + '/fotos_camera/' + id
    const fotosCamera = app.config.fieldDir + "fotos_camera/" + tablename + "/" + id;
    const fotosDrone = app.config.fieldDir + "fotos_drone/" + tablename + "/" + id;
    const videosDrone = app.config.fieldDir + "videos_drone/" + tablename + "/" + id;

    return {
      videos_drone: Internal.getFiles(videosDrone),
      fotos_drone: Internal.getFiles(fotosDrone),
      fotos_camera: Internal.getFiles(fotosCamera)
    };
  };

  Controller.fieldData = function (request, response) {

    // console.log(request)

    const { id, category, filename, tablename } = request.params;

    const filepath = app.config.fieldDir + "/" + category + "/" + tablename + "/" + id + "/" + filename;
    // const filepath = app.config.fieldDir + "/" + category + "/" + tablename + "/" + 1 + "/" + filename;

    response.sendFile(filepath);
  };

  Controller.field = function (request, response) {

    const { id, tablename } = request.query;

    const files = Internal.fieldFiles(id, tablename);
    // const files = Internal.fieldFiles(1, tablename);

    response.send(files);
    response.end();

  }


  return Controller;

}