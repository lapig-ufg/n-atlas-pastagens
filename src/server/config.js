const appRoot = require('app-root-path');
const env = process.env;

module.exports = function (app) {

    const appProducao = env.APP_PRODUCAO;

    let config = {
        "appRoot": appRoot,
        "clientDir": appRoot + env.CLIENT_DIR,
        "langDir": appRoot + env.LANG_DIR,
        "logDir": appRoot + env.LOG_DIR,
        "baseFilesDir": appRoot + env.PLATAFORMS_FOLDER,
        "fieldDir": appRoot + env.PLATAFORMS_FOLDER + env.FIELD_DIR,
        "uploadDir": appRoot + env.PLATAFORMS_FOLDER + env.UPLOAD_DIR,
        "downloadDir": appRoot + env.PLATAFORMS_FOLDER + env.DOWNLOAD_DIR,
        "pg_lapig": {
            "user": env.PG_USER,
            "host": env.PG_HOST,
            "database": env.PG_DATABASE_LAPIG,
            "password": env.PG_PASSWORD,
            "port": env.PG_PORT,
            "debug": env.PG_DEBUG,
            "max": 20,
            "idleTimeoutMillis": 0,
            "connectionTimeoutMillis": 0,
        },
        "pg_general": {
            "user": env.PG_USER,
            "host": env.PG_HOST,
            "database": env.PG_DATABASE_GENERAL,
            "password": env.PG_PASSWORD,
            "port": env.PG_PORT,
            "debug": env.PG_DEBUG,
            "max": 20,
            "idleTimeoutMillis": 0,
            "connectionTimeoutMillis": 0,
        },
        "port": env.PORT,
        "ows_host": env.OWS_HOST,
        "lapig-maps": env.LAPIG_MAPS
    };

    // if (env.NODE_ENV === 'prod') {
    //     config['dbpath'] = env.DB_PATH
    //     config["pg_lapig"] = {
    //         "user": env.PG_USER,
    //         "host": env.PG_HOST,
    //         "database": env.PG_DATABASE_LAPIG,
    //         "password": env.PG_PASSWORD,
    //         "port": env.PG_PORT,
    //         "debug": env.PG_DEBUG,
    //         "max": 20,
    //         "idleTimeoutMillis": 0,
    //         "connectionTimeoutMillis": 0,
    //     };
    //     config["pg_general"] = {
    //         "user": env.PG_USER,
    //         "host": env.PG_HOST,
    //         "database": env.PG_DATABASE_GENERAL,
    //         "password": env.PG_PASSWORD,
    //         "port": env.PG_PORT,
    //         "debug": env.PG_DEBUG,
    //         "max": 20,
    //         "idleTimeoutMillis": 0,
    //         "connectionTimeoutMillis": 0,
    //     };
    // }

    return config;

}