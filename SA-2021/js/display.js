var displayTable = document.getElementById('displayTable')
var tbody = displayTable.firstElementChild 
var object = null
var objectt = null

if(data != null){
    for(var i = 0; i < data.length; i++){
        object = data[i]
        objectt = Object.getOwnPropertyNames(object)
        var tr = document.createElement('tr')
        var checker = true
        for(var ii = 0; ii < objectt.length; ii++){
            var td = document.createElement('td')
            td.scope = 'row'
            if(ii == 0 && checker){ 
                var tdTextNode = document.createTextNode(i + 1)
                td.appendChild(tdTextNode)
                tr.appendChild(td)
                tbody.appendChild(tr)
                ii--
                checker = false
            }
            else{
                td.className = 'text-center'
                if(ii == objectt.length - 1){ 

                    var btn = document.createElement("BUTTON");
                    btn.setAttribute('data-bs-target', '#viewItem')
                    btn.innerHTML = "View";    
                    btn.className = "btn btn-primary mb-2" 
                    btn.id = "viewOrder"              
                    document.body.appendChild(btn);
                    btn.setAttribute('data-bs-toggle', 'modal')
                    td.appendChild(btn)
                    tr.appendChild(td)
                    tbody.appendChild(tr)  

                }

                else if(ii == objectt.length - 2){ 
                    var result = data[i][objectt[objectt.length - 1]]
                    var tdTextNode = document.createTextNode(result.toFixed(2))
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                     
                }

                else{ 
                    var tdTextNode = document.createTextNode(data[i][objectt[ii]])
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                    
                }
            }
        }
    }
}