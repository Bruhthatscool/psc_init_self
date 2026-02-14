import { ExamTile } from "./exam-tile";
import { PscExamTile } from "./psc-exam-tile";
import { NewsTicker } from "./news-ticker";
import kpscLogo from "@/assets/kpsclogo.jpg";
import { useState } from "react";
import Grainient from "../Grainient";

export function Dashboard() {
  const [selectedLevel, setSelectedLevel] = useState("10");
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      mainTitle: "KERALA PUBLIC SERVICE COMMISSION",
      subtitle: "Kerala Public Service Commission",
      upcomingTitle: "Upcoming Exams",
      upcomingSubtitle: "Browse all active examinations and important dates",
      pscTitle: "PSC Examinations",
      pscSubtitle: "Explore exams by educational qualification level",
      degreeLabel: "Degree Level",
    },
    ml: {
      mainTitle: "കേരള പബ്ലിക് സർവീസ് കമ്മീഷൻ",
      subtitle: "കേരള പബ്ലിക് സർവീസ് കമ്മീഷൻ",
      upcomingTitle: "അറിഞ്ഞിരിക്കേണ്ട പരീക്ഷകൾ",
      upcomingSubtitle: "സജീവമായ എല്ലാ പരീക്ഷകളും പ്രധാന തീയതികളും",
      pscTitle: "പി.എസ്. സി പരീക്ഷകൾ",
      pscSubtitle: "വിദ്യാഭ്യാസ യോഗ്യത അടിസ്ഥാനത്തിൽ പരീക്ഷകൾ",
      degreeLabel: "ഡിഗ്രി ലെവൽ",
    },
  };

  const upcomingExams = [
    {
      title: {
        en: "Lower Division Clerk (LDC)",
        ml: "ലോവർ ഡിവിഷൻ ക്ലാർക്ക് (LDC)",
      },
      lastDate: "20 March 2026",
      status: "Open",
    },
    {
      title: { en: "Assistant Professor", ml: "അസിസ്റ്റന്റ് പ്രൊഫസർ" },
      lastDate: "15 April 2026",
      status: "Closed",
    },
    {
      title: { en: "Police Constable", ml: "പോലീസ് കോൺസ്റ്റബിൾ" },
      lastDate: "02 May 2026",
      status: "Open",
    },
    {
      title: { en: "Senior Clerk", ml: "സീനിയർ ക്ലാർക്ക്" },
      lastDate: "10 June 2026",
      status: "Result Published",
    },
    {
      title: {
        en: "Village Field Assistant",
        ml: "വില്ലേജ് ഫീൽഡ് അസിസ്റ്റന്റ്",
      },
      lastDate: "25 July 2026",
      status: "Open",
    },
    {
      title: { en: "Tax Auditor", ml: "ടാക്‌സ് ഓഡിറ്റർ" },
      lastDate: "30 August 2026",
      status: "Closed",
    },
  ];

  const examsByLevel = {
    10: [
      {
        title: {
          en: "Lower Division Clerk (LDC)",
          ml: "ലോവർ ഡിവിഷൻ ക്ലാർക്ക് (LDC)",
        },
        examId: "ldc",
      },
      {
        title: {
          en: "Last Grade Servants (LGS)",
          ml: "ലാസ്റ്റ് ഗ്രേഡ് സർവന്റ്സ് (LGS)",
        },
        examId: null,
      },
      {
        title: {
          en: "Village Field Assistant (VFA)",
          ml: "വില്ലേജ് ഫീൽഡ് അസിസ്റ്റന്റ് (VFA)",
        },
        examId: null,
      },
      {
        title: { en: "Police Constable", ml: "പോലീസ് കോൺസ്റ്റബിൾ" },
        examId: null,
      },
      {
        title: {
          en: "Assistant Prison Officer",
          ml: "അസിസ്റ്റന്റ് പ്രിസൺ ഓഫീസർ",
        },
        examId: null,
      },
      {
        title: {
          en: "Typist Grade II / Data Entry Operator",
          ml: "ടൈപ്പിസ്റ്റ് ഗ്രേഡ് II / ഡേറ്റാ എൻട്രി ഓപ്പറേറ്റർ",
        },
        examId: null,
      },
      {
        title: {
          en: "Office Attendant / Peon / Watchman",
          ml: "ഓഫീസ് അറ്റൻഡന്റ് / പീയൺ / വാച്ച്മാൻ",
        },
        examId: null,
      },
      {
        title: { en: "Laboratory Attender", ml: "ലബോറട്ടറി അറ്റൻഡർ" },
        examId: null,
      },
    ],
    12: [
      {
        title: {
          en: "Civil Police Officer / Women Civil Police Officer",
          ml: "സിവിൽ പോലീസ് ഓഫീസർ / വനിതാ സിവിൽ പോലീസ് ഓഫീസർ",
        },
        examId: null,
      },
      {
        title: { en: "Beat Forest Officer", ml: "ബീറ്റ് ഫോറസ്റ്റ് ഓഫീസർ" },
        examId: null,
      },
      {
        title: { en: "Fireman / Firewoman", ml: "ഫയർമാൻ / ഫയർവുമൺ" },
        examId: null,
      },
      {
        title: { en: "Civil Excise Officer", ml: "സിവിൽ എക്സൈസ് ഓഫിസർ" },
        examId: null,
      },
      {
        title: { en: "Office Assistant", ml: "ഓഫീസ് അസിസ്റ്റന്റ്" },
        examId: null,
      },
      {
        title: {
          en: "Computer Assistant Grade II",
          ml: "കമ്പ്യൂട്ടർ അസിസ്റ്റന്റ് ഗ്രേഡ് II",
        },
        examId: null,
      },
    ],
    degree: [
      {
        title: {
          en: "University Assistant",
          ml: "യുണിവേഴ്സിറ്റി അസിസ്റ്റന്റ്",
        },
        examId: null,
      },
      {
        title: {
          en: "Secretariat / Kerala Administrative Tribunal (KAT) Assistant",
          ml: "സെക്രറ്ററിയറ്റ് / കേരള അഡ്മിനിസ്‌ട്രേറ്റീവ് ട്രിബ്യൂണൽ (KAT) അസിസ്റ്റന്റ്",
        },
        examId: null,
      },
      {
        title: {
          en: "Sub Inspector of Police (SI)",
          ml: "സബ് ഇൻസ്പെക്ടർ ഓഫ് പോലീസ് (SI)",
        },
        examId: null,
      },
      {
        title: { en: "Excise Inspector", ml: "എക്സൈസ് ഇൻസ്പെക്ടർ" },
        examId: null,
      },
      {
        title: {
          en: "Company / Board / Corporation Assistant",
          ml: "കമ്പനി / ബോർഡ് / കോർപ്പറേഷൻ അസിസ്റ്റന്റ്",
        },
        examId: null,
      },
      {
        title: { en: "Assistant Jailor", ml: "അസിസ്റ്റന്റ് ജയിലർ" },
        examId: null,
      },
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
                  {translations[lang].mainTitle}
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
                  {translations[lang].subtitle}
                </p>
              </div>

              {/* Right Side - Toggle + Logo */}
              <div className="flex flex-col items-end gap-3">
                <button
                  onClick={() => setLang((l) => (l === "en" ? "ml" : "en"))}
                  className="px-4 py-2 bg-card/60 backdrop-blur-md rounded-lg text-sm font-medium hover:bg-card/80 transition-colors"
                >
                  {lang === "en" ? "മലയാളം" : "English"}
                </button>

                <div className="flex justify-center md:justify-end">
                  <img
                    src={kpscLogo}
                    alt="KPSC Logo"
                    className="h-24 md:h-32 object-contain rounded-xl shadow-lg"
                  />
                </div>
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
                {translations[lang].upcomingTitle}
              </h2>
              <p className="text-muted-foreground">
                {translations[lang].upcomingSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingExams.map((exam, index) => (
                <ExamTile
                  key={index}
                  title={exam.title[lang]}
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
                {translations[lang].pscTitle}
              </h2>
              <p className="text-muted-foreground">
                {translations[lang].pscSubtitle}
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
                  {level === "degree"
                    ? translations[lang].degreeLabel
                    : `${level}th Level`}
                </button>
              ))}
            </div>

            {/* Exams Grid by Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {examsByLevel[selectedLevel].map((exam, index) => (
                <PscExamTile
                  key={index}
                  title={exam.title[lang]}
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
