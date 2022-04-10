import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'PROJECT DESTINY',
    desc: 'An Autonomous Artificial Intelligence Based Digital Assistant.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Stream Data Analyzer',
    desc: 'An real time stream data analyzer machine learning model.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Destiny Home Automation',
    desc: 'Integrated Destiny Into Home Automation',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Project JARVIS',
    desc: 'A C# Based Voice assistant.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'ASR Model For Destiny',
    desc: 'Personalised Automatic Speech Recognition For Destiny.',
    img: ProjectImg,
  },
];

export default projects;
