import data from "../../data/index.json";
import { useState } from "react";

export default function MySkills(){
    const [hoveredSkill, setHoveredSkill] = useState(null);
    
    return (
        <section className="skills--section"
        id="mySkills">
            <div className="portfolio-container" style={{ textAlign: "center", marginBottom: "40px" }}>
                <p className="section--title" style={{ 
                    display: "inline-block", 
                    color: "#5e3bee", 
                    padding: "8px 16px", 
                    backgroundColor: "rgba(94, 59, 238, 0.1)", 
                    borderRadius: "4px",
                    marginBottom: "16px" 
                }}>
                    My Skills
                </p>
                <h2 className="skills--section--heading" style={{ marginTop: "10px" }}>My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} 
                        className="skills--section--card"
                        style={{ 
                            transition: "all 0.3s ease",
                            transform: hoveredSkill === index ? "translateY(-10px)" : "translateY(0)",
                            boxShadow: hoveredSkill === index ? "0 10px 30px rgba(94, 59, 238, 0.2)" : "none"
                        }}
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <div className="skills--section--img" style={{ 
                            margin: "0 auto",
                            borderRadius: "15px",
                            backgroundColor: "white",
                            padding: "15px"
                        }}>
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div 
                        className="skills--section--card--content" style={{ textAlign: "center" }}>
                            <h3 
                            className="skills--section--title" style={{ color: hoveredSkill === index ? "#5e3bee" : "#282938" }}>
                                {item.title}
                            </h3>
                            <p className="skills--section--description" style={{ 
                                backgroundColor: hoveredSkill === index ? "rgba(94, 59, 238, 0.1)" : "transparent",
                                padding: "5px 10px",
                                borderRadius: "20px",
                                display: "inline-block"
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}