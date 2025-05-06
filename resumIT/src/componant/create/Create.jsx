import React, { useEffect, useState } from "react";
import { Loader2, Pencil, PlusSquare } from "lucide-react";
import { data, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

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
import Allapi from "../../../services/Allapi";
import { useUser } from "@clerk/clerk-react";

function Create() {
  const [openDialog, setDialog] = useState(false);
  const [ResumeTitle, setResumeTitle] = useState([]);
  const [ResumeData, setResumeData] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [isloading, setloding]=useState(false);
  const {user}=useUser()
  //const boxes = Array.from({ length: 3 });


    const onCreate = async () => {

      setloding(true)
      const uid = uuidv4();

      const dataa = {
        dataa:{
          title: ResumeTitle,
          Resume_id: uid,
          email: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
        }
      };
      Allapi.CreateNewResume(dataa).then((resp)=>{
        console.log( resp)
        if(resp){
          setDialog(false);
          
        }
        
      }, (error)=>{
        setloding(false)
      })
    }
    
    useEffect(()=>{
      async function showResume() {
        
        try{
          const apiData = await axios.get("http://localhost:8000/api/resume/")
          console.log([apiData.data])
      setResumeData(apiData.data)

        }catch(error){
          console.log(error)
        }
      }
      showResume()
    },[])
  



  return (
    <div className="gap-4 w-full px-4 py-4 grid grid-cols-1 place-items-center md:grid-cols-5">
      <div
        className="min-w-[250px] min-h-[300px] md:-mt-6 p-14 py-24 bg-gray-100 border rounded-lg items-center flex items-center justify-center
      hover:scale-105 transition-all hover:shadow-mds"
        onClick={() => setDialog(true)}
      >
        <PlusSquare className="cursor-pointer"/>
      </div>

        {
          ResumeData.map((ResumeData,id)=>{
            return (
              <div className=" flex flex-col items-center" id={ResumeData.resume_id} >
          <div className=" min-w-[250px] min-h-[300px] bg-gray-100 border rounded-lg items-center flex items-center justify-center hover:scale-105 transition-all hover:shadow-mds"
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            
            {hovered && (<span className="icon">

                <Pencil className="cursor-pointer" />
              </span>
            )}

          </div>
          <h1 className="mt-2">{ResumeData.title}</h1>
        </div>
            )
          })
        }





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
                disabled={!ResumeTitle || isloading}
                onClick={() =>{ onCreate()}}
                className="bg-green-800 text-white cursor-pointer"
              >
                {
                  isloading ? <Loader2 className="animate-spin" /> : "Create"
                }
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
