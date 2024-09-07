class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  public log(message: string): void {
    const timeStamp = new Date();
    console.log(`[${timeStamp.toLocaleString()}] - ${message}`);
  }
}

const loggerOne = Logger.getInstance();
loggerOne.log('first message');

const loggerTwo = Logger.getInstance();
loggerTwo.log('second message');
