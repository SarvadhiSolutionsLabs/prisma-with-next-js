export const sendResponse = (responseCode: any, response: any, data: any) => {
  return response
    .status(responseCode)
    .send({ data: data, status: responseCode });
};

export const sendResponseMessage = (
  responseCode: any,
  response: any,
  message: any
) => {
  return response.status(responseCode).send({ message: message });
};
