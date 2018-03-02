import { Router } from "express";
import Table from "../table";

let router = Router();
let table = new Table("users");

router.get("/:id", (req, res) => {  //request comes in as userid
    table.getMenteeProfile(req.params.id)
      .then(results => {        //results send back mentee profile info
        res.json(results);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });

router.put('/:id', (req, res) => {    //updates mentee bio and location
    table.updateMenteeProfile(req.params.id, req.body.bio, req.body.location)
  .then((results) => {
      res.json(results);
  }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
  });
});

export default router;