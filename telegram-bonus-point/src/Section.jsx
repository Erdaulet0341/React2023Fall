import p1 from "./img/profile-1.png";
import p2 from "./img/profile-2.png";
import p3 from "./img/profile-3.png";


export default function Section(props){
    let ava
    if(props.photo === "1"){
        ava = p1
    }
    else if(props.photo === "2"){
        ava = p2
    }
    else if(props.photo === "3"){
        ava = p3
    }


    return (
        <section class="content">
          <div class="container" id="chatBox">
            <div class="content-header">
              <div class="image">
                <img src={ava} alt="" />
              </div>
              <div class="details">
                <h3>{props.name}</h3>
                <span>{props.onlinetime}</span>
              </div>
              <div class="icons">
                <i class="fas fa-phone-alt"></i>
                <i class="fas fa-search"></i>
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <div class="chat-container">
              <div class="chat-msg">
                <p>{props.msg}</p>
                <span class="time">{props.sendtime}</span>
              </div>
            </div>

            <div class="message-box">
              <div class="message-content">
                <i class="far fa-smile"></i>
                <input type="text" placeholder="Message" />
                <i class="fas fa-paperclip"></i>
              </div>
              <div class="micro">
                <i class="fas fa-microphone"></i>
              </div>
            </div>
          </div>
        </section>
    )
}