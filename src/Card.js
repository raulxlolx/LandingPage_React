import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

const Card = ({ imgsrc, title, body, audiosrc }) => (
    <div className="card">
        <motion.div
            initial={{ opacity: 0, y: 100 }} // Agrega la propiedad y con un valor inicial de 100
            whileInView={{ opacity: 1, y: 0 }} // Cambia el valor de y a 0 cuando esté en vista
            transition={{ duration: 2 }}
        >
            <img src={imgsrc} alt="Imagen Disco" style={{ width: "100%" }} />
            <div className="container">
                <h4>{title}</h4>
                <p>{body}</p>
                <audio controls>
                    <source src={audiosrc} type="audio/mpeg" />
                </audio>
            </div>
        </motion.div>
    </div>
);
export default Card;
