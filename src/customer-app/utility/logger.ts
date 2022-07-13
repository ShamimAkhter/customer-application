
export interface ILogger {
    log(): any;
}

export class BaseLogger implements ILogger {
    log() {}
}

export class ConsoleLogger implements BaseLogger {
    log() {
        console.log('Using console logger');
    }
}

export class DbLogger implements BaseLogger {
    log() {
        console.log('Using Db logger');
    }
}

export class FileLogger implements BaseLogger {
    log() {
        console.log('Using File logger');
    }
}

