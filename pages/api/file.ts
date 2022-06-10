const formidable = require("formidable");
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendResponse, sendResponseMessage } from "../../utils/helpers";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function Index(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "POST":
        const form = new formidable.IncomingForm();
        form.parse(req, async function (err: any, fields: any, files: any) {
          const file = await saveFile(files.file);
          sendResponse(201, res, { file: file });
        });
        break;
      default:
        res.send({ status: 405, message: "Method Not Allowed" });
        break;
    }
  } catch (e) {
    res.send({ status: 422, message: "Unprocessable Entity" });
  }
}
const saveFile = async (file: any) => {
  const data = fs.readFileSync(file.filepath);
  const fileName = `${Math.random().toString(16).slice(2)}.${
    file.originalFilename.split(".")[1]
  }`;
  fs.writeFileSync(`./public/static/images/${fileName}`, data);
  await fs.unlinkSync(file.filepath);
  return fileName;
};
