import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendResponse, sendResponseMessage } from "../../utils/helpers";

const prisma: any = new PrismaClient();

export default async function Index(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        const record = await prisma.Emp.findMany({
          orderBy: {
            name: "desc",
          },
        });
        sendResponse(200, res, record);
        break;
      case "POST":
        prisma.Emp.create({
          data: JSON.parse(req.body),
        })
          .then((result: any) => {
            sendResponse(201, res, result);
          })
          .catch((error: any) => {
            res.status(401).send({
              status: 401,
              message: "Something went wrong!",
              error: error,
            });
          });
        break;
      case "DELETE":
        const emp = await prisma.Emp.findMany({
          orderBy: {
            name: "desc",
          },
        });
        // const deleteRecord = await prisma.Emp.delete({
        //   where: {
        //     id: `${req.query.id}`,
        //   },
        // });
        // sendResponse(200, res, deleteRecord);
        break;
      default:
        res.send({ status: 405, message: "Method Not Allowed" });
        break;
    }
  } catch (e) {
    res.send({ status: 422, message: "Unprocessable Entity" });
  }
}
