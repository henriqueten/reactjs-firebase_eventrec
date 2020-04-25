

import React from "react";
import Woman from "../../../image/woman.jpg";



import "./styles.css";

export default function DataUserMyEvent() {
    return (
        <>
            <div className="gridUser">

                <div className="justArea">
                    <div className=" bannerImg" ></div>

                    <div >
                        <img className="gridImg" src={Woman} alt="woman" />
                    </div>
                </div>


                <div className="gridTitle">
                    <div className="styleTitle">
                        <div>
                            <strong>
                                Maria Marrua
                            </strong>
                        </div>
                        <div className="stiloLabel" >
                            <label  >
                                Prof Sexologia, PHd Adm de Emp., bla bla bla </label>
                        </div>
                    </div>


                </div>

                <div className="gridstatus">
                    <div className="gridstrong">                    
                        <strong >
                        Status de Compra
                        </strong>
                    </div>

                    <div className="gridsUl">                   
                        <ul>
                            <li>
                                Compras realizadas: <a>20</a>
                            </li>
                            <li>
                                Agendados: <a>9</a>
                            </li>
                            <li>
                                vencidos: <a>9</a>
                            </li>
                        </ul>
                       
                  
                    </div>

                </div>



            </div>
        </>)
}