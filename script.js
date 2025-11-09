   var input = document.getElementById("input");
                    var Addbtn = document.getElementById("ad");
                    var List = document.getElementById("todolist")
                function add()
                {
                    if(input.value=='')
                    {
                        alert("Enter The Task");
                    }
                    else
                    {
                        let li=document.createElement("li");
                        li.innerHTML=input.value;
                        List.appendChild(li);
                        var span = document.createElement("span");
                        span.innerHTML="\u00d7";
                        li.appendChild(span);
                    }
                    input.value="";
                }
               List.addEventListener("click", function(e)
               {
                    if(e.target.tagName==="LI")
                    {
                        e.target.classList.toggle("checked");
                    }
                    else if(e.target.tagName==="SPAN")
                    {
                        e.target.parentElement.remove();
                    }
               },false);