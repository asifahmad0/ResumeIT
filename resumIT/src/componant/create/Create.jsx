import React, { useState } from "react";
import { PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "../ui/dialog";

function Create() {


  const [openDialog, setDialog]=useState(false)



  return (
    <div className="">
      <div
        className="w-[250px] h-[300px] p-14 py-24 bg-gray-100 border rounded-lg items-center flex items-center justify-center
      hover:scale-105 transition-all hover:shadow-mds"
      onClick={()=>setDialog(true)}
      >
          <PlusSquare className="cursor-pointer" />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <div className="flex gap-4">
              <Button className="bg-green-800 text-white cursor-pointer">Create</Button>
              <Button variant='outline' className="cursor-pointer">Cancel</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Create;
