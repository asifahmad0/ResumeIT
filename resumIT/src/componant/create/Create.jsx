import React, { useState } from "react";
import { Pencil, PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
  Textarea,
} from "../ui/dialog";

function Create() {
  const [openDialog, setDialog] = useState(false);
  const [ResumeTitle, setResumeTitle] = useState();
  const [hovered, setHovered] = useState(false);
  const boxes = Array.from({ length: 3 });

  function addResume() {
    console.log(ResumeTitle);
    setDialog(false);
  }

  return (
    <div className="gap-4 w-full px-4 py-4 grid grid-cols-1 place-items-center md:grid-cols-4">
      <div
        className="min-w-[250px] min-h-[300px] md:-mt-6 p-14 py-24 bg-gray-100 border rounded-lg items-center flex items-center justify-center
      hover:scale-105 transition-all hover:shadow-mds"
        onClick={() => setDialog(true)}
      >
        <PlusSquare className="cursor-pointer" />
      </div>

      {boxes.map((_, index) => (
        <div className=" flex flex-col items-center">
          <div
            key={index}
            className=" min-w-[250px] min-h-[300px] bg-gray-100 border rounded-lg items-center flex items-center justify-center hover:scale-105 transition-all hover:shadow-mds"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered && (
              <span className="icon">
                <Pencil className="cursor-pointer" />
              </span>
            )}
          </div>
          <h1 className="mt-2">{ResumeTitle}</h1>
        </div>
      ))}

      {/*-----------------------------create Resume Dialog box code ----------------*/}

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Create New Resume</DialogTitle>
            <DialogDescription>
              <Input
                onChange={(e) => setResumeTitle(e.target.value)}
                placeholder="Ex- Accounting Resume"
              />
            </DialogDescription>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={!ResumeTitle}
                onClick={() => addResume()}
                className="bg-green-800 text-white cursor-pointer"
              >
                Create
              </Button>
              <Button
                variant="outline"
                onClick={() => setDialog(false)}
                className="cursor-pointer"
              >
                Cancel
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Create;
