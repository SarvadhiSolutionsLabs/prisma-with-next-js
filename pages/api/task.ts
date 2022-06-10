import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendResponse, sendResponseMessage } from "../../utils/helpers";

const prisma: any = new PrismaClient();

export default async function Index(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        const record = await prisma.Task.findMany({
          select: {
            id: true,
            title: true,
            Emp: {
              select: {
                id: true,
                name: true,
                language: true,
              },
            },
          },
          //   include: {
          //     Emp: true,
          //   },
        });
        sendResponse(200, res, record);
        break;
      case "POST":
        prisma.Task.create({
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
        const deleteRecord = await prisma.Task.delete({
          where: {
            id: `${req.query.id}`,
          },
        });
        sendResponse(200, res, deleteRecord);
        break;
      default:
        res.send({ status: 405, message: "Method Not Allowed" });
        break;
    }
  } catch (e) {
    res.send({ status: 422, message: "Unprocessable Entity" });
  }
}
