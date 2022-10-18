import axios from "axios";

export default function fetchDetail(id) {
  if (id === "1" || id === "2") {
    return new Promise((res, rej) => {
      res({
        message: `This is the data for ${id}`,
      });
    });
  } else {
    throw new Error("This was the error");
  }
}
