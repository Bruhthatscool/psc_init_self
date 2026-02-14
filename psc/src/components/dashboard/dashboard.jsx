import { ExamTile } from "./exam-tile";
import { PscExamTile } from "./psc-exam-tile";
import { NewsTicker } from "./news-ticker";
import kpscLogo from "@/assets/kpsclogo.jpg";
import { useState } from "react";
import Grainient from "../Grainient";

export function Dashboard() {
  const [selectedLevel, setSelectedLevel] = useState("10");

  const upcomingExams = [
    {
      title: "Lower Division Clerk (LDC)",
      lastDate: "20 March 2026",
      status: "Open",
    },
    {
      title: "Assistant Professor",
      lastDate: "15 April 2026",
      status: "Closed",
    },
    {
      title: "Police Constable",
      lastDate: "02 May 2026",
      status: "Open",
    },
    {
      title: "Senior Clerk",
      lastDate: "10 June 2026",
      status: "Result Published",
    },
    {
      title: "Village Field Assistant",
      lastDate: "25 July 2026",
      status: "Open",
    },
    {
      title: "Tax Auditor",
      lastDate: "30 August 2026",
      status: "Closed",
    },
  ];

  const examsByLevel = {
    10: [
      { title: "Lower Division Clerk (LDC)", examId: "ldc" },
      { title: "Last Grade Servants (LGS)", examId: null },
      { title: "Village Field Assistant (VFA)", examId: null },
      { title: "Police Constable", examId: null },
      { title: "Assistant Prison Officer", examId: null },
      { title: "Typist Grade II / Data Entry Operator", examId: null },
      { title: "Office Attendant / Peon / Watchman", examId: null },
      { title: "Laboratory Attender", examId: null },
    ],
    12: [
      {
        title: "Civil Police Officer / Women Civil Police Officer",
        examId: null,
      },
      { title: "Beat Forest Officer", examId: null },
      { title: "Fireman / Firewoman", examId: null },
      { title: "Civil Excise Officer", examId: null },
      { title: "Office Assistant", examId: null },
      { title: "Computer Assistant Grade II", examId: null },
    ],
    degree: [
      { title: "University Assistant", examId: null },
      {
        title: "Secretariat / Kerala Administrative Tribunal (KAT) Assistant",
        examId: null,
      },
      { title: "Sub Inspector of Police (SI)", examId: null },
      { title: "Excise Inspector", examId: null },
      { title: "Company / Board / Corporation Assistant", examId: null },
      { title: "Assistant Jailor", examId: null },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Animated Grainient Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Grainient
          color1="#a4f9d8"
          color2="#8de1f2"
          color3="#d6ffc7"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="bg-card/60 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side - Title */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  KERALA PUBLIC SERVICE COMMISSION
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
                  കേരള പബ്ലിക് സർവീസ് കമ്മീഷൻ
                </p>
              </div>

              {/* Right Side - Logo */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={kpscLogo}
                  alt="KPSC Logo"
                  className="h-24 md:h-32 object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* News Ticker */}
          <NewsTicker />
          <br />
          <br />
          <br />
          <br />

          {/* Exams Grid */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Upcoming Exams
              </h2>
              <p className="text-muted-foreground">
                Browse all active examinations and important dates
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingExams.map((exam, index) => (
                <ExamTile
                  key={index}
                  title={exam.title}
                  lastDate={exam.lastDate}
                  status={exam.status}
                />
              ))}
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          {/* PSC Examinations Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                PSC Examinations
              </h2>
              <p className="text-muted-foreground">
                Explore exams by educational qualification level
              </p>
            </div>

            {/* Level Tabs */}
            <div className="flex gap-2 justify-center pb-2">
              {["10", "12", "degree"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedLevel === level
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card/60 backdrop-blur-md text-foreground hover:bg-card/80"
                  }`}
                >
                  {level === "degree" ? "Degree Level" : `${level}th Level`}
                </button>
              ))}
            </div>

            {/* Exams Grid by Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {examsByLevel[selectedLevel].map((exam, index) => (
                <PscExamTile
                  key={index}
                  title={exam.title}
                  examId={exam.examId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
