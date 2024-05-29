import {useRef,useState,useEffect} from "react";
function Typing({
    Text,
    typingSpeed = 100,
    deletingSpeed = 50,
    duration = 1000
}) {
    const [text,setText] = useState("");
    const [isDeleting,setisdeleting] = useState(false);
    const [index,setIndex] = useState(0);

    let tRef=useRef(0);

    useEffect(() => {
        const handleTyping = () =>{
        //    if(Text.length>=Text[index].length || index<=0){
        //     setisdeleting(!isDeleting);
        //    }else{
        //    isDeleting ? setText("") : setText(Text[index]);
        //    }
        if(!isDeleting){
            if(text.length < Text[index].length){
              setText((prev) => prev + Text[index].charAt(text.length));
            }
            else{

                setTimeout(() => {
                    setisdeleting(true);
                },1000)
                
            }
        }else{
            if(text.length > 0) {
                setText((prev) => prev.slice(0,-1))
            }else{
                setisdeleting(false);
                // setIndex((index+1)%Text.length);
                setIndex((prev) => (prev+1) % Text.length)
            }
        }
        };
        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed,
        );
        return() => clearTimeout(timeout);
    },[text,isDeleting,index])


    return(
        <section class="typing-effect">
          <span ref={tRef} class="caret">{text}|</span>

        </section>
    ) 
}
export default Typing;