/* eslint-disable react/style-prop-object */
import "./Education.css";

function Education() {

    return (
        <>
            
            <h1>My Education Timeline</h1>
  <div className="timeline">
    <ul>
      
      <li>
        <div className="content">
          <h3>B.Tech in CSE</h3>
                            <p>
                                B.P. Poddar Institute of Management & Technology
                                </p>
          </div>
        <div className="time">
          <h4>2021-In Progress</h4>
        </div>
      </li>
      
      <li>
        <div className="content">
          <h3>What is Lorem Ipsum?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className="time">
          <h4>June 2021</h4>
        </div>
      </li>
      
      <li>
        <div className="content">
          <h3>What is Lorem Ipsum?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className="time">
          <h4>May 2019</h4>
        </div>
      </li>
     
                    <div style={{ clear:"both"}}></div>
    </ul>
  </div>
        </>
    )

}


export default Education;