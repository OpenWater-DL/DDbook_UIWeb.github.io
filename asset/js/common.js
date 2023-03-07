/*
footerHtml = ` 
<footer class="l-footer">
<p>© 2023 認知症世界一周ツアー</p>
</footer>`
*/

createFooter();
function createFooter(){
    const footer = document.createElement('footer')
    footer.classList.add('l-footer')
    footer.innerHTML = `<p>© 2023 認知症世界一周ツアー</p>`
    document.body.appendChild(footer);
}


function createSelectList(contentsArr, tgtPosition,idName ){    
    
    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = idName;
    selectList.classList.add('o-c-input-sel')
    tgtPosition.appendChild(selectList);
    
    //Create and append the options
    for (var i = 0; i < contentsArr.length; i++) {
        var option = document.createElement("option");
        option.value = contentsArr[i];
        option.text = contentsArr[i];
        selectList.appendChild(option);
    }
}





// Method
function createCheckbox(tgtElPos,labelText,checkboxId) {
    var targetPos = tgtElPos;
     
    // creating checkbox element
    var checkbox = document.createElement('input');
     
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = checkboxId;
     
    // creating label for checkbox
    var label = document.createElement('label');
     
    // assigning attributes for
    // the created label tag
    label.htmlFor = checkboxId;
     
    // appending the created text to
    // the created label tag
    //这里是lable的描述
    label.appendChild(document.createTextNode(labelText));
     
    // appending the checkbox
    // and label to div
    let checkBoxSet = document.createElement('div')
    checkBoxSet.appendChild(checkbox);
    checkBoxSet.appendChild(label);

    targetPos.appendChild(checkBoxSet);

}