document.addEventListener("DOMContentLoaded", () => {
    let colors = ['yellow', 'pink', 'blue', 'green'];
    let colorText = document.querySelectorAll(".multicolor");
    
    colorText.forEach( (element) => {
    let letters = element.textContent.split('');
    element.innerHTML = '';

        for (let i = 0; i < letters.length; i++) {
            let colorIndex = i % colors.length;
            let span = document.createElement('span');
            span.textContent = letters[i];
            span.className = colors[colorIndex];
            element.appendChild(span);
        }
        } 
    )
  
});

