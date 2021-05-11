const responseHandler = (res: any, error: boolean, message: string, data: any, status = 200) => {
  if (error) {
    return res.status(status).json({
      message,
      status: false,
      data,
    });
  } else {
    return res.status(status).json({
      status: true,
      message,
      data,
    });
  }
};

export {
  responseHandler
}
