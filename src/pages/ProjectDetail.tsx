import { useParams } from "react-router-dom";

const projectData: any = {
  "write-n-site": {
    title: "Write n Site",
    description:
      "Created an ML system for handwritten text digitization using supervised learning, achieving over 92% character recognition accuracy while ensuring a user-friendly interface for real-world use.",
  },
  "f1-predictions": {
    title: "F1 Race Performance Predictions",
    description:
      "Developed an ML model to predict Formula 1 race performance based on weather conditions, enabling strategic decision-making and race analytics.",
  },
  "panda-management": {
    title: "Panda Management System",
    description:
      "Built a React.js + Firebase application to catalog 200+ household items, reducing misplaced item incidents by 30% within the first month.",
  },
  "radar-sensor": {
    title: "RADAR Sensor System",
    description:
      "Designed an Arduino-based radar using ultrasonic sensors for real-time object detection, improving detection accuracy by 25%.",
  },
  "quantum-qulambu": {
    title: "Quantum Qulambu",
    description:
      "Designing a full-stack South Indian food delivery and community app featuring exclusive recipes, personalized health insights, and loyalty rewards.",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id as string];

  if (!project) return <div className="text-white p-20">Project not found.</div>;

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white px-20 py-28">

      <h1 className="text-5xl font-bold mb-10">
        {project.title}
      </h1>

      <p className="text-white/80 text-lg max-w-3xl leading-relaxed">
        {project.description}
      </p>

    </div>
  );
};

export default ProjectDetail;
