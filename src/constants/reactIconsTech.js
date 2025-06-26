import {
  // Lenguajes y frameworks
  SiPython, SiNodedotjs, SiJavascript, SiCsharp,
  SiNextdotjs, SiMysql, SiMicrosoftsqlserver, SiGit,
  SiAngular, SiReact, SiDocker, SiMicrosoftazure,
  SiVisualstudiocode, SiJupyter, SiPowerbi, SiKubernetes,
  SiTensorflow, SiScikitlearn, SiKeras, SiPytorch,
  SiPandas, SiNumpy, SiTableau,
  SiGo, SiDart, SiDotnet
} from "react-icons/si";

export const techStack = {
    languagesFrameworks: [
    { name: "Python", icon: SiPython },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "C#", icon: SiCsharp },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Git", icon: SiGit },
  ],

  devTools: [
    { name: "Angular", icon: SiAngular },
    { name: "React", icon: SiReact },
    { name: "Docker", icon: SiDocker },
    { name: "Azure", icon: SiMicrosoftazure },
    { name: "VS Code", icon: SiVisualstudiocode },
    { name: "Jupyter Notebook", icon: SiJupyter },
    { name: "Kubernetes", icon: SiKubernetes },
  ],

  databasesBI: [
    { name: "MySQL", icon: SiMysql },
    { name: "SQL Server", icon: SiMicrosoftsqlserver },
    { name: "Power BI", icon: SiPowerbi },
  ],

  mlLibraries: [
    { name: "Keras", icon: SiKeras },
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "Matplotlib", icon: SiPython}, // Usamos Chart.js como sustituto visual para Matplotlib
    { name: "Seaborn", icon: SiTableau }, // Usamos Tableau como sustituto visual para Seaborn
  ],

  mlTechniques: [
    { name: "Redes Neuronales", icon: SiTensorflow },
    { name: "Aprendizaje Supervisado", icon: SiScikitlearn },
    { name: "No Supervisado", icon: SiScikitlearn },
    { name: "Modelos Predictivos", icon: SiPytorch },
    { name: "Transfer Learning", icon: SiKeras },
  ],
    learning: [
    { name: "Go", icon: SiGo, level: 30 },
    { name: "React Native", icon: SiReact, level: 50 },
    { name: "Dart", icon: SiDart, level: 40 },
    { name: ".NET", icon: SiDotnet, level: 60 },
  ]
};
