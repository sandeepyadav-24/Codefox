

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import { FaYoutube } from "react-icons/fa";
import { data } from "../../../db/language";
import Navbar from "@/components/Navbar";
import { FaNoteSticky } from "react-icons/fa6";


import Summary from "./../../components/Summary"
import Test from "./../../components/Test"

const label = { inputProps: { "aria-label": "Checkbox demo" } };



const Languages = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F9F9F9] px-28 py-40">
        <div className="w-3/4">
          {data.map((chapter, chapterIndex) => (
            <Accordion className="my-3" key={chapterIndex}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${chapterIndex}-content`}
                id={`panel${chapterIndex}-header`}
              >
                <div className="flex flex-row">
                  <h3>{chapter.name}</h3>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="p-2">
                  <div className="flex flex-row">
                    <div className="w-1/12">Status</div>
                    <div className="w-7/12">Name</div>
                    <div className="w-1/12">Notes</div>
                    <div className="w-1/12">video</div>
                    <div className="w-1/12">Test</div>
                    <div className="w-1/12">Summary</div>
                  </div>
                  {chapter.videos.map((video, videoIndex) => (
                    <div
                      className="border-[#E0E0E0] border-[1px] my-2 py-3 px-2 flex flex-row"
                      key={videoIndex}
                    >
                      <div className="w-1/12">
                        <Checkbox {...label} />
                      </div>
                      <div className="w-7/12 pt-2">{video.name}</div>
                      <div className="w-1/12">
                        <FaNoteSticky className="w-8 h-8" />
                      </div>
                      <div className="w-1/12 pt-1">
                        <a href={video.link}>
                          <FaYoutube className="w-8 h-8" />
                        </a>
                      </div>
                      <div className="w-1/12">
                        <Test link = {video.link} title = {video.name} channel = "codehelp-by Babbar"/>
                        
                      </div>
                      <div className="w-1/12">
                        <Summary link = {video.link} title = {video.name} channel = "codehelp-by Babbar"/>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
