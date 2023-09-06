import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/images/bg.png";
import Btn from "./components/btn";
import Sound from "./assets/sounds/btnsong.mp3";
import Sound2 from "./assets/sounds/umasaa.mp3";
import { Howl, Howler } from "howler";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [hasil, setHasil] = useState("");
  const [soal, setSoal] = useState("");
  let sound = new Howl({
    src: [Sound],
  });

  let sound2 = new Howl({
    src: [Sound2],
  });

  useEffect(() => {
    try {
      // Replace "x" with "*"
      let modifiedString = soal.replace(/x/g, "*");

      // Replace "," with "."
      let modifiedString2 = modifiedString.replace(/,/g, ".");

      // Evaluate the expression using eval
      let evaluasi = eval(modifiedString2);

      // Check if the result is a valid number
      if (!isNaN(evaluasi)) {
        // Convert the result to a string and replace "." with ","
        let total = evaluasi.toString().replace(/\./g, ",");
        setHasil(total);
      } else {
        // Handle the case when the expression is not valid
      }
    } catch (error) {
      // Handle any errors that may occur during evaluation
      // setHasil("Error");
    }
  }, [soal]);

  const btn = [
    "C",
    "+/-",
    ",",
    "DEL",
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "X",
    "7",
    "8",
    "9",
    "-",
    "=",
    "0",
    "+",
  ];

  const love = (time) => {
    sound2.play();
    setTimeout(() => {
      setIsDisplay(true);
    }, time);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const klikBtn = (i) => {
    if (i == 0) {
      setHasil("?");
      setSoal("");
      sound.play();
    }
    if (i == 1) {
      if (soal > 0) {
        setSoal(-soal);
      } else if (soal < 0) {
        setSoal(Math.abs(soal));
      } else {
        setSoal("");
      }
      sound.play();
    }
    if (i == 2) {
      setSoal(soal != "" ? soal + "," : "0,");
      sound.play();
    }
    if (i == 3) {
      let newStr = soal.slice(0, -1);
      setSoal(newStr);
      sound.play();
    }
    if (i == 4) {
      setSoal(soal + "1");
      sound.play();
    }
    if (i == 5) {
      setSoal(soal + "2");
      sound.play();
    }
    if (i == 6) {
      setSoal(soal + "3");
      sound.play();
    }
    if (i == 7) {
      setSoal(soal + "/");
      sound.play();
    }
    if (i == 8) {
      setSoal(soal + "4");
      sound.play();
    }
    if (i == 9) {
      setSoal(soal + "5");
      sound.play();
    }
    if (i == 10) {
      setSoal(soal + "6");
      sound.play();
    }
    if (i == 11) {
      setSoal(soal + "x");
      sound.play();
    }
    if (i == 12) {
      setSoal(soal + "7");
      sound.play();
    }
    if (i == 13) {
      setSoal(soal + "8");
      sound.play();
    }
    if (i == 14) {
      setSoal(soal + "9");
      sound.play();
    }
    if (i == 15) {
      setSoal(soal + "-");
      sound.play();
    }
    if (i == 16) {
      setSoal(":)");
      setHasil("I LOVE U");
      sound.play();
      love(2000);
    }
    if (i == 17) {
      setSoal(soal == "" ? "" : soal + "0");
      sound.play();
    }
    if (i == 18) {
      setSoal(soal + "+");
      sound.play();
    }
  };

  return (
    <div className="flex justify-center items-center overflow-hidden h-screen">
      <div className="w-full absolute h-full primary-bg -z-20 opacity-50"></div>
      <div className="h-screen w-screen relative max-w-[400px]">
        <img
          src={bg}
          alt=""
          className="w-screen h-screen absolute -z-10 top-0"
        />
        <AnimatePresence mode="wait">
          {isDisplay || (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center items-center min-h-screen"
            >
              <div className="mono z-20 relative text-7xl logo leading-[3.7rem]">
                <p>
                  CALCU <br /> LATOR
                </p>
              </div>
              <div className="w-full px-7 mt-6 relative">
                <div className="mono text-8xl logo absolute top-[-50px] left-2">
                  <p>#</p>
                </div>
                <div className="w-full primary-bg card">
                  <div className="flex justify-end px-6 pt-4">
                    <p className="text-white mono text-4xl">
                      {hasil ? hasil : "?"}
                    </p>
                  </div>
                  <div className="flex justify-end px-6 pb-4">
                    <p className="text-white mono text-xl">
                      {soal ? soal : "0"}
                    </p>
                  </div>
                  <div className="secondary-bg p-6 card-2">
                    <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-5 gap-4">
                      {btn.map((item, index) => (
                        <Btn
                          name={item}
                          key={index}
                          onclick={() => klikBtn(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isDisplay && (
            <div className="flex-col flex overflow-hidden">
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 2, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 4, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 2, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 6, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 4, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 6, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 4, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 5, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 7, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 6, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 7, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 8, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 6, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 5, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 5.3, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 2.5, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 4.5, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 3.5, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 6.4, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "-200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 3.4, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.p
                initial={{ x: "200%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 5.5, duration: 10, ease: "linear" }}
                className="textwalk text-4xl"
              >
                ILOVEUILOVEUILOVEUILOVEUILOVEU
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 20, duration: 1, ease: "easeOut" }}
                className="fixed popup flex flex-col items-center py-4 w-[300px]"
              >
                <button
                  onClick={refreshPage}
                  className=" absolute top-[-10px] right-0 rounded-full secondary-bg w-7 h-7 flex justify-center items-center box-x"
                >
                  <p className="mono text-2xl close">X</p>
                </button>
                <p className="nice mono text-white text-xl mt-2">
                  HAVE A NICE DAY
                </p>
                <svg
                  id="emoji"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                >
                  <g id="color">
                    <circle cx="36" cy="36" r="23" fill="#FCEA2B" />
                    <path
                      fill="#D22F27"
                      d="M26.4992,27.4384c-1.2653-3.3541-6.441-3.5687-6.1168,1.3178c0.0431,0.6485,0.281,1.2724,0.6414,1.8135 l5.3179,6.4224l0,0l5.2212-6.266c0.5796-0.6964,0.9224-1.5779,0.905-2.4853c-0.0863-4.3523-5.0509-4.0351-6.1274-0.8036"
                    />
                    <path
                      fill="#D22F27"
                      d="M45.8012,27.4384c-1.2547-3.3541-6.3873-3.5687-6.0658,1.3178c0.0428,0.6485,0.2787,1.2724,0.6361,1.8135 l5.2737,6.4224l0,0l5.1777-6.266c0.5747-0.6964,0.9147-1.5779,0.8974-2.4853c-0.0856-4.3523-5.0089-4.0351-6.0763-0.8036"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M48.5859,42.6735c0,5.6296-4.1784,10.1046-12.5541,10.1046c-8.3738,0-12.6069-4.4888-12.6069-10.1047 C23.4249,42.6734,36.4503,45.7045,48.5859,42.6735z"
                    />
                  </g>
                  <g id="hair" />
                  <g id="skin" />
                  <g id="skin-shadow" />
                  <g id="line">
                    <circle
                      cx="36"
                      cy="36"
                      r="23"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M48.5859,42.6735c0,5.6296-4.1784,10.1046-12.5541,10.1046c-8.3738,0-12.6069-4.4888-12.6069-10.1047 C23.4249,42.6734,36.4503,45.7045,48.5859,42.6735z"
                    />
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M26.4992,27.4384c-1.2653-3.3541-6.441-3.5687-6.1168,1.3178c0.0431,0.6485,0.281,1.2724,0.6414,1.8135l5.3179,6.4224l0,0 l5.2212-6.266c0.5796-0.6964,0.9224-1.5779,0.905-2.4853c-0.0863-4.3523-5.0509-4.0351-6.1274-0.8036"
                    />
                    <path
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M45.8012,27.4384c-1.2547-3.3541-6.3873-3.5687-6.0658,1.3178c0.0428,0.6485,0.2787,1.2724,0.6361,1.8135l5.2737,6.4224l0,0 l5.1777-6.266c0.5747-0.6964,0.9147-1.5779,0.8974-2.4853c-0.0856-4.3523-5.0089-4.0351-6.0763-0.8036"
                    />
                  </g>
                </svg>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
