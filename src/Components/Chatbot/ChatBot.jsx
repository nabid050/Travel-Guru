import { useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaComments,
  FaUser,
} from "react-icons/fa";


const ChatBot = () => {


  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([

    {
      sender:"bot",
      text:
      "Hello 👋 I am Travel Guru AI Assistant. How can I help you today?"
    }

  ]);



  const sendMessage = () => {


    if(!message.trim()) return;


    setMessages([
      ...messages,

      {
        sender:"user",
        text:message
      },


      {
        sender:"bot",
        text:
        "Thanks for your message. I am finding the best travel options for you ✈️"
      }

    ]);


    setMessage("");

  };




return (

<>


{/* Chat Window */}


{
open &&

<div
className="
fixed
right-6
bottom-24
w-[380px]
max-w-[90vw]
bg-white
rounded-3xl
shadow-2xl
overflow-hidden
z-50
border
animate-fadeIn
"
>



{/* Header */}


<div
className="
bg-gradient-to-r
from-[#122B8F]
to-blue-600
text-white
p-5
flex
justify-between
items-center
"
>


<div className="flex gap-3 items-center">


<div
className="
bg-white
text-[#122B8F]
w-12
h-12
rounded-full
flex
items-center
justify-center
text-xl
"
>

<FaRobot/>

</div>


<div>

<h3 className="font-bold text-lg">
Travel Guru AI
</h3>


<p className="text-sm opacity-90">
🟢 Online Assistant
</p>


</div>


</div>



<button
onClick={()=>setOpen(false)}
>

<FaTimes size={20}/>

</button>


</div>





{/* Chat Body */}


<div
className="
h-[420px]
overflow-y-auto
p-5
space-y-4
bg-slate-50
"
>



{
messages.map((msg,index)=>(


<div
key={index}

className={

msg.sender==="user"

?

"flex justify-end"

:

"flex justify-start"

}

>


<div

className={

msg.sender==="user"

?

"bg-[#122B8F] text-white px-4 py-3 rounded-2xl max-w-[75%]"

:

"bg-white shadow px-4 py-3 rounded-2xl max-w-[75%]"

}

>


<div className="flex gap-2 items-center mb-1">


{

msg.sender==="user"

?

<FaUser/>

:

<FaRobot/>

}


</div>


{msg.text}


</div>


</div>


))

}



</div>





{/* Input */}


<div
className="
border-t
bg-white
p-4
flex
gap-3
"
>


<input

type="text"

placeholder="Ask about flights, hotels..."

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

className="
flex-1
border
rounded-full
px-5
py-3
outline-none
focus:ring-2
focus:ring-blue-400
"

/>


<button

onClick={sendMessage}

className="
bg-[#122B8F]
text-white
w-12
h-12
rounded-full
flex
items-center
justify-center
hover:scale-105
transition
"

>

<FaPaperPlane/>

</button>



</div>



</div>


}






{/* Floating Chat Button */}

<button

onClick={()=>setOpen(!open)}

className="
fixed
right-6
bottom-6
bg-[#122B8F]
text-white
w-16
h-16
rounded-full
shadow-xl
flex
items-center
justify-center
text-2xl
hover:scale-110
transition
z-50
"

>


{
open ?

<FaTimes/>

:

<FaComments/>

}


</button>



</>


);

};


export default ChatBot;