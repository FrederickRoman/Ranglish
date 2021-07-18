class Process {
  private processUncaughtExceptionHandler(error: Error) {
    console.log("uncaughtException: ", error);
    process.exit(1);
  }
  private processUnhandledRejection(error: Error, promise: Promise<any>) {
    console.log("unhandledRejection of promise: ", promise);
    console.log("error: ", error);
  }
  public monitor() {
    process
      .on("uncaughtException", this.processUncaughtExceptionHandler)
      .on("unhandledRejection", this.processUnhandledRejection);
  }
}

export default Process;
