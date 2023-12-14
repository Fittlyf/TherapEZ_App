import PendulumCircles from "./Exercises/PendulumCircles";
import PendulumSideways from "./Exercises/PendulumSideways";
import PendulumStraight from "./Exercises/PendulumStraight";
import Butterfly from "./Exercises/Butterfly";
import LyingArms from "./Exercises/LyingArms";
import ArmsLock from "./Exercises/ArmsLock";
import PendulumCirclesLeft from "./Exercises/PendulumCirclesLeft";
import PendulumSidewaysLeft from "./Exercises/PendulumSidewaysLeft";
import PendulumStraightLeft from "./Exercises/PendulumStraightLeft";
import NextGenTracking from "./Exercises/NextGenTracking";

export default function ExerciseManager({
    results: results,
    camera: camera,
    canvasRef: canvasRef,
    webcamRef: webcamRef,
    settimer: settimer,
    setShowCoutdown: setShowCoutdown,
    repref: repref,
    setref: setref,
    messageRef: messageRef,
    setloading: setloading,
    exerciseName: exerciseName,
    stencyl: stencyl
}) {

    if (exerciseName.current === "Pendulum Circles Right") {
        PendulumCircles({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Pendulum Sideways Right") {
        PendulumSideways({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Pendulum Straight Right") {
        PendulumStraight({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    }
    else if (exerciseName.current === "Butterfly") {
        Butterfly({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Lying Arms") {
        LyingArms({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Arms Lock") {
        ArmsLock({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Pendulum Circles Left") {
        PendulumCirclesLeft({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Pendulum Sideways Left") {
        PendulumSidewaysLeft({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "Pendulum Straight Left") {
        PendulumStraightLeft({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    } else if (exerciseName.current === "NextGenTracking") {
        NextGenTracking({
            results: results,
            camera: camera,
            canvasRef: canvasRef,
            webcamRef: webcamRef,
            settimer: settimer,
            setShowCoutdown: setShowCoutdown,
            repref: repref,
            setref: setref,
            messageRef: messageRef,
            setloading: setloading,
            exerciseName: exerciseName,
            stencyl: stencyl
        })
    }
}
