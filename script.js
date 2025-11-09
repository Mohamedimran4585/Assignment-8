                    var input = document.getElementById("input");
                    var Addbtn = document.getElementById("ad");
                    var List = document.getElementById("todolist")
                    var EditList;
                function add()
                {
                    if(input.value=='')
                    {
                        alert("Enter The Task");
                    }
                    if(Addbtn.value==="Edit")
                        {
                            EditList.target.previousElementSibling.innerHTML=input.value;
                            Addbtn.value="Add";
                            input.value="";
                        }
                    else
                    {
                        let li=document.createElement("li");
                        let p =document.createElement("p")
                        p.innerHTML=input.value;
                        li.appendChild(p);
                        List.appendChild(li);
                        var Edit=document.createElement("button");
                        Edit.innerHTML="Edit";
                        li.appendChild(Edit);
                        const Del=document.createElement("button");
                        Del.innerHTML="Delete"
                        li.appendChild(Del);
                        Edit.classList.add("btn","Edit");
                        Del.classList.add("btn","Delete");
                    }
                    input.value=" ";
                } 
               List.addEventListener("click", function(e)
               {
                    if(e.target.tagName==="LI")
                    {
                        e.target.classList.toggle("checked");
                    }
                    else if(e.target.innerHTML==="Delete")
                    {
                        e.target.parentElement.remove();
                    }
                    else if(e.target.innerHTML==="Edit")
                        {   
                           input.value=e.target.previousElementSibling.innerHTML;
                           input.focus();
                           Addbtn.value="Edit";
                           EditList=e;
                        }
               },false);