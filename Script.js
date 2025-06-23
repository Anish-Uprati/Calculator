let input = document.getElementById('inputBOx');
let buttons = document.querySelectorAll('button');
let string = "";
let evaluated = false;  
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                if (string.trim() === "") {
                    string = "0";
                }
                
                if (!evaluated) {
                    string = string.replace(/%/g, "/100");
                    string = eval(string).toString();
                    input.value = string;
                    evaluated = true;  
                } else {
                    
                    input.value = string;
                }
            } catch {
                input.value = "Error";
                string = "";
                evaluated = false;
            }
        }
        else if (value === "AC") {
            string = "";
            input.value = "";
            evaluated = false;
        }
        else if (value === "DEL") {
            
            if (evaluated) {
                string = "";
                input.value = "";
                evaluated = false;
            } else {
                string = string.slice(0, -1);
                input.value = string;
            }
        }
        else {
        
            if (evaluated) {
                string = value;
                evaluated = false;
            } else {
                string += value;
            }
            input.value = string;
        }
    });
});
