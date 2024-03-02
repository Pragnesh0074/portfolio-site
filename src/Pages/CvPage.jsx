import React from "react";
import pdf from "../assets/resume.pdf"



export default function CvPage() {
    return (
        <div className="flex justify-center mx-20">
            <iframe src={pdf} width="100%" height="1300vh" title="CV"/>
        </div>
    );
}