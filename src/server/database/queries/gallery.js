module.exports = function (app) {

    var Internal = {}
    var Query = {};

    Query.defaultParams = {}


    // Query.largest = function (params) {

    // const colums = "id, cobertura, obs, data, periodo, horario, altura, homoge, invasoras, gado, qtd_cupins, forrageira, solo_exp";
    // const sqlQuery = "SELECT ST_AsGeoJSON(geom) geojson," + colums + " FROM pontos_campo_parada" + condition;


    //     var amount = params['amount'];
    //     var msfilter = params['msfilter']

    //     var condition = '';
    //     if (msfilter) {
    //         condition = ' WHERE ' + msfilter;
    //     }

    //     return [{
    //         source: 'lapig',
    //         id: 'pontos_campo_parada',
    //         sql: "SELECT id, cobertura, obs, data, periodo, horario, altura, homoge, invasoras, gado, qtd_cupins, forrageira, solo_exp "
    //             + " FROM pontos_campo_parada" + condition,
    //         mantain: true
    //     },
    //     {
    //         source: 'general',
    //         id: 'teste',
    //         sql: "SELECT * from regions_geom  LIMIT ${amount}",
    //         mantain: true
    //     }
    //     ]
    // }



    return Query;

}