import pregnantWoman from "../images/pregnantWoman.svg";
import babyImg from "../images/baby.svg";
import diaperImg from "../images/diaper.svg";
import laborPic from "../images/labor.svg";
import datePicker from "../images/Vector.svg";
import GainCalc from "../images/gaincalc.svg";
import Clock from "../images/clock.svg";
import ChildGrowth from "../images/childgrowth.svg";
import Memories from "../images/memories.svg";
import Scheduler from "../images/scheduler.svg";
import jotter from "../images/jotter.svg";
import babyName from "../images/babyName.svg";
import pregnancyPain from "../images/pregnancyPain.svg";
import pregnancySign from "../images/pregnancySigns.svg";


interface data {
    image: string,
    text: string
}

export const expertSectionData:data[] = [
    {
        image: pregnantWoman,
        text: "Is it safe?"
    },
    {
        image: laborPic,
        text: "Labor and Delivery"
    },
    {
        image: diaperImg,
        text: "Diapering"
    },
    {
        image: babyImg,
        text: "Baby Sleep"
    }
]

export const Icons:data[] = [
    {
        image: datePicker,
        text: "Due Date Calculatot"
    },
    {
        image: GainCalc,
        text: "Pregnancy Gain Calculator"
    },
    {
        image: Clock,
        text: "Contraction Timer"
    },
    {
        image: ChildGrowth,
        text: "Child Growth Chart"
    },
    {
        image: Scheduler,
        text: "Immunization Scheduler"
    },
    {
        image: Memories,
        text: "Memories Save"
    }
]

export const babyDiaryVideosData: data[] = [
    {
        image: jotter,
        text: "7 Baby’s Checklist"
    },
    {
        image: babyName,
        text: "Awesome baby name ideas"
    },
    {
        image: pregnancySign,
        text: "10 signs you are pregnant"
    },
    {
        image: pregnancyPain,
        text: "Pregnancy and back pain"
    }
]