let addInput = document.querySelector('.addInput');
let addButton = document.querySelector('.addButton');
let addTodo = document.querySelector('.addTodo')
let checkbox = document.getElementsByClassName('.check')
let removeButton = document.querySelector('#deleteItem1')
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
let todos = []
let itemsArray = localStorage.getItem('items');

if(itemsArray.length > 0) {
  JSON.parse(itemsArray);
  todos.push(itemsArray);

  console.log(todos );
}




// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem(items))

// console.log(checkbox)
        // make button click
        addButton.addEventListener('click', function(){ 

          // add nnew input value to input
          let inputValue = addInput.value

          if (inputValue === '') { 
            alert('fill the space')
          } else {
            todos.push(inputValue)  
            // console.log(todos)

            // addInput.addEventListener('submit', function (e) {
              // e.preventDefault();
            
              itemsArray.push(input.value);
              localStorage.setItem('items', JSON.stringify(itemsArray));
              li(input.value);
              input.value = "";
            // });
            // data.forEach(item => {
            //   li(item);
            // })  

            // checkbox
            let checkbox = document.createElement('input')

            // cont'd of new input value
            let li = document.createElement('li')
            let newList = document.createTextNode(inputValue)

            checkbox.className = 'check'
            checkbox.id = 'checked' + todos.length
            checkbox.type = 'checkbox'
            checkbox.value = todos.length
            checkbox.name = 'todo_' + todos.length

            // add event listener after creating checkbox
            checkbox.addEventListener('change', function(e) {
             const key = e.target.inputValue
             if( this.checked) {
              //  checkbox is checked..
              
            console.log(checkbox)
              li.style.setProperty("text-decoration", "line-through"); 
              // checkbox.style.setProperty

             } else {
              //  checkbox is not checked
              
               li.style.setProperty("text-decoration", "none");
             } 

            
            })

           
            


                  // let removeTodo = document.getElementsByTagName('li')
                  // let removeButton = document.getElementsByTagName('li')
                let removeButton = document.createElement('span')
                    // removeButton.className='fas fa-car'
                    let text = document.createTextNode(' ')
                removeButton.className = 'far fa-trash-alt'
                removeButton.id = 'deleteItem' + todos.length
                li.className = 'checkList' + todos.length
                    // removeButton.classList.add(removeButton)
                removeButton.append(text)
                li.appendChild(checkbox);
                li.appendChild(newList)
                li.appendChild(removeButton)
                addTodo.appendChild(li)
                    // li.appendChild(removeButton)
                    // removeButton.appendChild(text)

                    removeButton.addEventListener('click', function() {
                
                      removeButton = li.remove()
                    })

          }
        })
